import Link from 'next/link';
import styles from '../policy.module.css';

export const metadata = {
  title: 'Terms & Conditions — Sprout',
  description: 'Terms and conditions governing orders and services with Sprout.',
};

export default function TermsPage() {
  return (
    <div className="page-enter">

      <div className={styles.pageHero}>
        <div className="container">
          <h1>Terms &amp; <em>Conditions</em></h1>
          <p>Last updated: January 2025</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>

          <div className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              These Terms and Conditions govern all business engagements between Sprout (Single Parents Rising Out Unique Talent), registered in Lahore, Pakistan, and any client, institution, or organisation that places an order or enters into an agreement with us.
            </p>
            <p>
              By submitting a quote request, placing an order, or signing a purchase agreement with Sprout, you agree to be bound by these terms.
            </p>
          </div>

          <div className={styles.section}>
            <h2>2. Quotations & Pricing</h2>
            <p>
              All quotations issued by Sprout are valid for 14 days from the date of issuance unless otherwise stated in writing. Prices are subject to change based on fabric availability, quantities, and market conditions. A confirmed quote must be formalised with a written purchase order and deposit before production begins.
            </p>
            <p>
              Sprout does not publish fixed retail prices. All pricing is bespoke and based on your specific requirements, quantities, and delivery timelines.
            </p>
          </div>

          <div className={styles.section}>
            <h2>3. Orders & Confirmation</h2>
            <p>An order is considered confirmed only when:</p>
            <ul>
              <li>A written purchase order or signed agreement has been received by Sprout</li>
              <li>The agreed deposit has been received and cleared</li>
              <li>Fabric, design, and sizing specifications have been approved</li>
            </ul>
            <p>
              Sprout reserves the right to decline any order at its discretion prior to confirmation.
            </p>
          </div>

          <div className={styles.section}>
            <h2>4. Sampling</h2>
            <p>
              For new clients or new product types, Sprout typically produces a physical sample before bulk production. Sample approval must be provided in writing. Production does not begin until the sample is approved by the client.
            </p>
            <p>
              Any changes to specifications after sample approval may result in revised pricing and timelines.
            </p>
          </div>

          <div className={styles.section}>
            <h2>5. Delivery & Timelines</h2>
            <p>
              Delivery timelines are agreed upon at the time of order confirmation. Sprout makes every reasonable effort to deliver on schedule. Delays caused by factors outside our control — including fabric supply disruptions, force majeure events, or client-side delays in approvals — will be communicated promptly and do not constitute a breach of contract.
            </p>
            <p>
              Delivery is to the client's address in Lahore unless otherwise agreed. Outstation delivery charges are applied separately.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Payment Terms</h2>
            <p>Standard payment terms are as follows:</p>
            <ul>
              <li>50% deposit is required to confirm the order and commence production</li>
              <li>Remaining 50% is due upon completion and before delivery</li>
              <li>Custom payment schedules may be agreed in writing for large institutional orders</li>
            </ul>
            <div className={styles.highlight}>
              <p>No goods will be dispatched until full payment has been received unless explicitly agreed in a signed agreement.</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>7. Quality & Disputes</h2>
            <p>
              Sprout is committed to delivering uniform products that meet the approved specification. In the event of a quality dispute, the client must notify Sprout in writing within 7 days of receiving the order, with photographic evidence of the defect.
            </p>
            <p>
              Sprout will assess the claim and, if verified, will offer a remedy — either replacement of defective items or a credit note at our discretion. Minor variations in colour tone due to fabric batch differences do not constitute a defect.
            </p>
          </div>

          <div className={styles.section}>
            <h2>8. Intellectual Property</h2>
            <p>
              All designs, patterns, and production methods developed by Sprout remain the intellectual property of Sprout. Client-provided logos, colours, and brand elements remain the property of the client. Sprout may use project photographs and descriptions for portfolio purposes unless the client requests otherwise in writing.
            </p>
          </div>

          <div className={styles.section}>
            <h2>9. Limitation of Liability</h2>
            <p>
              Sprout's liability in any dispute is limited to the value of the order in question. We are not liable for indirect losses, loss of business, or consequential damages arising from delays or product issues beyond our reasonable control.
            </p>
          </div>

          <div className={styles.section}>
            <h2>10. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of the Islamic Republic of Pakistan. Any disputes that cannot be resolved through direct negotiation will be subject to the jurisdiction of the courts of Lahore.
            </p>
          </div>

          <div className={styles.section}>
            <h2>11. Contact</h2>
            <p>For any questions regarding these terms:</p>
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
