"""Plot the finger-motor loading sweep across fixed wrist postures.

The input CSV is intentionally supplied at runtime so the private source-data
location is not embedded in the site repository.
"""

from __future__ import annotations

import argparse
import csv
from pathlib import Path

import matplotlib as mpl
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D


COLORS = {
    15.0: "#0F4D92",
    30.0: "#42949E",
    45.0: "#9A4D8E",
    60.0: "#D97706",
}


def read_rows(path: Path) -> list[dict[str, float | str]]:
    with path.open(newline="", encoding="utf-8-sig") as handle:
        rows = list(csv.DictReader(handle))

    required = {"time_s", "wrist_angle_deg", "direction", "travel_pct", "cur2"}
    missing = required.difference(rows[0].keys() if rows else ())
    if missing:
        raise ValueError(f"Missing CSV columns: {', '.join(sorted(missing))}")

    parsed: list[dict[str, float | str]] = []
    for row in rows:
        parsed.append(
            {
                "time_s": float(row["time_s"]),
                "wrist_angle_deg": float(row["wrist_angle_deg"]),
                "direction": row["direction"],
                "travel_pct": float(row["travel_pct"]),
                "cur2": float(row["cur2"]),
            }
        )

    angles = sorted({row["wrist_angle_deg"] for row in parsed})
    if angles != sorted(COLORS):
        raise ValueError(f"Expected wrist postures {sorted(COLORS)}, found {angles}")
    if {row["direction"] for row in parsed} != {"out", "back"}:
        raise ValueError("Expected outward ('out') and return ('back') sweeps")
    return parsed


def build_figure(rows: list[dict[str, float | str]]) -> plt.Figure:
    mpl.rcParams.update(
        {
            "font.family": "sans-serif",
            "font.sans-serif": ["Arial", "Helvetica", "DejaVu Sans", "sans-serif"],
            "font.size": 9,
            "svg.fonttype": "none",
            "pdf.fonttype": 42,
            "axes.spines.right": False,
            "axes.spines.top": False,
            "axes.linewidth": 0.8,
            "legend.frameon": False,
        }
    )

    fig, ax = plt.subplots(figsize=(10, 4.8), facecolor="#F7F7F4")
    ax.set_facecolor("#FFFFFF")

    for angle in sorted(COLORS):
        color = COLORS[angle]
        for direction, linestyle, label in (
            ("out", "-", "Outward"),
            ("back", "--", "Return"),
        ):
            group = sorted(
                (
                    row
                    for row in rows
                    if row["wrist_angle_deg"] == angle and row["direction"] == direction
                ),
                key=lambda row: float(row["time_s"]),
            )
            ax.plot(
                [row["travel_pct"] for row in group],
                [row["cur2"] for row in group],
                color=color,
                linewidth=1.8,
                linestyle=linestyle,
                solid_capstyle="round",
                dash_capstyle="round",
                label=f"{int(angle)}° {label.lower()}",
                zorder=3,
            )

    peak = max(
        (row for row in rows if row["direction"] == "back"),
        key=lambda row: float(row["cur2"]),
    )
    peak_x = float(peak["travel_pct"])
    peak_y = float(peak["cur2"])
    ax.scatter([peak_x], [peak_y], s=34, color=COLORS[60.0], edgecolor="#FFFFFF", linewidth=1, zorder=5)
    ax.text(
        1.0,
        1.02,
        "60° return peak · 300 mA",
        transform=ax.transAxes,
        ha="right",
        va="bottom",
        color="#8B4A00",
        fontsize=8.5,
        fontweight="bold",
    )

    ax.axhline(0, color="#B9BDC0", linewidth=0.8, zorder=1)
    ax.set_xlim(-2, 102)
    ax.set_ylim(-120, 330)
    ax.set_xticks([0, 25, 50, 75, 100])
    ax.set_yticks([-100, 0, 100, 200, 300])
    ax.set_xlabel("Finger travel (%)", labelpad=8)
    ax.set_ylabel("Motor 2 current (mA)", labelpad=8)
    ax.grid(axis="y", color="#E7E9E8", linewidth=0.7)
    ax.tick_params(axis="both", colors="#596168", length=3, width=0.7)
    for spine in (ax.spines["left"], ax.spines["bottom"]):
        spine.set_color("#6E777F")

    ax.set_title(
        "Finger motor loading changes with wrist posture",
        loc="left",
        pad=18,
        color="#111418",
        fontsize=14,
        fontweight="bold",
    )
    ax.text(
        0,
        1.015,
        f"Same outward-and-return sweep · {len(rows)} servo-current readbacks",
        transform=ax.transAxes,
        color="#65717A",
        fontsize=8.5,
        va="bottom",
    )

    posture_handles = [
        Line2D([0], [0], color=COLORS[angle], linewidth=2.2, label=f"Wrist {int(angle)}°")
        for angle in sorted(COLORS)
    ]
    direction_handles = [
        Line2D([0], [0], color="#3E454B", linewidth=1.8, linestyle="-", label="Outward"),
        Line2D([0], [0], color="#3E454B", linewidth=1.8, linestyle="--", label="Return"),
    ]
    legend = ax.legend(
        handles=posture_handles + direction_handles,
        ncol=1,
        loc="upper left",
        bbox_to_anchor=(1.02, 1.0),
        bbox_transform=ax.transAxes,
        borderaxespad=0,
        columnspacing=1.2,
        handlelength=2.2,
        handletextpad=0.5,
        fontsize=8,
    )
    legend.get_frame().set_facecolor("#FFFFFF")
    legend.get_frame().set_alpha(0.92)

    fig.tight_layout(pad=1.3, rect=(0, 0, 0.82, 1))
    return fig


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("input_csv", type=Path)
    parser.add_argument("output_stem", type=Path)
    args = parser.parse_args()

    rows = read_rows(args.input_csv)
    fig = build_figure(rows)
    args.output_stem.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(args.output_stem.with_suffix(".png"), dpi=600, bbox_inches="tight", facecolor=fig.get_facecolor())
    fig.savefig(args.output_stem.with_suffix(".svg"), bbox_inches="tight", facecolor=fig.get_facecolor())
    fig.savefig(args.output_stem.with_suffix(".pdf"), bbox_inches="tight", facecolor=fig.get_facecolor())
    plt.close(fig)


if __name__ == "__main__":
    main()
