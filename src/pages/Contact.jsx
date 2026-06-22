import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Building2, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './Contact.css';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Bessblock Concrete Products Ltd\nIndustrial Area, Accra',
    href: 'https://maps.google.com/maps?q=Bessblock+Concrete+Products+Ltd+Accra',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+233 302 555 019',
    href: 'tel:+233302555019',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@bessblock.com',
    href: 'mailto:info@bessblock.com',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon - Fri: 7:00 AM - 5:00 PM\nSat: 8:00 AM - 1:00 PM',
  },
];

const subjects = [
  { value: 'product', label: 'Product Inquiry' },
  { value: 'quote', label: 'Request a Quote' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'delivery', label: 'Delivery Inquiry' },
  { value: 'other', label: 'Other' },
];

const initialForm = { name: '', email: '', company: '', subject: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required';
  if (!form.email.trim()) errors.email = 'Email address is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address';
  if (!form.subject) errors.subject = 'Please select a subject';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
    if (touched[id]) {
      const newErrors = validate({ ...form, [id]: value });
      setErrors(prev => ({ ...prev, [id]: newErrors[id] }));
    }
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    const newErrors = validate(form);
    setErrors(prev => ({ ...prev, [id]: newErrors[id] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(newErrors).length > 0) return;

    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          name: form.name,
          email: form.email,
          company: form.company,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      setForm(initialForm);
      setTouched({});
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with Bessblock Concrete Products Ltd for product inquiries, technical support, quotations, and project consultations." />
      <div className="page">
        <PageHero
          title="Contact"
          description="Get in touch with our team for product inquiries, technical support, or to discuss your project requirements."
          bgImage="/images/hero/concrete-texture-2.jpg"
        />

        <section className="section">
          <div className="container">
            <motion.div
              className="contact-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="contact-heading-label">Get in Touch</span>
              <h2 className="contact-heading-title">We&rsquo;d love to hear from you</h2>
              <p className="contact-heading-desc">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            <div className="contact-grid">
              <motion.div
                className="contact-form-wrap"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="contact-form-card">
                  {status === 'success' ? (
                    <motion.div
                      className="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="contact-success-icon">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="contact-success-title">Message Sent!</h3>
                      <p className="contact-success-desc">
                        Thank you for reaching out. Our team will respond within 24 hours.
                      </p>
                      <AnimatedButton
                        variant="primary"
                        onClick={() => setStatus('idle')}
                      >
                        Send Another Message
                      </AnimatedButton>
                    </motion.div>
                  ) : (
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name">
                            Full Name <span className="form-required" aria-hidden="true">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            aria-required="true"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            className={errors.name ? 'input-error' : ''}
                          />
                          {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">
                            Email Address <span className="form-required" aria-hidden="true">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            aria-required="true"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            className={errors.email ? 'input-error' : ''}
                          />
                          {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Company / Organisation</label>
                        <input
                          type="text"
                          id="company"
                          placeholder="Company name"
                          value={form.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">
                          Subject <span className="form-required" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="subject"
                          value={form.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? 'subject-error' : undefined}
                          className={errors.subject ? 'input-error' : ''}
                        >
                          <option value="">Select a subject</option>
                          {subjects.map(s => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                          ))}
                        </select>
                        {errors.subject && <span id="subject-error" className="form-error" role="alert">{errors.subject}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">
                          Message <span className="form-required" aria-hidden="true">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Tell us about your project requirements..."
                          value={form.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          className={errors.message ? 'input-error' : ''}
                        />
                        {errors.message && <span id="message-error" className="form-error" role="alert">{errors.message}</span>}
                      </div>
                      <AnimatedButton
                        variant="primary"
                        type="submit"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <>Sending<span className="contact-sending-dots"><span>.</span><span>.</span><span>.</span></span></>
                        ) : (
                          <><Send size={16} /> Send Message</>
                        )}
                      </AnimatedButton>
                      {status === 'error' && (
                        <motion.div
                          className="contact-form-error-banner"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          role="alert"
                        >
                          <AlertCircle size={16} />
                          <span>Something went wrong. Please try again or email us directly at <a href="mailto:info@bessblock.com">info@bessblock.com</a>.</span>
                        </motion.div>
                      )}
                    </form>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="contact-sidebar"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="contact-info-card">
                  <div className="contact-info-header">
                    <Building2 size={20} className="contact-info-header-icon" />
                    <h3>Contact Information</h3>
                  </div>
                  <div className="contact-details">
                    {contactDetails.map((detail, index) => (
                      <div className="contact-detail" key={index}>
                        <span className="contact-detail-icon-wrap">
                          <detail.icon size={16} />
                        </span>
                        <div>
                          <span className="contact-detail-label">{detail.label}</span>
                          {detail.href ? (
                            <a href={detail.href} className="contact-detail-value contact-detail-link">
                              {detail.value}
                            </a>
                          ) : (
                            <span className="contact-detail-value">{detail.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="contact-map-card">
                  <div className="contact-map-header">
                    <MapPin size={16} className="contact-map-icon" />
                    <span>Visit Our Factory</span>
                  </div>
                  <div className="contact-map-container">
                    <iframe
                      title="Bessblock Location"
                      src="https://maps.google.com/maps?q=Bessblock+Concrete+Products+Ltd+Accra&output=embed"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a
                    href="https://maps.google.com/maps?q=Bessblock+Concrete+Products+Ltd+Accra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-directions"
                  >
                    Get Directions
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-light contact-bottom">
          <div className="container">
            <motion.div
              className="contact-bottom-inner"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="contact-bottom-title">Ready to start your project?</h2>
              <p className="contact-bottom-desc">
                Our technical team can help you select the right products, provide pricing, and arrange delivery for your project.
              </p>
              <div className="contact-bottom-actions">
                <AnimatedButton to="/products" variant="primary" size="lg">Browse Products</AnimatedButton>
                <AnimatedButton to="/about/manufacturing" variant="outline" size="lg">Our Manufacturing</AnimatedButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
