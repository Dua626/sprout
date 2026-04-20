import Link from 'next/link';
import styles from '../policy.module.css';

export const metadata = {
  title: 'Order & Cancellation Policy — Sprout',
  description: 'Sprout\'s cancellation, deposit, and return policy for bulk and custom uniform orders.',
};

export default function CancellationPage() {
  return (
    <div className="page-enter">

      <div className={styles.pageHero}>
        <div className="container">
          <h1>Order &amp; Cancellation <em>Policy</em></h1>
          <p>Last updated: January 2025</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>

          <div className={styles.section}>
            <h2>1. Overview</h2>
            <p>
              All orders placed with Sprout are custom-manufactured to your institution's specific requirements — including fabric, colour, sizing, piping, and embroidery. Because every order is produced exclusively for you, our cancellation and return policy is strict and non-negotiable.
            </p>
            <p>
              Please read this policy carefully before confirming any order.
            </p>
          </div>

          <div className={styles.section}>
            <h2>2. No Returns on Custom & Bulk Orders</h2>
            <div className={styles.highlight}>
              <p>Sprout does not accept returns on any custom-made or bulk uniform orders. Once production has commenced, the order cannot be returned or exchanged under any circumstance except in the case of a verified manufacturing defect.</p>
            </div>
            <p>
              This policy exists because custom uniforms are produced specifically for your institution and cannot be resold, restocked, or repurposed. By placing an order with Sprout, you acknowledge and accept this condition in full.
            </p>
          </div>

          <div className={styles.section}>
            <h2>3. Cancellation Window</h2>
            <p>Cancellations are only accepted under the following strict conditions:</p>
            <ul>
              <li>The cancellation request is submitted in writing within <strong>48 hours</strong> of order confirmation</li>
              <li>Fabric procurement has not yet begun</li>
              <li>Production has not been initiated</li>
            </ul>
            <p>
              Once fabric has been ordered or production has begun — whichever comes first — the order cannot be cancelled and the deposit is non-refundable.
            </p>
            <div className={styles.highlight}>
              <p>Cancellation requests submitted after 48 hours of order confirmation will not be accepted, regardless of reason.</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>4. Deposit Policy</h2>
            <p>A non-refundable deposit is required to confirm all orders. Standard deposit terms are:</p>
            <ul>
              <li>50% of the total order value is due at time of order confirmation</li>
              <li>This deposit covers fabric procurement, design work, and production scheduling</li>
              <li>The deposit is non-refundable once fabric has been ordered or production has begun</li>
              <li>In the event of a valid cancellation within the 48-hour window, the deposit will be refunded in full within 7–10 business days</li>
            </ul>
            <p>
              For large institutional orders, a custom deposit schedule may be agreed in writing. However, any amounts paid toward fabric procurement remain non-refundable once materials have been purchased.
            </p>
          </div>

          <div className={styles.section}>
            <h2>5. Specification Changes After Confirmation</h2>
            <p>
              Any changes to order specifications — including fabric type, colour, sizing, quantities, or design elements — after order confirmation may result in:
            </p>
            <ul>
              <li>Revised pricing to reflect additional material or labour costs</li>
              <li>Extended delivery timelines</li>
              <li>A revised deposit requirement</li>
            </ul>
            <p>
              Specification changes must be requested in writing and are subject to Sprout's approval based on production stage. Changes cannot be accommodated once fabric has been cut or production is in progress.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Defective Items</h2>
            <p>
              Sprout stands behind the quality of its products. If you receive items with a verified manufacturing defect — meaning a fault in stitching, material, or construction that is not consistent with the approved sample — you must:
            </p>
            <ul>
              <li>Notify Sprout in writing within 7 days of receiving the order</li>
              <li>Provide clear photographic evidence of the defect</li>
              <li>Return the defective items in their original, unwashed condition</li>
            </ul>
            <p>
              Upon verification, Sprout will replace the defective items at no charge or issue a credit note at our discretion. Defects resulting from improper care, washing, or use after delivery are not covered.
            </p>
          </div>

          <div className={styles.section}>
            <h2>7. Force Majeure</h2>
            <p>
              In the event that Sprout is unable to fulfil an order due to circumstances beyond our control — including but not limited to fabric supply disruptions, natural disasters, or government-imposed restrictions — we will notify you promptly. In such cases, you may choose to wait for fulfilment or receive a full refund of any amounts paid.
            </p>
          </div>

          <div className={styles.section}>
            <h2>8. How to Submit a Cancellation or Complaint</h2>
            <p>All cancellation requests and quality complaints must be submitted in writing to:</p>
            <ul>
              <li>Email: hello@sprout.pk</li>
              <li>WhatsApp: +92 321 718 3981</li>
            </ul>
            <p>
              Verbal requests are not accepted and will not be acted upon. A written reference number will be issued upon receipt of your written request.
            </p>
          </div>

          <Link href="/" className={styles.backLink}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
