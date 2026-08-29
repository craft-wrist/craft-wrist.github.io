# CRAFT-W Project Website

Research project page for **CRAFT-W: A Direct-drive Two-DoF Wrist Extension
for the CRAFT Hand**.

## Local development

```sh
npm install
npm run dev
```

The development site is available at `http://localhost:3000/`.

## Production build

```sh
npm run build
```

The site is statically exported to `dist/client/` for GitHub Pages or another
static host.

## Public resource links

The arXiv paper, assembly documentation and video, BOM, print-file repository,
control API, and Onshape document are currently marked **coming soon**. Add each
verified public URL to the `resources` collection in `app/page.tsx` when it is
released; do not publish guessed or private links.

The current teaser is an 11-second overview montage made from the figures in
`CRAFT-Wrist-IROS-2026-Paper`. Replace `public/media/craft-w-teaser.mp4` with
the final teaser footage when it is available.
