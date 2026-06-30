import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import AnimatedButton from '../components/AnimatedButton';
import LazyBackground from '../components/LazyBackground';
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, Box, Truck, HardHat, Grid3x3 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { ProgressiveBlur } from '../components/ProgressiveBlur';
import CTAWithVerticalMarquee from '../components/CTAWithVerticalMarquee';
import CoverageCalculator from '../components/CoverageCalculator';
import './Home.css';

const heroSlides = [
  { image: '/images/hero/production-site-4.webp', label: 'Bessblock team at work in the factory' },
  { image: '/images/hero/hexagonal-paving-1.webp', label: 'Bessblock hexagonal paving blocks installation' },
  { image: '/images/hero/production-site-1.webp', label: 'Bessblock production facility and operations' },
  { image: '/images/hero/production-site-3.webp', label: 'Bessblock product showcase and site development' },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const trustItems = [
  { text: 'Durable concrete products manufactured for long-term performance.', icon: Box },
  { text: 'Reliable supply for projects of different sizes and requirements.', icon: Truck },
  { text: 'Technical support for contractors, engineers, and project teams.', icon: HardHat },
  { text: 'Product options for domestic, commercial, and civil applications.', icon: Grid3x3 },
];

const whyItems = [
  'Consistent product quality.',
  'Practical sizing and specification options.',
  'Suitable for domestic, commercial, and civil works.',
  'Support for contractors, engineers, and project managers.',
  'A product range that balances value, durability, and appearance.',
];

const appItems = [
  { label: 'Domestic driveways and gardens.', link: '/products/paving-blocks', image: '/images/applications/domestic-driveways.webp' },
  { label: 'Footpaths and pedestrian areas.', link: '/products/paving-blocks', image: '/images/applications/footpaths.webp' },
  { label: 'Commercial forecourts and parking areas.', link: '/products/paving-blocks', image: '/images/applications/commercial-forecourts.webp' },
  { label: 'Landscaping and public realm schemes.', link: '/products/paving-blocks', image: '/images/applications/landscaping.webp' },
  { label: 'Roads, estate developments, and edge restraint.', link: '/products/kerbs-edging', image: '/images/applications/roads-estate.webp' },
  { label: 'Retaining and terracing applications.', link: '/products/walling/retaining-walls', image: '/images/applications/retaining-terracing.webp' },
];

const categoryLinks = [
  { name: 'Paving Blocks', path: '/products/paving-blocks', image: '/images/products/interlocking-paving-1.webp' },
  { name: 'Walling', path: '/products/walling', image: '/images/products/hollow-blocks-1.webp' },
  { name: 'Paving Slabs', path: '/products/paving-slabs', image: '/images/categories/paving-slabs.webp' },
  { name: 'Retaining Walls', path: '/products/walling/retaining-walls', image: '/images/categories/retaining-walls.webp' },
  { name: 'Kerbs & Edging', path: '/products/kerbs-edging', image: '/images/categories/kerbs-edging.webp' },
  { name: 'Step Risers', path: '/products/step-risers', image: '/images/categories/step-risers.webp' },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [paused, setPaused] = useState(false);
  const touchRef = useRef({ startX: 0 });

  const goTo = (i) => {
    setLeaving(slide);
    setSlide(i);
  };

  const next = () => goTo((slide + 1) % heroSlides.length);
  const prev = () => goTo((slide - 1 + heroSlides.length) % heroSlides.length);

  const onTouchStart = (e) => { touchRef.current.startX = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const diff = touchRef.current.startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  // Preload all hero images to prevent flash on transition
  useEffect(() => {
    heroSlides.forEach(s => { const img = new Image(); img.src = s.image; });
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setLeaving(slide);
      setSlide(s => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, slide]);

  return (
    <>
      <SEO title="Home" description="Bessblock Concrete Products Ltd, manufacturer of concrete blocks, paving units, kerbs, and edging solutions for infrastructure and institutional projects in Ghana." />
    <div className="page">
      {/* Hero */}
      <section
        className="hero"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="hero-bg hero-bg-active"
          style={{ backgroundImage: `url(${heroSlides[slide].image})` }}
          role="img"
          aria-label={heroSlides[slide].label}
        />
        {leaving !== null && (
          <motion.div
            className="hero-bg"
            style={{ backgroundImage: `url(${heroSlides[leaving].image})`, zIndex: -1 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            onAnimationComplete={() => setLeaving(null)}
            aria-hidden="true"
          />
        )}
        <div className="hero-bg-overlay" />
        <div className="hero-pattern" aria-hidden="true" />
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
              Premium<br />
              <span className="hero-title-accent">Concrete Products</span>
            </h1>
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Bessblock manufactures high quality concrete paving blocks, walling blocks, retaining wall systems, kerbs, edging products and concrete solutions for residential, commercial, and infrastructure developments. Trusted by contractors, developers, architects and engineers for durability and performance.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <AnimatedButton to="/products" variant="primary">Explore Products</AnimatedButton>
              <AnimatedButton to="/request-quote" variant="outline">Request a Quote</AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', overflow: 'hidden' }}>
          <ProgressiveBlur direction="bottom" blurLayers={6} blurIntensity={0.3} />
        </div>
        <button className="hero-arrow hero-arrow-left" onClick={prev} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <button className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>
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
            {trustItems.map(({ text, icon: TrustIcon }, i) => (
              <motion.div key={i} className="home-trust-card" variants={fadeUp}>
                <div className="home-trust-card-icon">
                  <TrustIcon size={18} />
                </div>
                <p className="home-trust-card-text">{text}</p>
                <div className="home-trust-card-bar" />
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
          <div className="home-spotlight-bg" aria-hidden="true" />
          <SectionTitle
            label="Featured Products"
            title="Curated for your next project"
            light
          />
          <div className="home-spotlight-grid">
            {[
              {
                image: '/images/products/interlocking-paving-1.webp',
                label: 'Featured Product',
                title: 'Paving blocks for strong, attractive surfaces',
                text: 'Bessblock paving blocks are built for performance in pathways, driveways, parking areas, courtyards, and public spaces. With multiple thickness options, colour choices, and pattern possibilities, they offer a practical and visually appealing surface solution.',
                button: 'View Paving Range',
                link: '/products/paving-blocks',
              },
              {
                image: '/images/products/retaining-walls.webp',
                label: 'Featured Product',
                title: 'Retaining wall systems for real site challenges',
                text: 'Our retaining wall range includes modular solutions for soil retention, slope stabilisation, terracing, landscaping, and engineered applications. Terraforce-compatible products bring the benefit of dry-stack construction, curved layouts, drainage-friendly design, and the flexibility to support both gravity and reinforced wall systems.',
                button: 'View Retaining Range',
                link: '/products/walling/retaining-walls',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="home-spotlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="home-spotlight-card-image-wrap">
                  <LazyBackground src={item.image} className="home-spotlight-card-image-bg" />
                  <div className="home-spotlight-card-image-overlay" />
                </div>
                <motion.div
                  className="home-spotlight-card-body"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
                  }}
                >
                  <motion.span
                    className="section-title-label section-title-label-light"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                  >
                    {item.label}
                  </motion.span>
                  <motion.h3
                    className="section-title-heading section-title-heading-light"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="home-spotlight-card-text"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                  >
                    {item.text}
                  </motion.p>
                  <motion.div
                    className="home-spotlight-card-actions"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                  >
                    <AnimatedButton to={item.link} variant="yellow">{item.button}</AnimatedButton>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
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

      {/* Coverage Calculator */}
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Project Calculator"
            title="Estimate your material needs"
          />
          <p className="home-apps-intro">
            Use our coverage calculator to estimate how many blocks, kerbs, or paving units you need for your project.
          </p>
          <CoverageCalculator />
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

      <CTAWithVerticalMarquee />
    </div>
    </>
  );
}
