import Link from 'next/link';
import styles from '../policy.module.css';

export const metadata = {
  title: 'Privacy Policy — Sprout',
  description: 'How Sprout collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <div className="page-enter">

      <div className={styles.pageHero}>
        <div className="container">
          <h1>Privacy <em>Policy</em></h1>
          <p>Last updated: January 2025</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>

          <div className={styles.section}>
            <h2>1. Who We Are</h2>
            <p>
              Sprout (Single Parents Rising Out Unique Talent) is a B2B uniform and linen solutions provider registered in Lahore, Pakistan, founded in 2022 by Ubaida Faiz. We supply uniforms and linen to institutions in the healthcare, hospitality, and education sectors.
            </p>
            <p>
              When you interact with our website or contact us for a quote, you may share personal information with us. This policy explains exactly what we collect, how we use it, and how we protect it.
            </p>
          </div>

          <div className={styles.section}>
            <h2>2. Information We Collect</h2>
            <p>We collect information you provide directly when you:</p>
            <ul>
              <li>Fill out the contact or quote request form on our website</li>
              <li>Send us a message via WhatsApp or email</li>
              <li>Enter into a business agreement with Sprout</li>
            </ul>
            <p>This may include your name, organisation name, phone number, WhatsApp number, email address, industry sector, and the details of your uniform requirements.</p>
            <p>We do not collect payment information through our website. Payments are handled separately through agreed channels.</p>
          </div>

          <div className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information you provide solely to:</p>
            <ul>
              <li>Respond to your enquiry or quote request</li>
              <li>Fulfil and manage your uniform order</li>
              <li>Communicate with you about your project or delivery</li>
              <li>Maintain records for business and legal compliance</li>
            </ul>
            <p>We do not use your information for marketing without your explicit consent, and we do not sell or rent your data to any third party.</p>
          </div>

          <div className={styles.section}>
            <h2>4. How We Share Your Information</h2>
            <p>
              Sprout does not share your personal information with third parties except where strictly necessary — for example, with a delivery or logistics partner for the purpose of fulfilling your order. Any such party is obligated to protect your information and may not use it for any other purpose.
            </p>
            <div className={styles.highlight}>
              <p>We will never sell your contact details or business information to any third party under any circumstance.</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>5. Data Retention</h2>
            <p>
              We retain your information for as long as is necessary to fulfil the purpose for which it was collected — typically the duration of our business relationship plus a reasonable period thereafter for record-keeping. You may request deletion of your data at any time by contacting us directly.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your data, subject to legal obligations</li>
              <li>Withdraw consent for any non-essential use of your data</li>
            </ul>
            <p>To exercise any of these rights, contact us at <strong>hello@sprout.pk</strong> or via WhatsApp at +92 321 718 3981.</p>
          </div>

          <div className={styles.section}>
            <h2>7. Website & Cookies</h2>
            <p>
              Our website does not use tracking cookies or third-party analytics at this time. If this changes, this policy will be updated accordingly and you will be notified via a cookie consent mechanism.
            </p>
          </div>

          <div className={styles.section}>
            <h2>8. Security</h2>
            <p>
              We take reasonable precautions to protect the information you share with us from loss, misuse, or unauthorised access. All business communications are handled through secured channels.
            </p>
          </div>

          <div className={styles.section}>
            <h2>9. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy or how your data is handled, please reach out:
            </p>
            <ul>
              <li>Email: hello@sprout.pk</li>
              <li>Phone / WhatsApp: +92 321 718 3981</li>
              <li>Location: Lahore, Pakistan</li>
            </ul>
          </div>

          <Link href="/" className={styles.backLink}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
