'use client';
import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', topic: '', message: ''
  });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-enter">
      {/* PAGE HERO */}
      <div className={styles.pageHero}>
        <div className="container">
          <p className="section-label" style={{justifyContent:'center', marginBottom:'16px'}}>
            We'd love to hear from you
          </p>
          <h1>Say <em>hello</em></h1>
          <p>Whether you have a question about sizing, shipping, or just want to share how Sprout has grown with you — we're here.</p>
        </div>
      </div>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* INFO */}
            <div className={styles.infoCol}>
              <p className="section-label">Reach Out</p>
              <h2>Let's <em>connect</em></h2>
              <p>Our small team replies within one business day. We love hearing from the Sprout community.</p>

              <div className={styles.contactCards}>
                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>✉️</div>
                  <div className={styles.cardInfo}>
                    <strong>Email Us</strong>
                    <span>hello@sproutclothing.com</span>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>📦</div>
                  <div className={styles.cardInfo}>
                    <strong>Orders & Returns</strong>
                    <span>orders@sproutclothing.com</span>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>📍</div>
                  <div className={styles.cardInfo}>
                    <strong>Our Studio</strong>
                    <span>12 Meadow Lane, Bristol, UK</span>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>⏱️</div>
                  <div className={styles.cardInfo}>
                    <strong>Response Time</strong>
                    <span>Within 1 business day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className={styles.formCol}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.check}>🌿</div>
                  <h3>Thank you!</h3>
                  <p>Your message has been sent. We'll be in touch soon.</p>
                </div>
              ) : (
                <>
                  <h3>Send us a message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Clara"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Webb"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="topic">Topic</label>
                      <select
                        id="topic"
                        name="topic"
                        value={form.topic}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a topic...</option>
                        <option value="order">Order or Shipping</option>
                        <option value="return">Returns & Exchanges</option>
                        <option value="sizing">Sizing Help</option>
                        <option value="wholesale">Wholesale Enquiry</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us what's on your mind..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
