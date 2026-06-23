import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Download } from 'lucide-react';
import Modal from './Modal';
import AnimatedButton from './AnimatedButton';
import './DownloadSpecsModal.css';

const FREE_DOMAINS = new Set([
  'gmail.com', 'yahoo.com', 'yahoo.co.uk', 'yahoo.fr', 'yahoo.de', 'yahoo.in',
  'outlook.com', 'hotmail.com', 'live.com', 'msn.com',
  'aol.com', 'aim.com',
  'icloud.com', 'me.com',
  'protonmail.com', 'proton.me', 'protonmail.ch',
  'mail.com', 'email.com',
  'yandex.com', 'yandex.ru',
  'zoho.com', 'zohomail.com',
  'gmx.com', 'gmx.net', 'gmx.de',
  'fastmail.com', 'fastmail.fm',
  'tutanota.com', 'tutanota.de',
  'rediffmail.com', 'rediffmailpro.com',
  'mail.ru', 'bk.ru', 'inbox.ru', 'list.ru',
  'naver.com', 'daum.net', 'hanmail.net',
  'qq.com', '163.com', '126.com', 'sina.com',
  'web.de', 'online.de',
  'libero.it', 'virgilio.it',
  'orange.fr', 'wanadoo.fr', 'sfr.fr',
  't-online.de', 'freenet.de',
  'btinternet.com', 'bt.com',
  'ntlworld.com', 'virginmedia.com', 'blueyonder.co.uk',
  'sky.com', 'talktalk.net',
  'optusnet.com.au', 'bigpond.com', 'bigpond.net.au',
  'icloud.com', 'mac.com',
]);

const initialForm = { name: '', email: '', phone: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  } else {
    const domain = form.email.split('@')[1].toLowerCase();
    if (FREE_DOMAINS.has(domain)) {
      errors.email = 'Please use your company email address (not a personal email like Gmail, Yahoo, etc.).';
    }
  }
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[\d\s\-\+\(\)]{7,20}$/.test(form.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  return errors;
}

export default function DownloadSpecsModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const updated = { ...form, [name]: value };
      const errs = validate(updated);
      setErrors(prev => ({ ...prev, [name]: errs[name] || undefined }));
    }
  }, [form, touched]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const errs = validate(form);
    setErrors(prev => ({ ...prev, [name]: errs[name] || undefined }));
  }, [form]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(errs).length > 0) return;

    setStatus('submitting');
    try {
      const resp = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          subject: 'Download Specifications',
        }),
      });
      if (!resp.ok) throw new Error('Submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, [form]);

  const handleClose = useCallback(() => {
    setForm(initialForm);
    setErrors({});
    setTouched({});
    setStatus('idle');
    onClose();
  }, [onClose]);

  return (
    <Modal open={open} onClose={handleClose} title="Download Specifications">
      {status === 'success' ? (
        <motion.div
          className="ds-modal-success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="ds-modal-success-icon">
            <CheckCircle2 size={40} />
          </div>
          <h3>Request Submitted!</h3>
          <p>Thank you, {form.name.split(' ')[0]}. We will send the specifications to <strong>{form.email}</strong> shortly. A member of our team may reach out to discuss your project needs.</p>
          <AnimatedButton onClick={handleClose} variant="primary">Done</AnimatedButton>
        </motion.div>
      ) : (
        <form className="ds-modal-form" onSubmit={handleSubmit} noValidate>
          <p className="ds-modal-intro">
            Enter your details and we will send our product specifications to your company email. This information is for serious buyers looking to make a purchase.
          </p>

          {status === 'error' && (
            <div className="ds-modal-error-banner">
              <AlertCircle size={16} />
              <span>Something went wrong. Please try again or email us directly at <a href="mailto:info@bessblock.com">info@bessblock.com</a>.</span>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="ds-name">Full Name <span className="form-required">*</span></label>
            <input
              id="ds-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? 'input-error' : ''}
              placeholder="Your full name"
              aria-required="true"
              aria-invalid={!!errors.name && touched.name}
              aria-describedby={errors.name && touched.name ? 'ds-name-error' : undefined}
            />
            {errors.name && touched.name && <p id="ds-name-error" className="form-error" role="alert">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="ds-email">Company Email <span className="form-required">*</span></label>
            <input
              id="ds-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'input-error' : ''}
              placeholder="you@company.com"
              aria-required="true"
              aria-invalid={!!errors.email && touched.email}
              aria-describedby={errors.email && touched.email ? 'ds-email-error' : undefined}
            />
            {errors.email && touched.email && <p id="ds-email-error" className="form-error" role="alert">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="ds-phone">Phone Number <span className="form-required">*</span></label>
            <input
              id="ds-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.phone && touched.phone ? 'input-error' : ''}
              placeholder="+233 000 000 000"
              aria-required="true"
              aria-invalid={!!errors.phone && touched.phone}
              aria-describedby={errors.phone && touched.phone ? 'ds-phone-error' : undefined}
            />
            {errors.phone && touched.phone && <p id="ds-phone-error" className="form-error" role="alert">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="ds-message">Message <span className="form-optional">(optional)</span></label>
            <textarea
              id="ds-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your project or any specific product ranges you are interested in..."
            />
          </div>

          <div className="ds-modal-actions">
            <AnimatedButton type="submit" variant="primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Specifications'}
            </AnimatedButton>
            <button type="button" className="ds-modal-cancel" onClick={handleClose}>Cancel</button>
          </div>
        </form>
      )}
    </Modal>
  );
}
