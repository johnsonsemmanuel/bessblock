import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import AnimatedButton from '../components/AnimatedButton';
import LazyBackground from '../components/LazyBackground';
import { ArrowRight, CheckCircle, ChevronDown, Circle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { ProgressiveBlur } from '../components/ProgressiveBlur';
import TestimonialsSection from '../components/TestimonialsSection';
import CTAWithVerticalMarquee from '../components/CTAWithVerticalMarquee';
import testimonials from '../data/testimonials';
import './Home.css';

const heroSlides = [
  { image: '/images/hero/production-site-1.webp', label: 'Bessblock production facility and operations' },
  { image: '/images/hero/production-site-2.webp', label: 'Concrete block manufacturing at Bessblock' },
  { image: '/images/hero/production-site-3.webp', label: 'Bessblock product showcase and site development' },
  { image: '/images/hero/production-site-4.webp', label: 'Bessblock team at work in the factory' },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const trustItems = [
  'Durable concrete products manufactured for long-term performance.',
  'Reliable supply for projects of different sizes and requirements.',
  'Technical support for contractors, engineers, and project teams.',
  'Product options for domestic, commercial, and civil applications.',
];

const whyItems = [
  'Consistent product quality.',
  'Practical sizing and specification options.',
  'Suitable for domestic, commercial, and civil works.',
  'Support for contractors, engineers, and project managers.',
  'A product range that balances value, durability, and appearance.',
];

const appItems = [
  { label: 'Domestic driveways and gardens.', link: '/products/paving-blocks', image: '/images/products/interlocking-paving-1.webp' },
  { label: 'Footpaths and pedestrian areas.', link: '/products/paving-blocks', image: '/images/products/rectangular-paving-1.webp' },
  { label: 'Commercial forecourts and parking areas.', link: '/products/paving-blocks', image: '/images/products/interlocking-paving-2.webp' },
  { label: 'Landscaping and public realm schemes.', link: '/products/paving-slabs', image: '/images/products/hexagonal-paving-blocks-1.webp' },
  { label: 'Roads, estate developments, and edge restraint.', link: '/products/kerbs-edging', image: '/images/products/rectangular-paving-5.webp' },
  { label: 'Retaining and terracing applications.', link: '/products/walling/retaining-walls', image: '/images/products/retaining-wall-1.webp' },
];

const categoryLinks = [
  { name: 'Paving Blocks', path: '/products/paving-blocks', image: '/images/products/interlocking-paving-1.webp' },
  { name: 'Walling', path: '/products/walling', image: '/images/products/hollow-blocks-1.webp' },
  { name: 'Paving Slabs', path: '/products/paving-slabs', image: '/images/products/rectangular-paving-2.webp' },
  { name: 'Retaining Walls', path: '/products/walling/retaining-walls', image: '/images/products/retaining-wall-1.webp' },
  { name: 'Kerbs & Edging', path: '/products/kerbs-edging', image: '/images/products/rectangular-paving-3.webp' },
  { name: 'Step Risers', path: '/products/step-risers', image: '/images/products/rectangular-paving-4.webp' },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setLeaving(slide);
      setSlide(s => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <>
      <SEO title="Home" description="Bessblock Concrete Products Ltd, manufacturer of concrete blocks, paving units, kerbs, and edging solutions for infrastructure and institutional projects in Ghana." />
    <div className="page">
      {/* Hero */}
      <section
        className="hero"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${heroSlides[slide].image})` }}
          role="img"
          aria-label={heroSlides[slide].label}
        />
        {leaving !== null && (
          <motion.div
            className="hero-bg"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onAnimationComplete={() => setLeaving(null)}
            style={{ backgroundImage: `url(${heroSlides[leaving].image})` }}
            aria-hidden="true"
          />
        )}
        <div className="hero-bg-overlay" />
        <div className="hero-content">
          <motion.div
            className="hero-content-inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="hero-label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Bessblock Concrete Products
            </motion.span>
            <h1 className="hero-title">
              Built to perform.<br />
              <span className="hero-title-accent">Designed to last.</span>
            </h1>
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              High-quality concrete products for paving, walling, retaining, and drainage, trusted by contractors, developers, and specifiers across Ghana.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <AnimatedButton to="/products/paving-blocks" variant="primary">Explore Products</AnimatedButton>
              <AnimatedButton to="/request-quote" variant="outline">Request a Quote</AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', overflow: 'hidden' }}>
          <ProgressiveBlur direction="bottom" blurLayers={6} blurIntensity={0.3} />
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === slide ? ' active' : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="hero-scroll-indicator" aria-hidden="true">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Trust bar */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            className="home-trust-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {trustItems.map((item, i) => (
              <motion.div key={i} className="home-trust-item" variants={fadeUp}>
                <Circle size={10} className="home-trust-dot" />
                <p className="home-trust-text">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Range */}
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Product Range"
            title="Find the right solution for your project"
          />
          <p className="home-range-intro">
            Bessblock offers a focused range of concrete products designed to meet a wide variety of site and construction requirements. Use the categories below to find the right solution for your project.
          </p>
          <div className="home-range-grid">
            {categoryLinks.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.05}>
                <Link to={cat.path} className="home-range-card">
                  <LazyBackground src={cat.image} className="home-range-card-bg" />
                  <div className="home-range-card-overlay" />
                  <div className="home-range-card-content">
                    <span className="home-range-name">{cat.name}</span>
                    <ArrowRight size={24} className="home-range-arrow" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Spotlight */}
      <section className="section section-blue home-spotlight">
        <div className="container">
          <div className="home-spotlight-grid">
            <ScrollReveal direction="left">
              <div className="home-spotlight-content">
                <SectionTitle
                  label="Featured Product"
                  title="Paving blocks for strong, attractive surfaces"
                  light
                  align="left"
                />
                <p className="home-spotlight-text">
                  Bessblock paving blocks are built for performance in pathways, driveways, parking areas, courtyards, and public spaces. With multiple thickness options, colour choices, and pattern possibilities, they offer a practical and visually appealing surface solution.
                </p>
                <AnimatedButton to="/products/paving-blocks" variant="yellow">View Paving Range</AnimatedButton>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="home-spotlight-content">
                <SectionTitle
                  label="Featured Product"
                  title="Retaining wall systems for real site challenges"
                  light
                  align="left"
                />
                <p className="home-spotlight-text">
                  Our retaining wall range includes modular solutions for soil retention, slope stabilisation, terracing, landscaping, and engineered applications. Terraforce-compatible products bring the benefit of dry-stack construction, curved layouts, drainage-friendly design, and the flexibility to support both gravity and reinforced wall systems.
                </p>
                <AnimatedButton to="/products/walling/retaining-walls" variant="yellow">View Retaining Range</AnimatedButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Bessblock */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            label="Why Bessblock"
            title="Concrete solutions you can depend on"
          />
          <div className="home-why-content">
            <p className="home-why-intro">
              Bessblock combines manufacturing know-how with practical product design to support projects from first enquiry through to delivery. The result is a range of concrete solutions that are straightforward to specify, easy to install, and dependable in use.
            </p>
            <ul className="home-why-list">
              {whyItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="home-why-item"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <CheckCircle size={18} className="home-why-check" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Applications section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Applications"
            title="Built for a wide range of projects"
          />
          <p className="home-apps-intro">
            Bessblock products are suitable for many site conditions and design needs, from small domestic improvements to larger construction and infrastructure works. Clear application-led navigation will help customers quickly identify the best product for their use case.
          </p>
          <div className="home-apps-grid">
            {appItems.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <Link to={app.link} className="home-app-card">
                  <LazyBackground src={app.image} className="home-app-card-bg" />
                  <div className="home-app-card-overlay" />
                  <div className="home-app-card-content">
                    <span className="home-app-label">{app.label}</span>
                    <ArrowRight size={24} className="home-app-arrow" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project gallery teaser */}
      <section className="section section-light">
        <div className="container">
          <div className="home-gallery-teaser">
            <div className="home-gallery-content">
              <SectionTitle
                label="Project Gallery"
                title="See Bessblock in action"
                align="left"
              />
              <p className="home-gallery-text">
                Explore completed and ongoing projects to see how Bessblock products perform in real-world settings. Project imagery builds trust, demonstrates finish quality, and helps customers visualise colours, textures, and installation patterns.
              </p>
              <p className="home-gallery-text-secondary">
                A strong gallery is especially important for paving and retaining products because visual proof helps customers choose with confidence.
              </p>
              <AnimatedButton to="/projects" variant="primary">View Project Gallery</AnimatedButton>
            </div>
            <div className="home-gallery-visual">
              <div className="home-gallery-blocks">
                {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                  <div key={i} className="gallery-block" style={{ animationDelay: `${i * 0.12}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and manufacturing */}
      <section className="section section-blue">
        <div className="container">
          <div className="home-quality-grid">
            <ScrollReveal direction="left">
              <div className="home-quality-visual">
                <div className="home-quality-blocks">
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} className="quality-block" />
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <SectionTitle
                label="Manufacturing"
                title="Manufactured for strength"
                light
                align="left"
              />
              <p className="home-quality-text">
                Bessblock's manufacturing process is built around consistency, quality control, and reliable output. Each product is designed to deliver the performance required for its intended application, whether that is pedestrian paving, structural walling, or retaining wall construction.
              </p>
              <AnimatedButton to="/about/manufacturing" variant="yellow">Our Manufacturing Process</AnimatedButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <TestimonialsSection
        subtitle="See what our clients say about working with Bessblock"
        testimonials={testimonials}
      />

      <CTAWithVerticalMarquee />
    </div>
    </>
  );
}
