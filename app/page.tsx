/* eslint-disable @next/next/no-img-element */
const resources: Array<{
  index: string;
  label: string;
  meta: string;
  href: string | null;
}> = [
  { index: '01', label: 'Paper', meta: 'arXiv · coming soon', href: null },
  {
    index: '02',
    label: 'Assembly',
    meta: 'Docs + video · coming soon',
    href: null,
  },
  {
    index: '03',
    label: 'Bill of materials',
    meta: 'BOM · coming soon',
    href: null,
  },
  {
    index: '04',
    label: 'Print files',
    meta: 'GitHub · coming soon',
    href: null,
  },
  {
    index: '05',
    label: 'Control API',
    meta: 'GitHub · coming soon',
    href: null,
  },
  {
    index: '06',
    label: 'Onshape',
    meta: 'Interactive CAD · coming soon',
    href: null,
  },
];

const bibtex = `@misc{pang2026craftw,
  title = {CRAFT-W: A Direct-drive
           Two-DoF Wrist Extension for
           the CRAFT Hand},
  author = {Pang, Yujie and
            Sakib, Sadman and Al Faruque,
            Mohammad Abdullah},
  year = {2026},
  howpublished = {Manuscript in preparation}
}`;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CRAFT-W home">
          <span className="brand-mark">CW</span>
          <span>CRAFT-W</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#abstract">Abstract</a>
          <a href="#system">System</a>
          <a href="#demonstrations">Demonstrations</a>
          <a href="#bibtex">BibTeX</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span>Open hardware research</span>
            <span>2026</span>
          </div>
          <h1>
            CRAFT<span className="accent">-W</span>
          </h1>
          <p className="hero-title">
            A direct-drive two-DoF wrist extension for the CRAFT Hand
          </p>
          <p className="authors">
            Yujie Pang<sup>1,2</sup> · Sadman Sakib<sup>1</sup> · Mohammad
            Abdullah Al Faruque<sup>1</sup>
          </p>
          <p className="affiliation">
            <sup>1</sup>University of California, Irvine &nbsp;·&nbsp;
            <sup>2</sup>UCInspire
          </p>
        </div>

        <div className="workspace-readout" aria-label="Demonstrated workspace">
          <div>
            <span className="readout-label">Bending</span>
            <strong>±20°</strong>
            <span>left — right</span>
          </div>
          <div>
            <span className="readout-label">Axial rotation</span>
            <strong>−18° / +80°</strong>
            <span>front — back</span>
          </div>
        </div>
      </section>

      <section className="resource-strip" aria-labelledby="resource-heading">
        <div className="section-kicker" id="resource-heading">
          Project resources
        </div>
        <div className="resource-grid">
          {resources.map((resource) => {
            const content = (
              <>
                <span className="resource-index">{resource.index}</span>
                <span>
                  <strong>{resource.label}</strong>
                  <small>{resource.meta}</small>
                </span>
                <span aria-hidden="true">↗</span>
              </>
            );

            return resource.href ? (
              <a
                className="resource-link"
                href={resource.href}
                key={resource.index}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            ) : (
              <div className="resource-link pending" key={resource.index}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="teaser section-shell" aria-labelledby="teaser-heading">
        <div className="section-heading">
          <span className="section-number">01</span>
          <div>
            <p className="section-kicker">Project overview</p>
            <h2 id="teaser-heading">CRAFT-W at a glance</h2>
          </div>
        </div>
        <div className="video-frame">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/craft-w-system.png"
          >
            <source src="/media/craft-w-teaser.mp4" type="video/mp4" />
          </video>
          <div className="video-caption">
            <span>CRAFT-W / system + routing overview</span>
            <span>11 sec loop</span>
          </div>
        </div>
      </section>

      <section className="abstract section-shell" id="abstract">
        <div className="section-heading">
          <span className="section-number">02</span>
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
            <span className="section-number">03</span>
            <div>
              <p className="section-kicker">Hardware architecture</p>
              <h2>Two axes. One wrist center.</h2>
            </div>
          </div>

          <div className="system-layout">
            <figure className="system-figure">
              <img
                src="/media/craft-w-system.png"
                alt="CAD model and physical prototype of CRAFT-W with the CRAFT Hand"
              />
              <figcaption>
                <span>Fig. 01</span>
                <span>CAD model / assembled prototype</span>
              </figcaption>
            </figure>

            <div className="system-copy">
              <p className="system-intro">
                CRAFT-W installs between the arm and CRAFT Hand while leaving
                the hand&apos;s mechanics, electronics, and finger-control stack
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
        </div>
      </section>

      <section className="coupling-section">
        <div className="coupling-copy">
          <p className="section-kicker">The mechanical question</p>
          <h2>What happens to finger tendons when the wrist moves?</h2>
          <p>
            Tendons must cross the wrist to reach the fingers. As their guide
            points rotate, the effective tendon length becomes posture-dependent.
            CRAFT-W makes that wrist–finger coupling visible and measurable
            instead of treating it as a routing detail.
          </p>
          <div className="equation" aria-label="Effective tendon length equation">
            ℓ<sub>i</sub>(q) = ℓ<sub>i,0</sub> + f<sub>i</sub>(q)
          </div>
        </div>
        <figure className="coupling-figure">
          <img
            src="/media/wrist-tendon-routing.png"
            alt="Neutral and rotated CRAFT-W poses showing changes in finger tendon routing"
          />
          <figcaption>Neutral → rotated wrist / changing tendon paths</figcaption>
        </figure>
      </section>

      <section className="demonstrations section-shell" id="demonstrations">
        <div className="section-heading">
          <span className="section-number">04</span>
          <div>
            <p className="section-kicker">Physical deployment</p>
            <h2>Demonstrated on the assembled platform</h2>
          </div>
        </div>

        <div className="demo-grid">
          <article className="demo-card demo-card-wide">
            <div className="demo-media prototype-media">
              <img
                src="/media/craft-w-system.png"
                alt="CRAFT-W physical prototype carrying the CRAFT Hand"
              />
            </div>
            <div className="demo-copy">
              <span>01 / Integrated platform</span>
              <h3>Full hand carried as the distal load</h3>
              <p>
                The assembled wrist moves both axes with the complete CRAFT Hand
                and its forearm-mounted finger actuation stack installed.
              </p>
            </div>
          </article>

          <article className="demo-card">
            <div className="demo-media bend-media">
              <img
                src="/media/wrist-tendon-routing.png"
                alt="CRAFT-W neutral and bent physical wrist poses"
              />
            </div>
            <div className="demo-copy">
              <span>02 / Bending</span>
              <h3>±20° left–right</h3>
              <p>
                A compact lateral axis adjusts local hand orientation near the
                task object.
              </p>
            </div>
          </article>

          <article className="demo-card">
            <div className="demo-media routing-media">
              <img
                src="/media/wrist-tendon-routing.png"
                alt="Close-up views of tendons deforming through CRAFT-W motion"
              />
            </div>
            <div className="demo-copy">
              <span>03 / Axial rotation</span>
              <h3>−18° to +80° front–back</h3>
              <p>
                The second axis reorients the hand while exposing the routing
                changes that affect finger tendons.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="citation-section" id="bibtex">
        <div className="section-shell citation-shell">
          <div className="section-heading">
            <span className="section-number">05</span>
            <div>
              <p className="section-kicker">Reference</p>
              <h2>BibTeX</h2>
            </div>
          </div>
          <div className="citation-layout">
            <p>
              The paper is currently a manuscript in preparation. Replace this
              entry with the arXiv citation when the public record is released.
            </p>
            <pre>
              <code>{bibtex}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="release-note">
        <span className="release-symbol" aria-hidden="true">↗</span>
        <div>
          <p className="section-kicker">Open release</p>
          <h2>Build resources are being prepared.</h2>
          <p>
            Assembly documentation, video, BOM, print files, control API, and
            Onshape links will activate in the resource panel when their public
            releases are available.
          </p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">CW</span>
          <span>CRAFT-W</span>
        </a>
        <p>
          Department of Electrical Engineering and Computer Science<br />
          University of California, Irvine
        </p>
        <a href="mailto:ssakib@uci.edu">ssakib@uci.edu ↗</a>
      </footer>
    </main>
  );
}
