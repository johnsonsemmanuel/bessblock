import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import ScrollReveal from '../components/ScrollReveal';
import PageHero from '../components/PageHero';
import './About.css';

export default function About() {
  return (
    <div className="page">
      <PageHero title="About Bessblock" bgImage="/images/hero/walling-hero.jpg">
        <p className="page-hero-desc">
          Bessblock Concrete Products Ltd (Bessblock) is a specialist manufacturer of concrete products serving the needs of residential, commercial, and civil construction projects. As part of the RG Group, Bessblock was established to help ensure the timely supply of high-quality materials that support project delivery, durability, and consistency across every stage of development.
        </p>
        <p className="page-hero-desc">
          Bessblock exists to solve a practical construction challenge: when projects depend on dependable materials, quality and timing matter just as much as price. That is why our focus is on producing concrete products that contractors, developers, engineers, and project managers can rely on for performance, specification compliance, and ease of installation.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <ScrollReveal>
              <h2 className="about-heading">Our Group Story</h2>
              <p className="about-text">
                Bessblock is part of a wider family of businesses under Regimanuel Gray Group, a company founded in 1991 with housing estate development as its core business. Over time, the business expanded into turnkey project execution and site development, including road construction, drainage, and utility infrastructure, while building a strong base of dedicated local and expatriate personnel.
              </p>
              <p className="about-text">
                To support that growth, Regimanuel Gray established subsidiaries including Regimauel Concrete Products Ltd, Bessblock Concrete Products Ltd, Sierrablock Concrete Products Ltd, Desjoyaux Ghana Ltd, and Regimanuel Gray Estate Management Company Ltd. Together with its joint ventures, the Group has evolved into a diversified conglomerate with interests in construction, concrete products, estate management, and swimming pool construction.
              </p>
              <p className="about-text">
                Bessblock plays a key role in that ecosystem by supplying concrete products that support both internal projects and external customers. This gives the company a practical understanding of what projects need on the ground: consistent materials, dependable supply, and products that perform in real site conditions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2 className="about-heading">What We Do</h2>
              <p className="about-text">
                Bessblock manufactures a focused range of concrete products designed for both structural and landscape applications. Our product families include paving blocks, walling products, retaining walls, kerbs and edging, paving slabs, and step risers, allowing us to serve a broad range of project types with one reliable supply partner.
              </p>
              <p className="about-text">Our range is built for use in:</p>
              <ul className="about-list">
                <li>Residential developments.</li>
                <li>Commercial and institutional projects.</li>
                <li>Roads, estates, and infrastructure.</li>
                <li>Landscaping and public realm schemes.</li>
                <li>Retaining and soil-stabilisation works.</li>
              </ul>
              <p className="about-text">
                For retaining walls in particular, Bessblock also aligns with Terraforce-style systems, which are designed as modular, interlocking, dry-stack concrete blocks for gravity and reinforced retaining wall construction. That makes the Bessblock retaining wall offer especially relevant to landscaping, embankment support, terracing, and slope stabilisation work.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="about-heading">Why Bessblock</h2>
              <p className="about-text">
                Bessblock is built around the idea that concrete products should do more than fill a specification sheet. They should help solve real problems on site, whether that means load-bearing performance, clean edge restraint, durable surface finishes, or engineered retaining solutions.
              </p>
              <p className="about-text">Our customers choose Bessblock because we offer:</p>
              <ul className="about-list">
                <li>A practical product range for multiple construction uses.</li>
                <li>Manufacturing consistency and dependable supply.</li>
                <li>Products suited to both functional and aesthetic applications.</li>
                <li>Support for contractors, developers, consultants, and engineers.</li>
                <li>A company structure backed by the wider strength of the RG Group.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="about-heading">Our Philosophy</h2>
              <p className="about-text">
                The philosophy of the RG Group is to invest in and build world-class, sustainable businesses from Ghana that can serve generations.
              </p>
              <p className="about-text">
                Bessblock reflects that philosophy through a commitment to dependable manufacturing, practical product development, and long-term value. We aim to supply products that are not only strong and functional, but also relevant to modern construction demands and future growth.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="about-heading">Quality And Support</h2>
              <p className="about-text">
                At Bessblock, quality is not treated as an afterthought. It is built into the way we think about product design, production reliability, and customer support.
              </p>
              <p className="about-text">Our team works to ensure that customers receive:</p>
              <ul className="about-list">
                <li>Clear product information.</li>
                <li>Practical specification guidance.</li>
                <li>Reliable manufacturing output.</li>
                <li>Responsive support for quotations and orders.</li>
                <li>Products that match the demands of the intended application.</li>
              </ul>
              <p className="about-text">
                This operational mindset is especially important for a products business, where lead quality, stock availability, and delivery reliability can directly affect project timelines. The same discipline should also be reflected on the website through clear calls to action, technical downloads, and product-specific enquiry paths.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="about-cta-title">Need support with your next project?</h2>
            <p className="about-cta-text">
              Explore our products, review technical information, or contact our team for a quotation and product guidance.
            </p>
            <div className="about-cta-actions">
              <AnimatedButton to="/products/paving-blocks" variant="primary">Explore Products</AnimatedButton>
              <AnimatedButton to="/contact" variant="outline-dark">Request a Quote</AnimatedButton>
              <AnimatedButton to="/contact" variant="outline-dark">Contact Bessblock</AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
