import { motion } from 'framer-motion';
import { Building2, Truck, HardHat, Shield, Ruler, Layers, Trees, Warehouse, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import LazyBackground from '../components/LazyBackground';
import { FlowArt, FlowPanel } from '../components/FlowArt';
import '../components/FlowArt.css';
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

const flowPanels = [
  {
    label: 'History',
    title: 'Our Group Story',
    bg: '/images/production/IMG_1873.webp',
    text: 'Bessblock is part of the Regimanuel Gray Group, founded in 1991. What began as housing estate development grew into a diversified conglomerate spanning construction, concrete products, estate management, and infrastructure. Bessblock plays a key role in that ecosystem, supplying concrete products that support both internal projects and external customers.',
    align: 'left',
  },
  {
    label: 'Products',
    title: 'What We Do',
    bg: '/images/production/IMG_1803.webp',
    text: 'Bessblock manufactures a focused range of concrete products for structural and landscape applications. Our product families include paving blocks, walling products, retaining walls, kerbs and edging, paving slabs, and step risers.',
    align: 'right',
  },
  {
    label: 'Value',
    title: 'Why Bessblock',
    bg: '/images/production/IMG_1836.webp',
    text: 'Bessblock is built around the idea that concrete products should do more than fill a specification sheet. Our customers choose us for consistent quality, dependable supply, and products suited to both functional and aesthetic applications.',
    align: 'left',
  },
  {
    label: 'Mission',
    title: 'Our Philosophy',
    bg: '/images/production/IMG_0628.webp',
    text: 'The RG Group philosophy is to invest in world-class, sustainable businesses from Ghana that serve generations. Bessblock reflects that through dependable manufacturing, practical product development, and a commitment to long-term value.',
    align: 'right',
  },
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

      {/* Story panels — scroll-driven flow */}
      <FlowArt>
        {flowPanels.map((panel, i) => (
          <FlowPanel key={i} className="about-flow-panel">
            <LazyBackground src={panel.bg} className="about-flow-bg" />
            <div className="about-flow-overlay" />
            <div className={`about-flow-content about-flow-content-${panel.align}`}>
              <span className="about-flow-label">{panel.label}</span>
              <h2 className="about-flow-title">{panel.title}</h2>
              <p className="about-flow-text">{panel.text}</p>
              {panel.title === 'What We Do' && (
                <div className="about-flow-products">
                  {productAreas.map((item, j) => (
                    <div key={j} className="about-flow-product">
                      <item.icon size={14} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              )}
              {panel.title === 'Why Bessblock' && (
                <ul className="about-flow-list">
                  {whyItems.map((item, j) => (
                    <li key={j}>
                      <item.icon size={13} />
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FlowPanel>
        ))}
      </FlowArt>

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
