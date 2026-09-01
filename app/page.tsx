import Header from '@/app/components/Header';
import VideoPlayer from '@/app/components/VideoPlayer';
import BibTeXCopy from '@/app/components/BibTeXCopy';
import PictureImage from '@/app/components/PictureImage';
import { bibtex, demoMetrics, resources, taskVideos } from '@/app/content';

export default function Home() {
  return (
    <>
      <Header />

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow">
              <span>Open hardware release in preparation</span>
              <span>2026</span>
            </div>
            <h1>
              CRAFT<span className="accent">-W</span>
            </h1>
            <p className="hero-title">
              A direct-drive two-DoF wrist extension for the CRAFT Hand
            </p>
            <p className="hero-lede">
              Local hand orientation for confined-space manipulation—without
              redesigning the CRAFT Hand.
            </p>
            <p className="authors">
              Yujie Pang<sup>1,2</sup> · Sadman Sakib<sup>1</sup> · Mohammad
              Abdullah Al Faruque<sup>1</sup>
            </p>
            <p className="affiliation">
              <sup>1</sup>University of California, Irvine &nbsp;·&nbsp;
              <sup>2</sup>UCInspire
            </p>

            <ul className="workspace-readout" aria-label="Demonstrated workspace">
              <li>
                <span className="readout-label">Bending</span>
                <strong>±20°</strong>
                <span>left — right</span>
              </li>
              <li>
                <span className="readout-label">Axial rotation</span>
                <strong>−18° / +80°</strong>
                <span>front — back</span>
              </li>
            </ul>

            <div className="hero-status">
              <p className="status-heading">Current status</p>
              <ul className="status-list">
                <li>
                  <span className="status-tag">Demonstrated</span>
                  Prototype assembled
                </li>
                <li>
                  <span className="status-tag">Demonstrated</span>
                  Both wrist axes actuated under load
                </li>
                <li>
                  <span className="status-tag planned">Planned</span>
                  Controlled task-level evaluation
                </li>
              </ul>
            </div>
          </div>

          <figure className="hero-figure">
            <PictureImage
              src="/media/craft-w-system.png"
              webp="/media/craft-w-system.webp"
              width={1800}
              height={1416}
              alt="CRAFT-W hardware: CAD assembly, physical prototype, and enlarged wrist-module view, with the CRAFT Hand mounted"
              className="hero-img"
              fetchPriority="high"
            />
            <figcaption>
              <span>Fig. 01</span>
              <span>CAD model / assembled prototype</span>
            </figcaption>
          </figure>
        </section>

        <section className="overview section-shell" id="overview">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <p className="section-kicker">Project overview</p>
              <h2>CRAFT-W at a glance</h2>
            </div>
          </div>
          <figure className="overview-player">
            <VideoPlayer
              src="/media/craft-w-teaser.mp4"
              poster="/media/craft-w-teaser-poster.jpg"
              label="CRAFT-W system and routing overview video"
              autoplay
            />
            <figcaption>
              <span>CRAFT-W / system + routing overview</span>
              <span>11-second teaser</span>
            </figcaption>
          </figure>
        </section>

        <section className="demonstrations section-shell" id="demonstrations">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <p className="section-kicker">Demonstrated on the assembled platform</p>
              <h2>Physical task demonstrations</h2>
            </div>
          </div>

          <div className="demo-videos">
            {taskVideos.map((task) => (
              <figure className="demo-video-card" key={task.id}>
                <div className="demo-video-media">
                  <VideoPlayer
                    src={task.src}
                    poster={task.poster}
                    label={`${task.label} demonstration video`}
                  />
                </div>
                <figcaption>
                  <span className="demo-video-label">
                    {task.index} / {task.label}
                  </span>
                  <p>{task.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="demo-workspace">
            <h3 className="demo-subheading">Demonstrated workspace</h3>
            <div className="demo-metric-grid">
              {demoMetrics.map((metric) => (
                <div className="demo-metric" key={metric.index}>
                  <span className="demo-metric-index">{metric.index}</span>
                  <p className="demo-metric-label">{metric.label}</p>
                  <p className="demo-metric-value">{metric.value}</p>
                  <p className="demo-metric-range">{metric.range}</p>
                  <p className="demo-metric-desc">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="planned-note">
            <span className="status-tag planned">Planned evaluation</span>
            <p>
              A controlled comparison of joint excursion, end-effector path
              complexity, and task performance with and without the wrist is planned
              future work.
            </p>
          </div>
        </section>

        <section className="abstract section-shell" id="abstract">
          <div className="section-heading">
            <span className="section-number">03</span>
            <div>
              <p className="section-kicker">Paper</p>
              <h2>Abstract</h2>
            </div>
          </div>
          <div className="abstract-layout">
            <p className="abstract-lead">
              Local hand orientation for confined-space manipulation—without
              redesigning the CRAFT Hand.
            </p>
            <p>
              Dexterous manipulation in confined spaces requires local control of
              hand orientation, but adding a wrist to a tendon-driven hand
              introduces a mechanical interaction that is rarely measured: wrist
              motion changes the effective length of the finger tendons routed
              across it. We present CRAFT-W, a concentric two-DoF wrist extension
              that mounts between a robot arm and the CRAFT Hand without modifying
              the hand. Two XC430-T240BB-T servos drive bending and axial rotation
              through short rigid transmissions, while a controlled wrist-locked
              versus actively controlled comparison isolates the value and cost of
              the added DoF. A first assembled prototype moves both axes under load
              over a demonstrated workspace of ±20° in left–right bending and −18°
              to +80° in front–back axial rotation. We formulate an experiment
              program that measures wrist–finger tendon coupling and evaluates
              task-level benefit in confined-space access, grasp retention and
              reorientation, and routing stress tests.
            </p>
          </div>
        </section>

        <section className="system-section" id="system">
          <div className="section-shell system-shell">
            <div className="section-heading">
              <span className="section-number">04</span>
              <div>
                <p className="section-kicker">Hardware architecture</p>
                <h2>Two axes. One wrist center.</h2>
              </div>
            </div>
            <div className="system-layout">
              <p className="system-intro">
                CRAFT-W installs between the arm and CRAFT Hand while leaving the
                hand&apos;s mechanics, electronics, and finger-control stack
                unchanged.
              </p>
              <ol className="feature-list">
                <li>
                  <span>01</span>
                  <div>
                    <strong>Concentric two-DoF structure</strong>
                    <p>
                      Bending and axial rotation share a compact wrist center
                      instead of stacking a long serial chain.
                    </p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <strong>Direct, rigid transmissions</strong>
                    <p>
                      Two XC430-T240BB-T servos create short, deterministic load
                      paths with position control and current limiting.
                    </p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <strong>Drop-in CRAFT Hand extension</strong>
                    <p>
                      An independent frame carries the distal hand and keeps
                      wear-prone components detachable and serviceable.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="coupling-section" id="coupling">
          <div className="coupling-copy">
            <div className="section-heading">
              <span className="section-number">05</span>
              <div>
                <p className="section-kicker">The mechanical question</p>
                <h2>What happens to finger tendons when the wrist moves?</h2>
              </div>
            </div>
            <p>
              Tendons must cross the wrist to reach the fingers. As their guide
              points rotate, the effective tendon length becomes posture-dependent.
              CRAFT-W makes that wrist–finger coupling visible and measurable
              instead of treating it as a routing detail.
            </p>
            <div className="equation" aria-label="Effective tendon length equation">
              ℓ<sub>i</sub>(q) = ℓ<sub>i,0</sub> + f<sub>i</sub>(q)
            </div>
            <div className="coupling-note">
              <span className="status-tag">Demonstrated</span>
              <p>
                In a preliminary characterization, the finger reached its commanded
                position at every tested wrist posture (15–60°); motor-current
                traces varied with posture and sweep direction.
              </p>
            </div>
          </div>
          <figure className="coupling-figure">
            <PictureImage
              src="/media/wrist-tendon-routing.png"
              webp="/media/wrist-tendon-routing.webp"
              width={1800}
              height={1311}
              alt="Neutral and rotated CRAFT-W poses showing how wrist motion changes the finger tendon routing paths"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Fig. 02</span>
              <span>Neutral → rotated wrist / changing tendon paths</span>
            </figcaption>
          </figure>
        </section>

        <section className="resources-section" id="resources">
          <div className="section-shell">
            <div className="section-heading">
              <span className="section-number">06</span>
              <div>
                <p className="section-kicker">Project resources</p>
                <h2>Open hardware release in preparation</h2>
              </div>
            </div>
            <p className="resource-note">
              Public resources are being prepared. Items marked{' '}
              <strong>Coming soon</strong> are not yet released and will activate
              here when they become available.
            </p>
            <ul className="resource-buttons">
              {resources.map((resource) => {
                const available = resource.status === 'available' && resource.href;
                return available ? (
                  <li key={resource.id}>
                    <a
                      className="resource-button"
                      href={resource.href}
                      target={resource.external ? '_blank' : undefined}
                      rel={resource.external ? 'noreferrer' : undefined}
                    >
                      {resource.label}
                      <span className="resource-button-arrow" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ) : (
                  <li key={resource.id}>
                    <span
                      className="resource-button resource-button-pending"
                      aria-disabled="true"
                    >
                      {resource.label}
                      <span className="resource-button-note">Coming soon</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="citation-section" id="cite">
          <div className="section-shell citation-shell">
            <div className="section-heading">
              <span className="section-number">07</span>
              <div>
                <p className="section-kicker">Reference</p>
                <h2>Provisional BibTeX</h2>
              </div>
            </div>
            <div className="citation-layout">
              <p>
                The paper is currently a manuscript in preparation. This
                provisional citation will be replaced with the arXiv entry when the
                public record is released.
              </p>
              <div className="citation-block">
                <BibTeXCopy bibtex={bibtex} />
                <pre>
                  <code>{bibtex}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <a className="brand footer-brand" href="#top" aria-label="CRAFT-W home">
            <span className="brand-mark" aria-hidden="true">CW</span>
            <span>CRAFT-W</span>
          </a>
          <p>
            Department of Electrical Engineering and Computer Science<br />
            University of California, Irvine
          </p>
          <a href="mailto:ssakib@uci.edu">ssakib@uci.edu ↗</a>
        </footer>
      </main>
    </>
  );
}
