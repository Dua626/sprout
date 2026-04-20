import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import {
  IconHealthcare, IconHospitality, IconEducation,
  IconFabric, IconCustomize, IconBulk, IconDelivery,
} from './components/Icons';

const industries = [
  { Icon: IconHealthcare, title: 'Healthcare',   items: ['Lab Coats', 'Patient Gowns', 'Hospital Bed Linen'] },
  { Icon: IconHospitality, title: 'Hospitality', items: ['Hotel Staff Uniforms', 'Housekeeping Uniforms', 'Bed Linen & Covers'] },
  { Icon: IconEducation,  title: 'Education',    items: ['School Uniforms', 'Custom Colours & Piping', 'Bulk Orders'] },
];

const whySprout = [
  { Icon: IconFabric,    title: 'Quality Fabrics',      desc: 'Durable, comfortable fabrics suited to each sector.' },
  { Icon: IconCustomize, title: 'Full Customization',   desc: 'Your brand colours, logo, piping, and cut — every detail.' },
  { Icon: IconBulk,      title: 'Bulk Ready',           desc: 'Built for institutional scale without compromising quality.' },
  { Icon: IconDelivery,  title: 'On-Time Delivery',     desc: 'Deadlines are commitments, not suggestions.' },
];

const process = [
  { step: '01', title: 'Consultation',       desc: 'We understand your sector, quantities, and brand identity.' },
  { step: '02', title: 'Fabric & Design',    desc: 'We propose fabric options, colours, and design specs.' },
  { step: '03', title: 'Sampling',           desc: 'A physical sample is produced for your approval.' },
  { step: '04', title: 'Production',         desc: 'Full production with quality checks, on schedule.' },
];

const testimonials = [
  {
    quote: 'Sprout delivered our school uniform programme on time and exactly to specification. The quality exceeded what we\'d seen from previous suppliers.',
    author: 'SOS Hermann Gmeiner School',
    location: 'Lahore, Pakistan',
    initial: 'S',
  },
  {
    quote: 'A professional team that truly understands bulk workwear. Communication was clear throughout and the final product was outstanding.',
    author: 'Trade Tacts International',
    location: 'Lahore, Pakistan',
    initial: 'T',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={`${styles.heroLabel} section-label fade-up`}>
            B2B Uniform Solutions — Lahore, Pakistan
          </p>
          <h1 className={`${styles.heroTitle} fade-up fade-up-delay-1`}>
            Uniform &amp; Linen Solutions<br />
            <em>for Every Sector</em>
          </h1>
          <p className={`${styles.heroSub} fade-up fade-up-delay-2`}>
            We don&rsquo;t just stitch uniforms — we design confidence, identity, and functionality for your workforce.
          </p>
          <div className={`${styles.heroActions} fade-up fade-up-delay-3`}>
            <Link href="/contact" className={styles.btnGold}>Get a Free Quote</Link>
            <Link href="/projects" className={styles.btnOutline}>View Our Work</Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          <Image
            src="/images/hero.webp"
            alt="Sprout uniform solutions"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div className={styles.heroBadge}>
            <span>Serving since</span>
            <strong>2022</strong>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className={styles.statsStrip}>
        <div className={`container ${styles.statsInner}`}>
          {[
            { value: '3+',   label: 'Sectors Served' },
            { value: '500+', label: 'Uniforms Delivered' },
            { value: '100%', label: 'Custom Made' },
            { value: '3',    label: 'Clients & Growing' },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── INDUSTRIES ── */}
      <section className={styles.industriesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="section-label">What We Cover</p>
            <h2>Industries <em>We Serve</em></h2>
          </div>
          <div className={styles.industriesGrid}>
            {industries.map(({ Icon, title, items }) => (
              <div key={title} className={styles.industryCard}>
                <span className={styles.industryIcon}><Icon /></span>
                <h3>{title}</h3>
                <ul className={styles.industryItems}>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link href="/services" className={styles.industryLink}>View Services →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SPROUT ── */}
      <section
        className={styles.whySection}
        style={{ backgroundImage: 'url(/images/bg/home-why.webp)' }}
      >
        <div className={styles.whyOverlay} />
        <div className={`container ${styles.whyInner}`}>
          <div className={styles.sectionHead} style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <p className="section-label">Our Promise</p>
            <h2>Why Choose <em>Sprout</em></h2>
          </div>
          <div className={styles.whyGrid}>
            {whySprout.map(({ Icon, title, desc }) => (
              <div key={title} className={styles.whyCard}>
                <span className={styles.whyIcon}><Icon /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHead} style={{ flexDirection: 'column', gap: '12px' }}>
            <p className="section-label">How It Works</p>
            <h2>Our <em>Process</em></h2>
          </div>
          <div className={styles.processGrid}>
            {process.map((p, i) => (
              <div key={p.step} className={styles.processCard}>
                <span className={styles.processStep}>{p.step}</span>
                {i < process.length - 1 && <span className={styles.processArrow}>→</span>}
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.testimonialsHead}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Client Feedback</p>
            <h2 style={{ marginTop: '16px' }}>Trusted by <em>Real Clients</em></h2>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>&ldquo;</div>
                <blockquote>{t.quote}</blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{t.initial}</div>
                  <div>
                    <span className={styles.authorName}>{t.author}</span>
                    <span className={styles.authorLocation}>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className={styles.ctaSection}
        style={{ backgroundImage: 'url(/images/bg/home-cta.webp)' }}
      >
        <div className={styles.ctaOverlay} />
        <div className={`container ${styles.ctaInner}`}>
          <p className="section-label" style={{ justifyContent: 'center', color: 'var(--gold-muted)', marginBottom: '24px' }}>
            Ready to Work Together?
          </p>
          <h2>Let&rsquo;s outfit <em>your team</em></h2>
          <p>Whether you need 50 uniforms or 5,000 — Sprout is built for your scale.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.btnLight}>Get a Free Quote</Link>
            <Link href="/services" className={styles.btnGhost}>Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
