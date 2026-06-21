import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How Bessblock Concrete Products Limited collects, uses, and protects your personal information when you use our website." />
      <div className="page">
      <PageHero title="Privacy Policy" description="How Bessblock Concrete Products Limited collects, uses, and protects your personal information." bgImage="/images/hero/paving-hero.jpg" />

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p className="legal-date">Last updated: June 2026</p>

            <h2>1. Introduction</h2>
            <p>Bessblock Concrete Products Limited ("Bessblock," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with us.</p>

            <h2>2. Information We Collect</h2>
            <p><strong>Personal Information:</strong> Name, email address, phone number, company name, and project details you provide through our contact form or email communications.</p>
            <p><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs, collected through cookies and similar technologies.</p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information to: respond to your inquiries and provide product information; process quotation requests and project consultations; improve our website and services; send relevant updates and product information with your consent; comply with legal obligations.</p>

            <h2>4. Data Protection</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Your data is stored on secure servers with restricted access.</p>

            <h2>5. Data Retention</h2>
            <p>We retain your personal information only as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. When no longer needed, your data will be securely deleted or anonymised.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to: access your personal data held by us; request correction of inaccurate data; request deletion of your data; object to processing of your data; request data portability; withdraw consent at any time.</p>
            <p>To exercise these rights, please contact us at <strong>info@bessblock.com</strong>.</p>

            <h2>7. Third-Party Disclosure</h2>
            <p>We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or to trusted service providers who assist us in operating our website and business, subject to confidentiality agreements.</p>

            <h2>8. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. See our Cookie Policy for more details.</p>

            <h2>9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:<br />
            Bessblock Concrete Products Limited<br />
            Industrial Area, Accra<br />
            Email: info@bessblock.com<br />
            Phone: +233 302 555 019</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
