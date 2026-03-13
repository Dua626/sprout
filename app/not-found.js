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
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: '120px',
        fontStyle: 'italic',
        color: 'var(--blush-deep)',
        lineHeight: 1,
        marginBottom: '24px',
      }}>404</p>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '36px',
        fontWeight: 300,
        color: 'var(--charcoal)',
        marginBottom: '16px',
      }}>This page has wandered off</h1>
      <p style={{
        fontSize: '15px',
        color: 'var(--text-muted)',
        marginBottom: '40px',
        maxWidth: '360px',
        lineHeight: 1.8,
      }}>
        The page you're looking for doesn't exist. Let's take you somewhere beautiful instead.
      </p>
      <Link href="/" style={{
        display: 'inline-block',
        padding: '14px 32px',
        background: 'var(--sage-dark)',
        color: 'white',
        fontFamily: 'var(--font-body)',
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        borderRadius: '2px',
      }}>
        Back to Home
      </Link>
    </div>
  );
}
