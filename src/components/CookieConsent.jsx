import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import './CookieConsent.css';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('bessblock-cookies');
    if (!accepted) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('bessblock-cookies', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('bessblock-cookies', 'declined');
    setVisible(false);
  };

  const showAgain = () => {
    localStorage.removeItem('bessblock-cookies');
    setVisible(true);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="cookie-consent"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <div className="cookie-consent-content">
              <Cookie size={20} className="cookie-consent-icon" />
              <p className="cookie-consent-text">
                We use cookies to improve your experience. By continuing, you agree to our{' '}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </div>
            <div className="cookie-consent-actions">
              <button className="cookie-btn cookie-btn-accept" onClick={accept}>Accept</button>
              <button className="cookie-btn cookie-btn-decline" onClick={decline}>Decline</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!visible && (
        <motion.button
          className="cookie-reopen"
          onClick={showAgain}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          aria-label="Cookie settings"
        >
          <Cookie size={18} />
        </motion.button>
      )}
    </>
  );
}
