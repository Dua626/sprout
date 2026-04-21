import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        {/* Col 1 — Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logoWrap}>
            <Image
              src="/images/logosprout.jpeg"
              alt="Sprout logo"
              width={34}
              height={34}
              className={styles.logoImg}
            />
            <span className={styles.logoText}>Sprout</span>
          </Link>
          <p className={styles.tagline}>
            Uniform &amp; Linen Solutions<br />for Every Sector
          </p>
          <p className={styles.powerLine}>
            &ldquo;We don&rsquo;t just stitch uniforms — we design confidence, identity, and functionality for your workforce.&rdquo;
          </p>
        </div>

        {/* Col 2 — Navigate */}
        <div>
          <p className={styles.colTitle}>Navigate</p>
          <ul className={styles.colLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <p className={styles.colTitle}>Services</p>
          <ul className={styles.colLinks}>
            <li><Link href="/services#healthcare">Healthcare Uniforms</Link></li>
            <li><Link href="/services#hospitality">Hospitality Uniforms</Link></li>
            <li><Link href="/services#education">Education Uniforms</Link></li>
            <li><Link href="/services#industrial">Industrial Uniforms</Link></li>
            <li><Link href="/contact">Request a Quote</Link></li>
          </ul>
        </div>

        {/* Col 4 — Legal + Contact */}
        <div>
          <p className={styles.colTitle}>Legal</p>
          <ul className={styles.colLinks}>
            <li><Link href="/policies/privacy">Privacy Policy</Link></li>
            <li><Link href="/policies/terms">Terms &amp; Conditions</Link></li>
            <li><Link href="/policies/cancellation">Order &amp; Cancellation</Link></li>
          </ul>
          <p className={styles.colTitle} style={{ marginTop: '28px' }}>Contact</p>
          <ul className={styles.colLinks}>
            <li><a href="tel:+923247183981">+92 324 718 3981</a></li>
            <li><a href="mailto:hello@sprout.pk">hello@sprout.pk</a></li>
            <li><span>Lahore, Pakistan</span></li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Sprout — Single Parents Rising Out Unique Talent. All rights reserved.
        </p>
        <p className={styles.madeIn}>Founded 2022 · Lahore, Pakistan</p>
      </div>
    </footer>
  );
}
