import { motion } from 'framer-motion';
import { Building2, Truck, HardHat, Shield, Ruler, Layers, Trees, Warehouse, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import LazyBackground from '../components/LazyBackground';
import AnimatedButton from '../components/AnimatedButton';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import './About.css';

const stats = [
  { icon: Building2, number: '1991', label: 'Founded as part of the RG Group' },
  { icon: Layers, number: '6+', label: 'Product families for construction' },
  { icon: Truck, number: 'Nationwide', label: 'Supply and distribution across Ghana' },
];

const productAreas = [
  { icon: Layers, label: 'Paving Blocks', text: 'Interlocking, rectangular, and hexagonal units for roads, estates, and public spaces.' },
  { icon: Warehouse, label: 'Walling & Retaining Walls', text: 'Modular walling blocks and Terraforce-style retaining systems for landscaping and stabilisation.' },
  { icon: Ruler, label: 'Kerbs & Edging', text: 'Edge restraint, road separation, and drainage control for infrastructure projects.' },
  { icon: Trees, label: 'Specialist Products', text: 'Paving slabs, step risers, and ceiling blocks for residential and institutional use.' },
];

const whyItems = [
  { icon: Shield, text: 'A practical product range for multiple construction uses.' },
  { icon: CheckCircle2, text: 'Manufacturing consistency and dependable supply.' },
  { icon: HardHat, text: 'Products suited to both functional and aesthetic applications.' },
  { icon: Ruler, text: 'Support for contractors, developers, consultants, and engineers.' },
  { icon: Building2, text: 'A company structure backed by the wider strength of the RG Group.' },
];

const supportItems = [
  { icon: CheckCircle2, text: 'Clear product information.' },
  { icon: CheckCircle2, text: 'Practical specification guidance.' },
  { icon: CheckCircle2, text: 'Reliable manufacturing output.' },
  { icon: CheckCircle2, text: 'Responsive support for quotations and orders.' },
  { icon: CheckCircle2, text: 'Products that match the demands of the intended application.' },
];

export default function About() {
  return (
    <>
      <SEO title="About" description="Learn about Bessblock Concrete Products Ltd, a leading manufacturer of concrete blocks, paving units, and kerbs in Ghana, serving residential, commercial, and institutional projects." />
      <div className="page">
      <PageHero title="About Bessblock" bgImage="/images/hero/concrete-texture-1.webp">
        <p className="page-hero-desc">
          Bessblock Concrete Products Ltd is a specialist manufacturer of concrete products serving residential, commercial, and civil construction projects across Ghana. As part of the RG Group, we are focused on producing materials that contractors, developers, and engineers can rely on for performance, specification compliance, and ease of installation.
        </p>
      </PageHero>

      {/* Stats */}
      <section className="section section-light">
        <div className="container">
          <div className="about-stats">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="about-stat-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="about-stat-icon">
                    <stat.icon size={22} />
                  </div>
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Group Story */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <ScrollReveal direction="left">
              <div className="about-split-text">
                <SectionTitle label="History" title="Our Group Story" align="left" />
                <p className="about-text">
                  Bessblock is part of a wider family of businesses under Regimanuel Gray Group, a company founded in 1991 with housing estate development as its core business. Over time, the business expanded into turnkey project execution and site development, including road construction, drainage, and utility infrastructure, while building a strong base of dedicated local and expatriate personnel.
                </p>
                <p className="about-text">
                  To support that growth, Regimanuel Gray established subsidiaries including Regimauel Concrete Products Ltd, Bessblock Concrete Products Ltd, Sierrablock Concrete Products Ltd, Desjoyaux Ghana Ltd, and Regimanuel Gray Estate Management Company Ltd. Together with its joint ventures, the Group has evolved into a diversified conglomerate with interests in construction, concrete products, estate management, and swimming pool construction.
                </p>
                <p className="about-text">
                  Bessblock plays a key role in that ecosystem by supplying concrete products that support both internal projects and external customers. This gives the company a practical understanding of what projects need on the ground: consistent materials, dependable supply, and products that perform in real site conditions.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="about-split-media">
                <LazyBackground src="/images/production/IMG_1873.webp" className="about-image-block about-image-block-photo">
                  <div className="about-image-block-label">Bessblock concrete products manufacturing facility</div>
                </LazyBackground>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section section-light">
        <div className="container">
          <ScrollReveal>
            <SectionTitle label="Products" title="What We Do" align="left" />
            <p className="about-text">
              Bessblock manufactures a focused range of concrete products designed for both structural and landscape applications. Our product families include paving blocks, walling products, retaining walls, kerbs and edging, paving slabs, and step risers, allowing us to serve a broad range of project types with one reliable supply partner.
            </p>
          </ScrollReveal>

          <div className="about-stats" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 'var(--spacing-8)' }}>
            {productAreas.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <motion.div
                  className="about-stat-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  style={{ textAlign: 'left' }}
                >
                  <div className="about-stat-icon">
                    <item.icon size={22} />
                  </div>
                  <div className="about-stat-label" style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text)', marginBottom: 'var(--spacing-1)' }}>
                    {item.label}
                  </div>
                  <div className="about-stat-label">{item.text}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.25}>
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
        </div>
      </section>

      {/* Why Bessblock */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <ScrollReveal direction="left">
              <div className="about-split-media">
                <LazyBackground src="/images/production/IMG_1803.webp" className="about-image-block about-image-block-photo">
                  <div className="about-image-block-label">Quality-controlled production at every stage</div>
                </LazyBackground>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="about-split-text">
                <SectionTitle label="Value" title="Why Bessblock" align="left" />
                <p className="about-text">
                  Bessblock is built around the idea that concrete products should do more than fill a specification sheet. They should help solve real problems on site, whether that means load-bearing performance, clean edge restraint, durable surface finishes, or engineered retaining solutions.
                </p>
                <p className="about-text">Our customers choose Bessblock because we offer:</p>
                <ul className="about-list">
                  {whyItems.map((item, i) => (
                    <li key={i}>
                      <span className="about-list-icon">
                        <item.icon size={13} />
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section section-light">
        <div className="container">
          <div className="about-split">
            <ScrollReveal direction="left">
              <div className="about-split-text">
                <SectionTitle label="Mission" title="Our Philosophy" align="left" />
                <p className="about-text">
                  The philosophy of the RG Group is to invest in and build world-class, sustainable businesses from Ghana that can serve generations.
                </p>
                <p className="about-text">
                  Bessblock reflects that philosophy through a commitment to dependable manufacturing, practical product development, and long-term value. We aim to supply products that are not only strong and functional, but also relevant to modern construction demands and future growth.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="about-split-media">
                <LazyBackground src="/images/production/IMG_1836.webp" className="about-image-block about-image-block-photo">
                  <div className="about-image-block-label">Commitment to long-term value and quality</div>
                </LazyBackground>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality And Support */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionTitle label="Support" title="Quality And Support" align="left" />
            <p className="about-text">
              At Bessblock, quality is not treated as an afterthought. It is built into the way we think about product design, production reliability, and customer support.
            </p>
            <p className="about-text">Our team works to ensure that customers receive:</p>
          </ScrollReveal>

          <div className="about-stats" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {supportItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <motion.div
                  className="about-stat-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', padding: 'var(--spacing-4) var(--spacing-5)' }}
                >
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(64, 64, 136, 0.1)', color: 'var(--color-bessblock-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <item.icon size={14} />
                  </div>
                  <div className="about-stat-label" style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>{item.text}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="about-text" style={{ marginTop: 'var(--spacing-8)' }}>
              This operational mindset is especially important for a products business, where lead quality, stock availability, and delivery reliability can directly affect project timelines. The same discipline should also be reflected on the website through clear calls to action, technical downloads, and product-specific enquiry paths.
            </p>
          </ScrollReveal>
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
              <AnimatedButton to="/request-quote" variant="outline-dark">Request a Quote</AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
