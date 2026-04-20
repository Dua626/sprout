'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './projects.module.css';

const projects = [
  {
    id: 1,
    client: 'SOS Hermann Gmeiner School',
    location: 'Lahore, Pakistan',
    title: 'School Uniform Programme',
    description: 'Custom piping, bulk production for the full student body — delivered ahead of the academic term.',
    category: 'Education',
    tags: ['School Uniforms', 'Bulk Order', 'Custom Colours'],
    image: '/images/projects/sos-school.webp',
  },
  {
    id: 2,
    client: 'Trade Tacts International',
    location: 'Lahore, Pakistan',
    title: 'Industrial Workwear Supply',
    description: 'Durable charcoal grey workwear for a demanding operational environment — consistent across the full order.',
    category: 'Industrial',
    tags: ['Workwear', 'Industrial', 'Bulk Order'],
    image: '/images/projects/trade-tacts.webp',
  },
  {
    id: 3,
    client: 'Iqra Schools',
    location: 'Lahore, Pakistan',
    title: 'Student Uniform Collection',
    description: 'Warm skin-tone base with brown piping — a refined identity across multiple campuses.',
    category: 'Education',
    tags: ['School Uniforms', 'Custom Piping', 'Multi-Campus'],
    image: '/images/projects/iqra-schools.webp',
  },
];

const filters = ['All', 'Education', 'Industrial'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="page-enter">

      {/* ── PAGE HERO ── */}
      <div
        className={styles.pageHero}
        style={{ backgroundImage: 'url(/images/bg/projects-hero.webp)' }}
      >
        <div className={styles.heroOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ justifyContent: 'center', marginBottom: '20px', color: 'var(--gold-muted)' }}>Our Work</p>
          <h1>Projects &amp; <em>Clients</em></h1>
          <p>Real uniform programmes, delivered for real institutions across Pakistan.</p>
        </div>
      </div>

      {/* ── FILTER + GRID ── */}
      <section className={styles.projectsSection}>
        <div className="container">

          {/* Filter bar */}
          <div className={styles.filterBar}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${active === f ? styles.activeFilter : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.projectGrid}>
            {filtered.map((project) => (
              <div key={project.id} className={styles.projectCard}>

                {/* Image area */}
                <div className={styles.imageArea}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <span className={styles.categoryTag}>{project.category}</span>
                </div>

                {/* Card body */}
                <div className={styles.cardBody}>
                  <p className={styles.clientName}>{project.client}</p>
                  <p className={styles.clientLocation}>{project.location}</p>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Your project could be <em>next</em></h2>
          <p>Whether you&rsquo;re outfitting a school, clinic, or hotel — we&rsquo;re ready.</p>
          <Link href="/contact" className={styles.ctaBtn}>Start a Conversation</Link>
        </div>
      </section>
    </div>
  );
}
