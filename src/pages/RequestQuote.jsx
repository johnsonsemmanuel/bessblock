import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Building2, FileText, Ruler, Truck, Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedButton from '../components/AnimatedButton';
import SEO from '../components/SEO';
import { productPages } from '../data/products';
import './RequestQuote.css';

const productOptions = Object.entries(productPages).map(([key, p]) => ({
  value: key,
  label: p.name,
}));

productOptions.sort((a, b) => a.label.localeCompare(b.label));

const initialForm = {
  name: '', email: '', phone: '', company: '',
  product: '', quantity: '', projectDetails: '',
  delivery: '', timeline: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required';
  if (!form.email.trim()) errors.email = 'Email address is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address';
  if (!form.product) errors.product = 'Please select a product';
  if (!form.quantity.trim()) errors.quantity = 'Estimated quantity is required';
  if (!form.projectDetails.trim()) errors.projectDetails = 'Project details are required';
  else if (form.projectDetails.trim().length < 10) errors.projectDetails = 'Please provide at least 10 characters';
  return errors;
}

export default function RequestQuote() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
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
    setTouched({ name: true, email: true, product: true, quantity: true, projectDetails: true });

    if (Object.keys(newErrors).length > 0) return;

    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          product: form.product,
          quantity: form.quantity,
          project_details: form.projectDetails,
          delivery: form.delivery,
          timeline: form.timeline,
          subject: 'Quote Request',
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
      <SEO title="Request a Quote" description="Request a quote from Bessblock Concrete Products Ltd. Tell us about your project and we'll provide pricing for the products you need." />
      <div className="page">
        <PageHero
          title="Request a Quote"
          description="Tell us about your project requirements and our team will provide a detailed quotation within 24 hours."
          bgImage="/images/hero/concrete-texture-1.jpg"
        />

        <section className="section">
          <div className="container">
            <motion.div
              className="rq-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="rq-heading-label">Get a Quote</span>
              <h2 className="rq-heading-title">Tell us what you need</h2>
              <p className="rq-heading-desc">
                Complete the form below with details about your project and the products you are interested in.
              </p>
            </motion.div>

            <div className="rq-grid">
              <motion.div
                className="rq-form-wrap"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="rq-form-card">
                  {status === 'success' ? (
                    <motion.div
                      className="rq-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="rq-success-icon">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="rq-success-title">Quote Request Submitted!</h3>
                      <p className="rq-success-desc">
                        Thank you for your enquiry. Our team will review your requirements and respond with a detailed quotation within 24 hours.
                      </p>
                      <AnimatedButton
                        variant="primary"
                        onClick={() => setStatus('idle')}
                      >
                        Submit Another Request
                      </AnimatedButton>
                    </motion.div>
                  ) : (
                    <form className="rq-form" onSubmit={handleSubmit} noValidate>
                      <div className="rq-form-section">
                        <h3 className="rq-form-section-title">
                          <Building2 size={16} />
                          Contact Information
                        </h3>
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
                              aria-describedby={errors.name ? 'rq-name-error' : undefined}
                              className={errors.name ? 'input-error' : ''}
                            />
                            {errors.name && <span id="rq-name-error" className="form-error" role="alert">{errors.name}</span>}
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
                              aria-describedby={errors.email ? 'rq-email-error' : undefined}
                              className={errors.email ? 'input-error' : ''}
                            />
                            {errors.email && <span id="rq-email-error" className="form-error" role="alert">{errors.email}</span>}
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              placeholder="+233 555 000 000"
                              value={form.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="company">Company / Organisation</label>
                            <input
                              type="text"
                              id="company"
                              placeholder="Company name"
                              value={form.company}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="rq-form-section">
                        <h3 className="rq-form-section-title">
                          <FileText size={16} />
                          Product Requirements
                        </h3>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="product">
                              Product of Interest <span className="form-required" aria-hidden="true">*</span>
                            </label>
                            <select
                              id="product"
                              value={form.product}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                              aria-required="true"
                              aria-invalid={!!errors.product}
                              aria-describedby={errors.product ? 'rq-product-error' : undefined}
                              className={errors.product ? 'input-error' : ''}
                            >
                              <option value="">Select a product</option>
                              {productOptions.map(p => (
                                <option key={p.value} value={p.value}>{p.label}</option>
                              ))}
                            </select>
                            {errors.product && <span id="rq-product-error" className="form-error" role="alert">{errors.product}</span>}
                          </div>
                          <div className="form-group">
                            <label htmlFor="quantity">
                              <Ruler size={13} />
                              {' '}Estimated Quantity <span className="form-required" aria-hidden="true">*</span>
                            </label>
                            <input
                              type="text"
                              id="quantity"
                              placeholder="e.g. 2,000 blocks"
                              value={form.quantity}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                              aria-required="true"
                              aria-invalid={!!errors.quantity}
                              aria-describedby={errors.quantity ? 'rq-quantity-error' : undefined}
                              className={errors.quantity ? 'input-error' : ''}
                            />
                            {errors.quantity && <span id="rq-quantity-error" className="form-error" role="alert">{errors.quantity}</span>}
                          </div>
                        </div>
                      </div>

                      <div className="rq-form-section">
                        <h3 className="rq-form-section-title">
                          <Truck size={16} />
                          Delivery & Timeline
                        </h3>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="delivery">Delivery Location / Requirements</label>
                            <input
                              type="text"
                              id="delivery"
                              placeholder="e.g. Accra, Tema, site address"
                              value={form.delivery}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="timeline">
                              <Calendar size={13} />
                              {' '}Required Timeline
                            </label>
                            <input
                              type="text"
                              id="timeline"
                              placeholder="e.g. Within 2 weeks"
                              value={form.timeline}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="rq-form-section">
                        <h3 className="rq-form-section-title">
                          <FileText size={16} />
                          Project Details
                        </h3>
                        <div className="form-group">
                          <label htmlFor="projectDetails">
                            Describe your Project <span className="form-required" aria-hidden="true">*</span>
                          </label>
                          <textarea
                            id="projectDetails"
                            rows={5}
                            placeholder="Tell us about your project, the application, any specific requirements or specifications you need to meet..."
                            value={form.projectDetails}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            aria-required="true"
                            aria-invalid={!!errors.projectDetails}
                            aria-describedby={errors.projectDetails ? 'rq-project-error' : undefined}
                            className={errors.projectDetails ? 'input-error' : ''}
                          />
                          {errors.projectDetails && <span id="rq-project-error" className="form-error" role="alert">{errors.projectDetails}</span>}
                        </div>
                      </div>

                      <AnimatedButton
                        variant="primary"
                        type="submit"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <>Sending<span className="rq-sending-dots"><span>.</span><span>.</span><span>.</span></span></>
                        ) : (
                          <><Send size={16} /> Submit Quote Request</>
                        )}
                      </AnimatedButton>

                      {status === 'error' && (
                        <motion.div
                          className="rq-form-error-banner"
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
                className="rq-sidebar"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="rq-sidebar-card">
                  <div className="rq-sidebar-header">
                    <Building2 size={20} className="rq-sidebar-header-icon" />
                    <h3>Why Request a Quote?</h3>
                  </div>
                  <ul className="rq-sidebar-list">
                    <li>Get pricing tailored to your project volume</li>
                    <li>Receive technical product recommendations</li>
                    <li>Understand delivery timelines and options</li>
                    <li>Direct response from our sales team</li>
                  </ul>
                </div>

                <div className="rq-sidebar-card">
                  <div className="rq-sidebar-header">
                    <Building2 size={20} className="rq-sidebar-header-icon" />
                    <h3>Prefer to call?</h3>
                  </div>
                  <p className="rq-sidebar-text">
                    You can also reach our sales team directly:
                  </p>
                  <a href="tel:+233302555019" className="rq-sidebar-phone">+233 302 555 019</a>
                </div>

                <div className="rq-sidebar-card">
                  <div className="rq-sidebar-header">
                    <Building2 size={20} className="rq-sidebar-header-icon" />
                    <h3>What happens next?</h3>
                  </div>
                  <ol className="rq-sidebar-steps">
                    <li>We review your requirements</li>
                    <li>Our team prepares a detailed quote</li>
                    <li>We reach out within 24 hours</li>
                    <li>Discuss delivery and payment terms</li>
                  </ol>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
