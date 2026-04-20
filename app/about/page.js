import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import { IconFabric, IconPartnership, IconTimeline, IconPurpose, IconCustomize, IconBulk } from '../components/Icons';

export const metadata = {
  title: 'About — Sprout',
  description: 'The story behind Sprout — a B2B uniform solutions provider founded in Lahore, Pakistan by Ubaida Faiz.',
};

const acronym = [
  { letter: 'S', word: 'Single',  color: '#3D5A2A' },
  { letter: 'P', word: 'Parents', color: '#2C4220' },
  { letter: 'R', word: 'Rising',  color: '#556B3A' },
  { letter: 'O', word: 'Out',     color: '#3D5A2A' },
  { letter: 'U', word: 'Unique',  color: '#2C4220' },
  { letter: 'T', word: 'Talent',  color: '#556B3A' },
];

const values = [
  { Icon: IconFabric,      title: 'Craftsmanship',          desc: 'Every uniform is produced with attention to stitching, finishing, and fabric integrity.' },
  { Icon: IconPartnership, title: 'Client Partnership',      desc: 'We work alongside you — not just as a supplier, but as a long-term partner.' },
  { Icon: IconTimeline,    title: 'Reliable Timelines',      desc: 'We set deadlines we keep. Your operations depend on it.' },
  { Icon: IconPurpose,     title: 'Purposeful Business',     desc: 'Sprout exists to create opportunity for single parents through dignified work.' },
  { Icon: IconCustomize,   title: 'True Customization',      desc: 'No off-the-shelf templates. Every order is built around your brand.' },
  { Icon: IconBulk,        title: 'Bulk Without Compromise', desc: 'Quality remains consistent whether it\'s 50 or 5,000 pieces.' },
];

export default function AboutPage() {
  return (
    <div className="page-enter">

      {/* ── PAGE HERO ── */}
      <div
        className={styles.pageHero}
        style={{ backgroundImage: 'url(/images/bg/about-hero.webp)' }}
      >
        <div className={styles.heroOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ justifyContent: 'center', marginBottom: '20px', color: 'var(--gold-muted)' }}>
            Our Mission
          </p>
          <h1>More than uniforms —<br /><em>a mission in every stitch</em></h1>
          <p>Built in Lahore. Driven by purpose. Delivering professional uniform solutions across Pakistan.</p>
        </div>
      </div>

      {/* ── FOUNDER STORY ── */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImgWrap}>
              <Image
                src="/images/about.webp"
                alt="Ubaida Faiz — Founder of Sprout"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className={styles.storyContent}>
              <p className="section-label" style={{ marginBottom: '24px' }}>The Founder</p>
              <h2>Ubaida Faiz</h2>
              <p className={styles.founderRole}>Founder &amp; Director, Sprout</p>
              <p>
                Ubaida Faiz founded Sprout in 2022 with a clear vision: to build a uniform solutions business that combines professional quality with genuine social purpose. With a background in HR and operations, she understood firsthand what institutions need from a reliable uniform supplier — consistency, customisation, and accountability.
              </p>
              <p>
                Sprout was registered in Lahore, Pakistan, with a mission that goes beyond stitching. The name itself is an acronym — Single Parents Rising Out Unique Talent — reflecting a commitment to creating dignified work for single parents while delivering exceptional product to B2B clients.
              </p>
              <Link href="/contact" className={styles.founderCta}>
                Work with us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPROUT ACRONYM ── */}
      <section
        className={styles.acronymSection}
        style={{ backgroundImage: 'url(/images/bg/about-acronym.webp)' }}
      >
        <div className={styles.acronymOverlay} />
        <div className={`container ${styles.acronymInner}`}>
          <div className={styles.acronymHead}>
            <p className="section-label" style={{ justifyContent: 'center', color: 'var(--gold-muted)', marginBottom: '16px' }}>
              The Name Behind the Brand
            </p>
            <h2>What <em>SPROUT</em> Stands For</h2>
          </div>
          <div className={styles.acronymGrid}>
            {acronym.map(({ letter, word }) => (
              <div key={letter} className={styles.acronymCard}>
                <span className={styles.acronymLetter}>{letter}</span>
                <span className={styles.acronymWord}>{word}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES GRID ── */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesHead}>
            <p className="section-label" style={{ marginBottom: '12px' }}>What We Stand By</p>
            <h2>Our <em>Values</em></h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}><v.Icon /></span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to outfit <em>your team?</em></h2>
          <p>Let&rsquo;s talk about your uniform requirements. We respond within one business day.</p>
          <Link href="/contact" className={styles.ctaBtn}>Get a Free Quote</Link>
        </div>
      </section>
    </div>
  );
}
