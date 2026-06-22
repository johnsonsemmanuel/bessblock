import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './Legal.css';

export default function TermsConditions() {
  return (
    <>
      <SEO title="Terms & Conditions" description="The terms governing your use of the Bessblock website and our concrete products and services." />
      <div className="page">
      <PageHero title="Terms & Conditions" description="The terms governing your use of the Bessblock website and our products and services." bgImage="/images/hero/concrete-texture-2.webp" />

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p className="legal-date">Last updated: June 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Bessblock website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services.</p>

            <h2>2. Products and Services</h2>
            <p>All product descriptions, specifications, and pricing are subject to change without notice. We reserve the right to discontinue any product at any time. Images are for illustration purposes and may not exactly match the final product.</p>

            <h2>3. Orders and Quotations</h2>
            <p>Quotations provided by Bessblock are valid for 30 days unless otherwise stated. Orders are subject to acceptance and availability. We reserve the right to refuse or cancel orders at our discretion.</p>

            <h2>4. Pricing and Payment</h2>
            <p>All prices are in Ghanaian Cedi (GHS) unless otherwise specified. Payment terms are as stated on the invoice. Late payments may incur additional charges as specified in the payment terms.</p>

            <h2>5. Delivery and Risk</h2>
            <p>Delivery timelines are estimates and not guaranteed. Risk of loss or damage passes to the buyer upon delivery. Claims for damage or short delivery must be reported within 48 hours of receipt.</p>

            <h2>6. Warranty</h2>
            <p>Our products are manufactured to industry standards. Warranty claims must be supported by proof of purchase and compliance with installation guidelines. This warranty does not cover misuse, improper installation, or normal wear and tear.</p>

            <h2>7. Limitation of Liability</h2>
            <p>Bessblock shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our total liability is limited to the purchase price of the product in question.</p>

            <h2>8. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Bessblock and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any content without our written permission.</p>

            <h2>9. Governing Law</h2>
            <p>These terms are governed by the laws of the Republic of Ghana. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ghana.</p>

            <h2>10. Contact</h2>
            <p>For questions about these terms, contact us at:<br />
            Bessblock Concrete Products Limited<br />
            Email: info@bessblock.com<br />
            Phone: +233 302 555 019</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
