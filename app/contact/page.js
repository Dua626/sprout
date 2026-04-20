'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './contact.module.css';

const industries = ['Healthcare', 'Hospitality', 'Education', 'Industrial', 'Other'];

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.14 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  );
}

function IconLocation() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

// Inner form component that uses useSearchParams
function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', organisation: '', phone: '', industry: '', message: '',
  });

  useEffect(() => {
    const product = searchParams.get('product');
    if (product) {
      setForm((prev) => ({
        ...prev,
        message: `I'm interested in: ${product}\n\nPlease share more details about your requirements...`,
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successState}>
        <span className={styles.successIcon}>✓</span>
        <h2>Message Received</h2>
        <p>Thank you for reaching out. We&rsquo;ll be in touch within one business day to discuss your requirements.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className="section-label" style={{ marginBottom: '32px' }}>Send a Message</p>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Full Name *</label>
          <input id="name" name="name" type="text" required className={styles.input} placeholder="Your name" value={form.name} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="organisation">Organisation *</label>
          <input id="organisation" name="organisation" type="text" required className={styles.input} placeholder="School / Hospital / Hotel" value={form.organisation} onChange={handleChange} />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">Phone / WhatsApp *</label>
          <input id="phone" name="phone" type="tel" required className={styles.input} placeholder="+92 300 000 0000" value={form.phone} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="industry">Industry *</label>
          <select id="industry" name="industry" required className={styles.input} value={form.industry} onChange={handleChange}>
            <option value="" disabled>Select your sector</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">Message *</label>
        <textarea id="message" name="message" required className={`${styles.input} ${styles.textarea}`} placeholder="Tell us about your uniform requirements — quantities, sector, timeline..." value={form.message} onChange={handleChange} rows={5} />
      </div>

      <button type="submit" className={styles.submitBtn}>
        Send Message →
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="page-enter">

      {/* ── PAGE HERO ── */}
      <div
        className={styles.pageHero}
        style={{ backgroundImage: 'url(/images/bg/contact-hero.webp)' }}
      >
        <div className={styles.heroOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ justifyContent: 'center', marginBottom: '20px', color: 'var(--gold-muted)' }}>
            Get in Touch
          </p>
          <h1>Let&rsquo;s Talk About<br /><em>Your Requirements</em></h1>
          <p>We work with schools, hospitals, and hotels across Pakistan. Tell us what you need — we&rsquo;ll handle the rest.</p>
        </div>
      </div>

      {/* ── CONTACT SECTION ── */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>

            {/* Info column */}
            <div className={styles.infoCol}>
              <p className="section-label" style={{ marginBottom: '28px' }}>Contact Details</p>

              <div className={styles.infoItem}>
                <span className={styles.infoIconWrap}><IconPhone /></span>
                <div>
                  <span className={styles.infoLabel}>Phone</span>
                  <a href="tel:+923247183981" className={styles.infoValue}>+92 324 718 3981</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIconWrap}><IconMail /></span>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <a href="mailto:hello@sprout.pk" className={styles.infoValue}>hello@sprout.pk</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIconWrap}><IconLocation /></span>
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Lahore, Pakistan</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIconWrap}><IconClock /></span>
                <div>
                  <span className={styles.infoLabel}>Response Time</span>
                  <span className={styles.infoValue}>Within 1 business day</span>
                </div>
              </div>

              <a
                href="https://wa.me/923247183981"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waLink}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.waIcon}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form — wrapped in Suspense for useSearchParams */}
            <div className={styles.formCol}>
              <Suspense fallback={<div style={{ padding: '40px', color: 'var(--text-muted)' }}>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
