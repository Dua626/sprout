'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './services.module.css';
import { IconHealthcare, IconHospitality, IconEducation } from '../components/Icons';

const tabs = [
  {
    id: 'healthcare',
    Icon: IconHealthcare,
    label: 'Healthcare',
    title: 'Healthcare Uniforms',
    tagline: 'Clinical precision. Professional comfort.',
    description: 'We supply healthcare institutions with uniforms that meet the dual demands of hygiene and professional appearance. Every piece is crafted for comfort during long shifts and durability through frequent laundering.',
    products: [
      {
        name: 'Lab Coats',
        desc: 'Full and half-length, standard white or custom colour, with embroidery options.',
        images: [
          '/images/products/lab-coat-1.png',
          '/images/products/lab-coat-2.png',
        ],
      },
      {
        name: 'Patient Gowns',
        desc: 'Soft, dignified, easy-access gowns designed for patient comfort and clinical practicality.',
        images: [
          '/images/products/patient-gown-1.png',
          '/images/products/patient-gown-2.png',
          '/images/products/patient-gown-3.png',
        ],
      },
      {
        name: 'Hospital Bed Linen',
        desc: 'Durable, hygienic bed linen for wards, OPDs, and clinical settings — supplied in bulk.',
        images: [
          '/images/products/hospital-linen-1.png',
          '/images/products/hospital-linen-2.png',
        ],
      },
    ],
  },
  {
    id: 'hospitality',
    Icon: IconHospitality,
    label: 'Hospitality',
    title: 'Hospitality Uniforms',
    tagline: 'First impressions, dressed with intent.',
    description: 'In hospitality, uniforms are part of the brand experience. We design and produce staff uniforms that reflect your establishment\'s identity — from lobby to housekeeping.',
    products: [
      {
        name: 'Hotel Staff Uniforms',
        desc: 'Front desk, concierge, and F&B uniforms tailored to your brand palette and standards.',
        images: [
          '/images/products/hotel-staff-1.png',
          '/images/products/hotel-staff-2.png',
        ],
      },
      {
        name: 'Housekeeping Uniforms',
        desc: 'Practical, presentable uniforms built for movement and durability across daily operations.',
        images: [
          '/images/products/housekeeping-1.png',
          '/images/products/housekeeping-2.png',
        ],
      },
      {
        name: 'Bed Linen & Covers',
        desc: 'Premium hotel-grade bed linen and duvet covers, supplied in consistent bulk quantities.',
        images: [
          '/images/products/hotel-linen-1.png',
          '/images/products/hotel-linen-2.png',
        ],
      },
    ],
  },
  {
    id: 'education',
    Icon: IconEducation,
    label: 'Education',
    title: 'Education Uniforms',
    tagline: 'Identity, pride, and belonging — stitched in.',
    description: 'School uniforms create a sense of community and equality. We work directly with institutions to design uniforms that reflect their colours, values, and budget.',
    products: [
      {
        name: 'School Uniforms',
        desc: 'Full sets including shirts, trousers, skirts, and accessories — custom to your specifications.',
        images: [
          '/images/products/school-uniform-1.png',
          '/images/products/school-uniform-2.png',
          '/images/products/school-uniform-3.png',
        ],
      },
      {
        name: 'Custom Colours & Piping',
        desc: 'Precise colour matching and piping details that distinguish your institution\'s identity.',
        images: [
          '/images/products/custom-piping-1.png',
          '/images/products/custom-piping-2.png',
        ],
      },
      {
        name: 'Bulk Orders',
        desc: 'Scalable supply for entire student bodies, with consistent sizing and on-time delivery.',
        images: [
          '/images/products/bulk-order-1.png',
          '/images/products/bulk-order-2.png',
          '/images/products/bulk-order-3.png',
        ],
      },
    ],
  },
];

// ── Slideshow component ──
function ProductSlideshow({ images, productName }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  const goTo = (idx) => {
    if (idx === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 400);
  };

  const startTimer = () => {
    if (images.length <= 1) return;
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setFading(true);
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % images.length);
          setFading(false);
        }, 400);
      }
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  // Reset slideshow when product changes
  useEffect(() => {
    setCurrent(0);
    setFading(false);
  }, [images]);

  return (
    <div
      className={styles.slideshow}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div className={`${styles.slideImg} ${fading ? styles.slideFading : ''}`}>
        <Image
          src={images[current]}
          alt={`${productName} — view ${current + 1}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('healthcare');
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && tabs.find((t) => t.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const current = tabs.find((t) => t.id === activeTab);

  const switchTab = (id) => {
    if (id === activeTab || animating) return;
    setAnimating(true);
    window.history.replaceState(null, '', `#${id}`);
    setTimeout(() => {
      setActiveTab(id);
      setAnimating(false);
    }, 220);
  };

  return (
    <div className="page-enter">

      {/* ── PAGE HERO ── */}
      <div
        className={styles.pageHero}
        style={{ backgroundImage: 'url(/images/bg/services-hero.png)' }}
      >
        <div className={styles.heroOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ justifyContent: 'center', marginBottom: '20px', color: 'var(--gold-muted)' }}>
            What We Offer
          </p>
          <h1>Uniform Solutions<br /><em>Built for Your Sector</em></h1>
          <p>From clinical wards to hotel lobbies to school hallways — every uniform is crafted with purpose.</p>
        </div>
      </div>

      {/* ── TAB SECTION ── */}
      <section className={styles.tabSection}>
        <div className="container">

          <div className={styles.tabBar}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabPill} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => switchTab(tab.id)}
              >
                <span className={styles.tabIcon}><tab.Icon /></span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className={`${styles.tabContent} ${animating ? styles.fadeOut : styles.fadeIn}`}>
            <div className={styles.tabHeader}>
              <div>
                <span className={styles.tabIconLarge}><current.Icon /></span>
                <h2>{current.title}</h2>
                <p className={styles.tabTagline}><em>{current.tagline}</em></p>
              </div>
              <Link href="/contact" className={styles.quoteBtn}>Request a Quote →</Link>
            </div>

            <p className={styles.tabDesc}>{current.description}</p>

            <div className={styles.productGrid}>
              {current.products.map((p) => (
                <div key={p.name} className={styles.productCard}>
                  <ProductSlideshow images={p.images} productName={p.name} />
                  <div className={styles.productBody}>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <Link
                      href={`/contact?product=${encodeURIComponent(p.name)}`}
                      className={styles.productQuoteBtn}
                    >
                      Get a Quote →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Not sure where to start?</h2>
          <p>Book a free consultation and we&rsquo;ll walk you through options, pricing, and timelines.</p>
          <Link href="/contact" className={styles.ctaBtn}>Get a Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
