import Header from '@/app/components/Header';
import BibTeXCopy from '@/app/components/BibTeXCopy';
import PictureImage from '@/app/components/PictureImage';
import DemoExplorer from '@/app/components/DemoExplorer';
import { ResourceExplorer } from '@/app/components/DemoExplorer';
import { bibtex, resources, specs, taskVideos } from '@/app/content';

const axisCards = [
  { label: 'Bending', value: '±20°', note: 'left–right' },
  { label: 'Axial rotation', value: '−18° → +80°', note: 'front–back' },
  { label: 'Interface', value: 'Drop-in', note: 'CRAFT Hand compatible' },
];

const designFeatures = [
  { index: '01', title: 'Concentric wrist center', body: 'Bending and axial rotation share a compact wrist center instead of stacking a long serial chain.' },
  { index: '02', title: 'Direct, rigid transmissions', body: 'Two XC430-T240BB-T servos create short, deterministic load paths with position control and current limiting.' },
  { index: '03', title: 'Unmodified hand interface', body: "An independent frame carries the distal hand while leaving the CRAFT Hand's mechanics and finger-control stack unchanged." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Robotics hardware / 2026</p>
            <h1>CRAFT<span className="accent">-W</span></h1>
            <p className="hero-title">A direct-drive two-DoF wrist extension for the CRAFT Hand.</p>
            <p className="hero-lede">Local hand orientation for confined-space manipulation—without redesigning the hand.</p>
            <div className="hero-byline">
              <p>Yujie Pang<sup>1,2</sup> · Sadman Sakib<sup>1</sup> · Mohammad Abdullah Al Faruque<sup>1</sup></p>
              <p><sup>1</sup>University of California, Irvine &nbsp;·&nbsp; <sup>2</sup>UCInspire</p>
            </div>
            <div className="hero-actions" aria-label="Primary project links">
              <a className="button button-primary" href="#demonstrations">Watch demonstrations <span aria-hidden="true">↓</span></a>
              <a className="button button-quiet" href="#design">Explore the mechanism <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <figure className="hero-figure">
            <div className="hero-image-frame">
              <PictureImage src="/media/fig1_pyj3.png" width={3480} height={1971} alt="CRAFT-W system overview showing the CAD model, physical prototype, and wrist module" className="hero-img" fetchPriority="high" />
              <span className="image-stamp">Fig. 01 / system</span>
            </div>
            <figcaption>System overview / CAD + prototype + wrist module</figcaption>
          </figure>
          <div className="hero-metrics" aria-label="CRAFT-W at a glance">
            {axisCards.map((card) => <div className="metric" key={card.label}><span className="metric-label">{card.label}</span><strong>{card.value}</strong><span className="metric-note">{card.note}</span></div>)}
          </div>
        </section>

        <section className="section-shell problem-section" id="overview">
          <div className="section-intro"><p className="section-kicker">01 / The proposition</p><h2>Give the hand a local wrist—then measure what changes.</h2></div>
          <div className="problem-grid">
            <div className="problem-statement"><p className="label">The limitation</p><p className="large-copy">A robot arm can move the hand into place, but confined tasks often need a smaller, local orientation correction at the tool.</p></div>
            <div className="problem-answer"><p className="label">The CRAFT-W approach</p><p>CRAFT-W mounts between the arm and the tendon-driven CRAFT Hand. Its two direct-drive axes add local orientation control while keeping the hand itself unchanged.</p><a className="text-link" href="#coupling">See the coupling question <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className="demo-section" id="demonstrations">
          <div className="section-shell">
            <div className="section-heading on-dark"><div><p className="section-kicker">02 / Physical evidence</p><h2>One wrist. Three task roles.</h2></div><p className="heading-note">Switch tasks to see where local orientation enters the manipulation loop.</p></div>
            <DemoExplorer tasks={taskVideos} />
            <div className="demo-footnote"><span className="status-tag planned">Planned comparison</span><p>Wrist-locked versus actively controlled trials (W0 / W1 / W2) will isolate the value and cost of the added DoF.</p></div>
          </div>
        </section>

        <section className="section-shell design-section" id="design">
          <div className="section-heading"><div><p className="section-kicker">03 / Mechanical design</p><h2>Two axes. One wrist center.</h2></div><p className="heading-note">A compact extension designed around the existing hand, tendon route, and service needs.</p></div>
          <div className="design-layout">
            <figure className="design-figure"><PictureImage src="/media/craft-w-installed.jpg" webp="/media/craft-w-installed.webp" width={1080} height={1920} alt="CRAFT-W installed between a robot arm and the CRAFT Hand, showing the bending and axial-rotation axes and the tendon entry region" loading="lazy" decoding="async" /><figcaption><span>Fig. 02 / installed interface</span><span>arm → CRAFT-W → hand</span></figcaption></figure>
            <div className="design-content"><p className="design-intro">The wrist carries the distal hand as an independent module, so the existing hand mechanics, electronics, and finger-control stack remain intact.</p><div className="feature-list">{designFeatures.map((feature) => <article className="feature-card" key={feature.index}><span className="feature-index">{feature.index}</span><div><h3>{feature.title}</h3><p>{feature.body}</p></div></article>)}</div></div>
          </div>
          <div className="spec-strip" aria-label="CRAFT-W specifications">{specs.map((spec) => <div className="spec-item" key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div>
        </section>

        <section className="coupling-section" id="coupling">
          <div className="section-shell">
            <div className="section-heading"><div><p className="section-kicker">04 / The open question</p><h2>Wrist motion changes the tendon path.</h2></div><p className="heading-note">The same mechanism that gives local orientation can change the effective length of finger tendons routed across the wrist.</p></div>
            <div className="coupling-grid"><div className="coupling-copy"><p className="label">Why it matters</p><p className="large-copy">CRAFT-W makes wrist–finger coupling visible instead of treating it as a routing detail.</p><p>Tendon guide-points rotate relative to the wrist center. As posture changes, slack and tension can vary. The current result is a measurable hypothesis—not yet a task-level claim.</p><div className="equation" aria-label="Effective tendon length equation">ℓ<sub>i</sub>(q) = ℓ<sub>i,0</sub> + f<sub>i</sub>(q)</div></div><figure className="coupling-route"><PictureImage src="/media/wrist-tendon-routing.png" webp="/media/wrist-tendon-routing.webp" width={1800} height={1311} alt="Neutral and rotated CRAFT-W poses showing how wrist motion changes the finger tendon routing paths" loading="lazy" decoding="async" /><figcaption><span>Neutral → rotated wrist</span><span>Changing tendon paths</span></figcaption></figure></div>
            <div className="evidence-panel"><div className="evidence-copy"><p className="label">Evidence so far</p><h3>466 samples from a first assembled wrist</h3><p>Both axes move under load over the observed servo-readback range. Task-level controllability remains to be quantified in stages E2–E3.</p><div className="evidence-range"><span>Axial</span><strong>+19.2° to +80.0°</strong><span>Bending</span><strong>−17.7° to +19.8°</strong></div></div><figure className="coupling-plot"><PictureImage src="/media/craft-w-servo-readback.png" webp="/media/craft-w-servo-readback.webp" width={1200} height={861} alt="Servo-readback trace of the two wrist axes over 466 samples" loading="lazy" decoding="async" /><figcaption>Servo readback / ~30 seconds</figcaption></figure></div>
            <div className="next-measurement"><span>Next measurement</span><p>Motor-current and finger-travel sweeps across wrist postures (15° / 30° / 45° / 60°), outward and return.</p></div>
          </div>
        </section>

        <section className="resources-section" id="resources"><div className="section-shell"><div className="section-heading"><div><p className="section-kicker">05 / Build from the work</p><h2>Open hardware, in stages.</h2></div><p className="heading-note">Select a resource to see what is available now and what is being prepared.</p></div><ResourceExplorer resources={resources} /></div></section>

        <section className="citation-section" id="cite"><div className="section-shell citation-shell"><div><p className="section-kicker">06 / Reference</p><h2>Cite the work in progress.</h2><p className="citation-note">The manuscript is in preparation. This provisional citation will be replaced with the public record when released.</p></div><div className="citation-block"><BibTeXCopy bibtex={bibtex} /><pre><code>{bibtex}</code></pre></div></div></section>

        <footer><a className="brand footer-brand" href="#top" aria-label="CRAFT-W home"><span className="brand-mark" aria-hidden="true">CW</span><span>CRAFT-W</span></a><p>Department of Electrical Engineering and Computer Science<br />University of California, Irvine</p><a href="mailto:ssakib@uci.edu">ssakib@uci.edu ↗</a></footer>
      </main>
    </>
  );
}
