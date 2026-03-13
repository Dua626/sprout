import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const featuredProducts = [
  { id: 1, name: 'Linen Ease Top', category: 'Tops', price: '$68', tag: 'New', img: '/images/products/1.png' },
  { id: 2, name: 'Meadow Wrap Skirt', category: 'Bottoms', price: '$84', tag: 'Bestseller', img: '/images/products/2.png' },
  { id: 3, name: 'Cloud Knit Cardigan', category: 'Outerwear', price: '$112', tag: 'New', img: '/images/products/3.jpg' },
];

const testimonials = [
  {
    quote: "Sprout changed how I think about getting dressed. Every piece is effortless and feels like a second skin.",
    author: "Mia L.",
    title: "Customer since 2023",
    initial: "M",
  },
  {
    quote: "The quality is stunning for the price. I wore the Cloud Cardigan on a flight and got three compliments.",
    author: "Sophie R.",
    title: "Verified Buyer",
    initial: "S",
  },
  {
    quote: "Finally a brand that understands soft color and thoughtful tailoring. I'm obsessed.",
    author: "Anika T.",
    title: "Loyal Customer",
    initial: "A",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={`${styles.heroLabel} section-label fade-up`}>
            New Collection — Spring 2025
          </p>
          <h1 className={`${styles.heroTitle} fade-up fade-up-delay-1`}>
            Dressed in<br /><em>quiet beauty</em>
          </h1>
          <p className={`${styles.heroSub} fade-up fade-up-delay-2`}>
            Sprout creates soft, minimal clothing rooted in natural textures and honest design. 
            Pieces you reach for again and again.
          </p>
          <div className={`${styles.heroActions} fade-up fade-up-delay-3`}>
            <Link href="/products" className={styles.btnPrimary}>
              Explore Collection
            </Link>
            <Link href="/about" className={styles.btnGhost}>
              Our Story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          <Image
            src="/images/hero.png"
            alt="Sprout Spring Collection"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div className={styles.heroBadge}>
            <span>New arrivals</span>
            <strong>Spring '25</strong>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{display:'flex', alignItems:'center', gap:'0'}}>
              <span>Free Shipping Over $120</span>
              <span className={styles.dot}>&nbsp;·&nbsp;</span>
              <span>Ethically Sourced Fabrics</span>
              <span className={styles.dot}>&nbsp;·&nbsp;</span>
              <span>Slow Fashion, Always</span>
              <span className={styles.dot}>&nbsp;·&nbsp;</span>
              <span>New Arrivals Every Season</span>
              <span className={styles.dot}>&nbsp;·&nbsp;</span>
              <span>Carbon-Neutral Shipping</span>
              <span className={styles.dot}>&nbsp;·&nbsp;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className={styles.aboutSection} style={{padding:'120px 0'}}>
        <div className="container" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center'}}>
          <div className={styles.aboutImgWrap}>
            <div className={styles.aboutImgInner}>
              <Image
                src="/images/about.png"
                alt="Sprout — our story"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className={styles.aboutAccent}></div>
          </div>

          <div className={styles.aboutContent}>
            <p className="section-label" style={{marginBottom:'24px'}}>Our Philosophy</p>
            <h2>Rooted in <em>nature</em>,<br />made to last</h2>
            <p>We believe clothing should be honest — honest in its materials, its making, and its intention. Every Sprout piece is designed with slowness in mind.</p>
            <p>No fast trends. No synthetic shortcuts. Just beautiful, breathable fabrics cut to move with you through seasons, years, and every version of yourself.</p>
            <Link href="/about" className={styles.aboutLink}>
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className={styles.productsSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className="section-label">The Collection</p>
              <h2>Current <em>favourites</em></h2>
            </div>
            <Link href="/products" className={styles.viewAll}>View all →</Link>
          </div>

          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <Link href="/products" key={product.id} className={styles.productCard}>
                <div className={styles.cardImgWrap}>
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  {product.tag && (
                    <span className={styles.cardTag}>{product.tag}</span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{product.name}</h3>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>{product.category}</span>
                    <span className={styles.cardPrice}>{product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.testimonialsHead}>
            <p className="section-label" style={{justifyContent:'center'}}>Testimonials</p>
            <h2 style={{marginTop:'16px'}}>Loved by <em>real people</em></h2>
          </div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>
                <blockquote>"{t.quote}"</blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{t.initial}</div>
                  <div>
                    <span className={styles.authorName}>{t.author}</span>
                    <span className={styles.authorTitle}>{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <p className="section-label" style={{justifyContent:'center', color:'var(--sage)', marginBottom:'24px'}}>
            Get in Touch
          </p>
          <h2>Ready to <em>grow</em><br />your wardrobe?</h2>
          <p>Explore our current collection or reach out with questions. We're a small team that truly cares.</p>
          <div className={styles.ctaActions}>
            <Link href="/products" className={styles.btnLight}>Shop the Collection</Link>
            <Link href="/contact" className={styles.btnOutline}>Say Hello</Link>
          </div>
        </div>
      </section>
    </>
  );
}
