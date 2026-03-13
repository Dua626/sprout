import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'About — Sprout',
  description: 'The story behind Sprout clothing — rooted in nature, made to last.',
};

const values = [
  {
    icon: '🌿',
    title: 'Sustainably Sourced',
    description: 'Every fabric we use is selected for its environmental footprint and tactile honesty. Linen, organic cotton, and recycled blends only.',
  },
  {
    icon: '✂️',
    title: 'Slow Made',
    description: "We produce in small batches with partner studios who share our values. No overproduction, no waste — just what's needed.",
  },
  {
    icon: '♾️',
    title: 'Built to Last',
    description: 'Classic silhouettes that outlast trends. We design for longevity, so you buy less and keep longer.',
  },
];

const team = [
  { name: 'Clara Webb', role: 'Founder & Creative Director', initial: 'C', bg: '#F2D9D0' },
  { name: 'Naomi Park', role: 'Head of Design', initial: 'N', bg: '#C9D5C6' },
  { name: 'Oliver Mast', role: 'Sustainability Lead', initial: 'O', bg: '#E8C4B8' },
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* PAGE HERO */}
      <div className={styles.pageHero}>
        <div className="container">
          <p className="section-label" style={{justifyContent:'center', marginBottom:'20px'}}>Our Story</p>
          <h1>Grown from a <em>simple idea</em></h1>
          <p>Sprout began with a question: what if getting dressed felt effortless, every single day?</p>
        </div>
      </div>

      {/* STORY */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImg} style={{position:'relative'}}>
              <Image
                src="/images/about.png"
                alt="Sprout studio"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className={styles.storyText}>
              <p className="section-label">How it started</p>
              <h2>A wardrobe built<br />on <em>intention</em></h2>
              <p>
                Sprout was founded in 2021 by Clara Webb, a former textile designer tired of a fashion industry that moved too fast and cared too little. 
                She started small — a handful of linen tops, a few dresses — and sold them from a market stall in Bristol.
              </p>
              <p>
                People kept coming back. Not because of trends, but because the clothes simply felt right. They held their shape, their colour, their softness.
              </p>
              <p>
                Today, Sprout is a small team of five, designing from a studio overlooking a meadow. The aesthetic hasn't changed: soft, considered, and rooted in the natural world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.valuesSection}>
        <div className="container">
          <p className="section-label" style={{color:'var(--sage)'}}>What we stand for</p>
          <h2 style={{marginTop:'16px'}}>Our <em>commitments</em></h2>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={styles.teamSection}>
        <div className="container">
          <p className="section-label">The People</p>
          <h2 style={{marginTop:'16px'}}>Meet the <em>team</em></h2>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamAvatar} style={{background: member.bg}}>
                  {member.initial}
                </div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
