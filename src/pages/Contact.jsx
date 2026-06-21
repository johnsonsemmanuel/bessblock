import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Building2, ArrowRight } from 'lucide-react';
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
    value: 'Mon – Fri: 7:00 AM – 5:00 PM\nSat: 8:00 AM – 1:00 PM',
  },
];

export default function Contact() {
  return (
    <>
      <SEO title="Contact" description="Get in touch with Bessblock Concrete Products Ltd for product inquiries, technical support, quotations, and project consultations." />
      <div className="page">
        <PageHero
          title="Contact"
          description="Get in touch with our team for product inquiries, technical support, or to discuss your project requirements."
          bgImage="/images/hero/retaining-walls-hero.jpg"
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
                    <AnimatedButton variant="primary" type="submit">
                      <Send size={16} />
                      Send Message
                    </AnimatedButton>
                  </form>
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
