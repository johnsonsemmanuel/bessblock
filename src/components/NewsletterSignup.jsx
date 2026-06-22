import { useState } from 'react';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';

export default function NewsletterSignup({ variant = 'default', className = '' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed to subscribe');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className={`nl-success ${variant === 'footer' ? 'nl-success-footer' : ''} ${className}`} style={{
        display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--color-bessblock-blue)',
      }}>
        <CheckCircle size={18} />
        <span>Thanks for subscribing!</span>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={className}>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 8, lineHeight: 1.4 }}>
          Get the latest product updates and project inspiration.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 6 }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            aria-label="Email for newsletter"
            style={{
              flex: 1, padding: '4px 8px', borderRadius: 5, border: '1px solid var(--border)',
              fontSize: 11, fontFamily: 'inherit', outline: 'none',
              background: 'var(--bg-card)', color: 'var(--text)',
            }}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            style={{
              padding: '4px 10px', borderRadius: 5, border: 'none',
              background: 'var(--color-bessblock-blue)', color: '#fff',
              fontSize: 11, fontWeight: 600, cursor: 'pointer',
              transition: 'background var(--transition-fast)',
            }}
          >
            {status === 'submitting' ? <Loader2 size={12} style={{ animation: 'spin 1s linear infinite' }} /> : 'Subscribe'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`nl-card ${className}`} style={{
      padding: 'var(--spacing-8)', borderRadius: 16,
      background: 'var(--bg-section)', border: '1px solid var(--border)',
      textAlign: 'center',
    }}>
      <div style={{ marginBottom: 12 }}>
        <Mail size={24} style={{ color: 'var(--color-bessblock-blue)' }} />
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6, color: 'var(--text)' }}>
        Stay updated
      </h3>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.6 }}>
        Get product updates, project inspiration, and industry insights delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, maxWidth: 400, margin: '0 auto' }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          aria-label="Email for newsletter"
          style={{
            flex: 1, padding: '10px 14px', borderRadius: 8, border: '1px solid var(--border)',
            fontSize: 14, fontFamily: 'inherit', outline: 'none',
            background: 'var(--bg)', color: 'var(--text)',
          }}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          style={{
            padding: '10px 20px', borderRadius: 8, border: 'none',
            background: 'var(--color-bessblock-blue)', color: '#fff',
            fontSize: 14, fontWeight: 600, cursor: 'pointer',
            transition: 'background var(--transition-fast)',
          }}
        >
          {status === 'submitting' ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}
