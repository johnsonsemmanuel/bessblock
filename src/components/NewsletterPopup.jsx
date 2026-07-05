import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle, Loader2 } from 'lucide-react';
import './NewsletterPopup.css';

const STORAGE_KEY = 'bessblock-newsletter';

function getDismissed() {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    return val === 'dismissed' || val === 'subscribed';
  } catch {
    return false;
  }
}

function setDismissed(state) {
  try {
    localStorage.setItem(STORAGE_KEY, state);
  } catch {}
}

export default function NewsletterPopup({ delay = 10000 }) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (getDismissed()) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setShow(false);
    setDismissed('dismissed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          email,
          subject: 'Newsletter Subscription',
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setDismissed('subscribed');
      setTimeout(() => setShow(false), 2500);
    } catch {
      setStatus('idle');
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            className="nlp-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className="nlp-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button className="nlp-close" onClick={handleClose} aria-label="Close newsletter popup">
              <X size={18} />
            </button>

            <div className="nlp-icon">
              <Mail size={28} />
            </div>

            {status === 'success' ? (
              <div className="nlp-success">
                <CheckCircle size={40} />
                <h3>You're subscribed!</h3>
                <p>Thanks for joining — we'll send product updates and inspiration.</p>
              </div>
            ) : (
              <>
                <h3 className="nlp-title">Stay in the loop</h3>
                <p className="nlp-desc">
                  Get product updates, project inspiration, and industry insights.
                </p>
                <form className="nlp-form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    aria-label="Email for newsletter"
                  />
                  <button type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? <Loader2 size={16} className="nlp-spinner" /> : 'Subscribe'}
                  </button>
                </form>
                <button className="nlp-skip" onClick={handleClose}>
                  No thanks, I'll browse
                </button>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
