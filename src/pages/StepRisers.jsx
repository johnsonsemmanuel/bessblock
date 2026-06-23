import { Shield, Ruler, HardHat, Layers, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import BlockDesign from '../components/BlockDesigns';
import { StepIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';

const benefits = [
  { icon: Shield, text: 'Precast concrete step and riser units for durable stair construction.' },
  { icon: Layers, text: 'Available in standard, wide tread, and bullnose profiles.' },
  { icon: Ruler, text: 'Manufactured to consistent dimensions for reliable installation.' },
  { icon: HardHat, text: 'Suitable for residential, commercial, and institutional stair applications.' },
  { icon: CheckCircle2, text: 'Designed for safe, visually consistent stair finishes.' },
];

export default function StepRisers() {
  const cat = productCategories.find(c => c.id === 'step-risers');
  return (
    <>
      <SEO title="Step Risers" description="Explore Bessblock's concrete step riser range, standard step risers, wide tread steps, and bullnose steps for durable outdoor stair construction." />
      <div className="page">
      <PageHero title="Step Risers" description={cat.description} bgImage="/images/hero/concrete-texture-2.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Precast concrete steps for durable stair construction" align="left" />
          <ScrollReveal>
            <p className="about-text">Our step risers are precast concrete units designed for outdoor stair construction in residential, commercial, and institutional settings. Available in standard, wide tread, and bullnose profiles, each unit is manufactured to precise dimensions for consistent installation and a professional finish.</p>
            <p className="about-text">Whether the project requires straightforward step installations, generous tread depths for public entrances, or rounded-edge finishes for refined stair details, our step range provides reliable performance and visual consistency.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Why choose Bessblock step risers" align="left" />
          <div className="about-stats">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="about-stat-card" style={{ textAlign: 'left' }}>
                  <div className="about-stat-icon">
                    <b.icon size={22} />
                  </div>
                  <div className="about-stat-label" style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{b.text}</div>
                  <BlockDesign variant={['stack-bond', 'running-bond', 'hex-grid', 'interlock', 'stack-bond'][i]} className="paving-benefit-design" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Product Range" title="Our step riser range" align="left" />
          <div className="subcategory-grid">
              {[
                { ...cat.subcategories[0], image: '/images/products/rectangular-paving-1.webp' },
                { ...cat.subcategories[1], image: '/images/products/rectangular-paving-2.webp' },
                { ...cat.subcategories[2], image: '/images/products/rectangular-paving-3.webp' },
              ].map(sub => (
              <ProductHighlightCard
                key={sub.id}
                categoryIcon={StepIcon}
                category="Step Risers"
                title={sub.name}
                description={sub.description}
                to={sub.path}
                imageSrc={sub.image}
                imageAlt={sub.name}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteCTA
        title="Need step risers for your project?"
        description="Contact our team for product advice, pricing, and delivery information."
        secondaryText="Request a Quote"
        secondaryLink="/request-quote"
      />
    </div>
    </>
  );
}
