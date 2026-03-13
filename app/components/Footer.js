import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoWrap}>
            <Image
              src="/images/logosprout.jpeg"
              alt="Sprout logo"
              width={32}
              height={32}
              className={styles.logoImg}
            />
            <span className={styles.logo}>Sprout</span>
          </Link>
          <p>Clothing that grows with you. Soft, intentional pieces for everyday living.</p>
        </div>

        <div>
          <p className={styles.colTitle}>Navigate</p>
          <ul className={styles.colLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/products">Shop</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Shop</p>
          <ul className={styles.colLinks}>
            <li><Link href="/products">New Arrivals</Link></li>
            <li><Link href="/products">Tops</Link></li>
            <li><Link href="/products">Bottoms</Link></li>
            <li><Link href="/products">Outerwear</Link></li>
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Support</p>
          <ul className={styles.colLinks}>
            <li><Link href="/contact">FAQ</Link></li>
            <li><Link href="/contact">Shipping</Link></li>
            <li><Link href="/contact">Returns</Link></li>
            <li><Link href="/contact">Size Guide</Link></li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© {new Date().getFullYear()} Sprout. All rights reserved.</p>
        <div className={styles.social}>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Pinterest">Pinterest</a>
          <a href="#" aria-label="TikTok">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
