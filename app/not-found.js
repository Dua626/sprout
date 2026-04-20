import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 24px',
      background: 'var(--cream)',
    }}>

      {/* Large 404 */}
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(80px, 16vw, 160px)',
        fontStyle: 'italic',
        fontWeight: 400,
        color: 'var(--cream-deep)',
        lineHeight: 1,
        marginBottom: '8px',
        userSelect: 'none',
      }}>
        404
      </p>

      {/* Gold divider line */}
      <div style={{
        width: '48px',
        height: '2px',
        background: 'var(--gold)',
        margin: '0 auto 28px',
      }} />

      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(24px, 4vw, 36px)',
        fontWeight: 400,
        color: 'var(--olive-deep)',
        marginBottom: '16px',
      }}>
        This page doesn&rsquo;t exist
      </h1>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        color: 'var(--text-muted)',
        marginBottom: '40px',
        maxWidth: '380px',
        lineHeight: 1.85,
      }}>
        The page you&rsquo;re looking for may have moved or never existed. Let&rsquo;s get you back on track.
      </p>

      {/* Buttons */}
      <div style={{
        display: 'flex',
        gap: '14px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <Link href="/" style={{
          display: 'inline-block',
          padding: '13px 32px',
          background: 'var(--gold)',
          color: 'var(--olive-deep)',
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
        }}>
          Back to Home
        </Link>

        <Link href="/contact" style={{
          display: 'inline-block',
          padding: '12px 28px',
          border: '1.5px solid var(--olive)',
          color: 'var(--olive)',
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
        }}>
          Get a Quote
        </Link>
      </div>

    </div>
  );
}
