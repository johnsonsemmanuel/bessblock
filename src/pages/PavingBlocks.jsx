import { CheckCircle2, Shield, Layers, Ruler, HardHat, Grid3x3 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import CoverageCalculator from '../components/CoverageCalculator';
import SiteCTA from '../components/SiteCTA';
import '../components/CoverageCalculator.css';
import { PavingIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';

const benefits = [
  { icon: Shield, text: 'High compressive strength for heavy-duty commercial and institutional pavement.' },
  { icon: Layers, text: 'Wide range of shapes — interlocking, rectangular, and hexagonal formats.' },
  { icon: Ruler, text: 'Precision-manufactured to BS EN 1338 for consistent dimensions and finish.' },
  { icon: HardHat, text: 'Suitable for roads, estates, public spaces, and industrial hardstanding.' },
  { icon: Grid3x3, text: 'Interlocking paving options for superior load distribution.' },
];

export default function PavingBlocks() {
  const cat = productCategories.find(c => c.id === 'paving-blocks');
  return (
    <>
      <SEO title="Paving Blocks" description="Explore Bessblock's range of concrete paving blocks including interlocking, rectangular, and hexagonal options for durable pavement surfaces." />
      <div className="page">
      <PageHero title="Paving Blocks" description={cat.description} bgImage="/images/products/interlocking-paving-1.webp" />

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Premium paving for commercial and institutional projects" align="left" />
          <ScrollReveal>
            <p className="about-text">Our paving blocks are designed for projects that demand durability, dimensional accuracy, and a professional finish. Manufactured to relevant British and European standards, each block type — interlocking, rectangular, and hexagonal — is suited to different loading and aesthetic requirements.</p>
            <p className="about-text">Whether the application is a public roadway, a housing estate, a car park, or a pedestrian precinct, our paving range provides reliable performance and consistent appearance across the installation.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Why choose Bessblock paving" align="left" />
          <div className="about-stats">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="about-stat-card" style={{ textAlign: 'left' }}>
                  <div className="about-stat-icon">
                    <b.icon size={22} />
                  </div>
                  <div className="about-stat-label" style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{b.text}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Product Range" title="Our paving block range" align="left" />
          <div className="subcategory-grid">
              {[
                { ...cat.subcategories[0], image: '/images/products/interlocking-paving-1.webp' },
                { ...cat.subcategories[1], image: '/images/products/rectangular-paving-1.webp' },
                { ...cat.subcategories[2], image: '/images/products/hexagonal-paving-blocks-1.webp' },
              ].map(sub => (
              <ProductHighlightCard
                key={sub.id}
                categoryIcon={PavingIcon}
                category="Paving Blocks"
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

      <section className="section section-light">
        <div className="container">
          <div className="calculator-layout">
            <div className="calculator-info">
              <SectionTitle title="Coverage Calculator" label="Estimate quantity" />
              <p>Use our coverage calculator to estimate the number of paving blocks needed for your project area. Simply select the product type and enter your area in square metres.</p>
              <ul>
                <li><CheckCircle2 size={16} />Covers interlocking, rectangular, and hexagonal paving</li>
                <li><CheckCircle2 size={16} />Accounts for standard block coverage rates</li>
                <li><CheckCircle2 size={16} />Instant quantity estimate with unit count</li>
              </ul>
            </div>
            <CoverageCalculator />
          </div>
        </div>
      </section>

      <SiteCTA
        title="Need paving blocks for your project?"
        description="Contact our team for product advice, pricing, and delivery information."
        secondaryText="Request a Quote"
        secondaryLink="/request-quote"
      />
    </div>
    </>
  );
}
