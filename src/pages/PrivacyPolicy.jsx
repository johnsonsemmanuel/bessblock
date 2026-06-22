import { Shield, Mail, Phone, MapPin, FileText, Cookie, Lock, Clock, Eye, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import PageHero from '../components/PageHero';
import AnimatedButton from '../components/AnimatedButton';
import './Legal.css';

const infoTypes = [
  { icon: FileText, title: 'Personal Information', text: 'Name, email address, phone number, company name, and project details you provide through our contact form or email communications.' },
  { icon: Cookie, title: 'Usage Data', text: 'Information about how you interact with our website, including pages visited, time spent, and referring URLs, collected through cookies and similar technologies.' },
];

const yourRights = [
  'Access your personal data held by us',
  'Request correction of inaccurate data',
  'Request deletion of your data',
  'Object to processing of your data',
  'Request data portability',
  'Withdraw consent at any time',
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How Bessblock Concrete Products Limited collects, uses, and protects your personal information when you use our website." />
      <div className="page">
      <PageHero title="Privacy Policy" description="How Bessblock Concrete Products Limited collects, uses, and protects your personal information." bgImage="/images/hero/concrete-texture-1.webp" />

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <ScrollReveal>
              <p className="legal-date">Last updated: June 2026</p>
            </ScrollReveal>

            <ScrollReveal>
              <SectionTitle title="Introduction" align="left" />
              <p>Bessblock Concrete Products Limited ("Bessblock," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with us.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <SectionTitle title="Information We Collect" align="left" />
              <div className="legal-card-grid">
                {infoTypes.map((item, i) => (
                  <motion.div
                    key={i}
                    className="legal-card"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="legal-card-icon">
                      <item.icon size={20} />
                    </div>
                    <h3 className="legal-card-title">{item.title}</h3>
                    <p className="legal-card-text">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <SectionTitle title="How We Use Your Information" align="left" />
              <p>We use the collected information to: respond to your inquiries and provide product information; process quotation requests and project consultations; improve our website and services; send relevant updates and product information with your consent; comply with legal obligations.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <SectionTitle title="Data Protection" align="left" />
              <div className="legal-card" style={{ padding: 'var(--spacing-6)', marginBottom: 'var(--spacing-4)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'flex-start' }}>
                  <div className="legal-card-icon" style={{ flexShrink: 0 }}>
                    <Lock size={20} />
                  </div>
                  <div>
                    <p style={{ margin: 0 }}>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Your data is stored on secure servers with restricted access.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <SectionTitle title="Data Retention" align="left" />
              <div className="legal-card" style={{ padding: 'var(--spacing-6)', marginBottom: 'var(--spacing-4)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'flex-start' }}>
                  <div className="legal-card-icon" style={{ flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <p style={{ margin: 0 }}>We retain your personal information only as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. When no longer needed, your data will be securely deleted or anonymised.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <SectionTitle title="Your Rights" align="left" />
              <p>You have the right to:</p>
              <div className="legal-checklist">
                {yourRights.map((right, i) => (
                  <motion.div
                    key={i}
                    className="legal-check-item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <div className="legal-check-icon"><Eye size={14} /></div>
                    <span>{right}</span>
                  </motion.div>
                ))}
              </div>
              <p style={{ marginTop: 'var(--spacing-4)' }}>To exercise these rights, please contact us at <strong>info@bessblock.com</strong>.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <SectionTitle title="Third-Party Disclosure" align="left" />
              <p>We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or to trusted service providers who assist us in operating our website and business, subject to confidentiality agreements.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <SectionTitle title="Cookies" align="left" />
              <div className="legal-card" style={{ padding: 'var(--spacing-6)', marginBottom: 'var(--spacing-4)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'flex-start' }}>
                  <div className="legal-card-icon" style={{ flexShrink: 0 }}>
                    <RefreshCw size={20} />
                  </div>
                  <div>
                    <p style={{ margin: 0 }}>Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. See our Cookie Policy for more details.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <SectionTitle title="Contact Us" align="left" />
              <div className="legal-card" style={{ padding: 'var(--spacing-6)' }}>
                <p style={{ marginTop: 0 }}>If you have questions about this Privacy Policy, please contact us:</p>
                <div className="legal-contact-items">
                  <div className="legal-contact-item">
                    <MapPin size={16} />
                    <span>Industrial Area, Accra</span>
                  </div>
                  <div className="legal-contact-item">
                    <Mail size={16} />
                    <span>info@bessblock.com</span>
                  </div>
                  <div className="legal-contact-item">
                    <Phone size={16} />
                    <span>+233 302 555 019</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
