import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import PageHero from '../components/PageHero';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page">
      <PageHero
        title="Contact"
        description="Get in touch with our team for product inquiries, technical support, or to discuss your project requirements."
        bgImage="/images/hero/retaining-walls-hero.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="contact-form-title">Send a Message</h2>
              <form className="contact-form" onSubmit={e => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company / Organisation</label>
                  <input type="text" id="company" placeholder="Company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="technical">Technical Support</option>
                    <option value="delivery">Delivery Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us about your project requirements..." />
                </div>
                <AnimatedButton variant="primary" type="submit">Send Message</AnimatedButton>
              </form>
            </motion.div>

            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="contact-details">
                  <div className="contact-detail">
                    <span className="contact-detail-label">Address</span>
                    <span className="contact-detail-value">Bessblock Concrete Products Ltd, Industrial Area, Accra</span>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-detail-label">Phone</span>
                    <span className="contact-detail-value">+233 302 555 019</span>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-detail-label">Email</span>
                    <span className="contact-detail-value">info@bessblock.com</span>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-detail-label">Office Hours</span>
                    <span className="contact-detail-value">Mon - Fri: 7:00 AM - 5:00 PM<br />Sat: 8:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
