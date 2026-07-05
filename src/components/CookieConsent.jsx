import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { getConsent, acceptConsent, declineConsent, clearConsent } from '../lib/consent';
import './CookieConsent.css';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = getConsent();
    if (!existing) {
      const legacy = localStorage.getItem('bessblock-cookies');
      if (legacy === 'accepted' || legacy === 'declined') {
        if (legacy === 'accepted') acceptConsent();
        else declineConsent();
        localStorage.removeItem('bessblock-cookies');
        return;
      }
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    acceptConsent();
    setVisible(false);
  };

  const decline = () => {
    declineConsent();
    setVisible(false);
  };

  const showAgain = () => {
    clearConsent();
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
