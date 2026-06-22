import { Link } from 'react-router-dom';
import { ArrowRight, Grid3x3, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { WallingIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';
import './About.css';
import './RetainingWalls.css';

const benefits = [
  'Reversible hollow-core concrete block system.',
  'Horizontal interlock for strong and flexible wall construction.',
  'Suitable for curves, corners, and changing wall angles.',
  'Plantable and permeable for living wall applications.',
  'Suitable for gravity, reinforced, and stabilised backfill systems.',
  'A durable solution for landscaping, erosion control, and terracing.',
];

const apps = [
  'Soil retaining walls.', 'Erosion protection.', 'Garden terracing.',
  'Reinforced slopes.', 'Landscaped retaining structures.', 'Earth embankments.',
  'River embankments.', 'Sea shore protection.',
];

const families = [
  { name: 'L Range - Standard Option', id: 'l-range-standard' },
  { name: 'L Range - Rock Face Option', id: 'l-range-rock-face' },
  { name: '4x4 Step Block', id: '4x4-step-block' },
  { name: 'Terralite', id: 'terralite' },
  { name: 'Terrafix', id: 'terrafix' },
  { name: 'Terracrete', id: 'terracrete' },
];

export default function RetainingWalls() {
  const cat = productCategories.find(c => c.id === 'walling');
  const retainingSubs = cat.subcategories.filter(
    s => ['l-range-standard', 'l-range-rock-face', 'terralite', '4x4-step-block', 'terrafix', 'terracrete'].includes(s.id)
  );

  return (
    <>
      <SEO title="Retaining Walls" description="Bessblock's licensed Terraforce® retaining wall system for soil retention, erosion control, terracing, and reinforced slopes with modular interlocking blocks." />
      <div className="page">
      <PageHero
        title="Retaining Walls"
        description="Bessblock's Retaining Walls is a licensed Terraforce® retaining wall system designed for soil retention, erosion control, terracing, and reinforced slopes. The Terraforce® system combines a reversible hollow-core block design with horizontal interlock, allowing wall angles and curves to be formed to suit project requirements."
        bgImage="/images/hero/concrete-texture-1.jpg"
      />

      {/* Overview */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Terraforce® retaining system" align="left" />
          <ScrollReveal>
            <div className="retaining-overview">
              <p>Terraforce® retaining wall blocks are a versatile concrete retaining solution for landscaping, earth retention, and structural retaining wall applications. The system is suitable for gravity retaining walls, geosynthetic reinforced segmental retaining walls, and cement stabilised backfill installations.</p>
              <p>The blocks are lightweight for delivery and installation, yet heavy in mass when filled with soil, gravel, or concrete, helping provide additional vertical interlock and stability. Terraforce® products are also fully permeable, plantable, and suitable for environmentally friendly retaining wall designs.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Engineered for earth retention" align="left" />
          <div className="retaining-benefits">
            {benefits.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="retaining-benefit-card">
                  <CheckCircle2 size={16} className="retaining-benefit-dot" />
                  <span>{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Applications" title="Where Terraforce® is used" align="left" />
          <div className="retaining-apps">
            {apps.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="retaining-app">{app}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Technical Information" title="How the system works" align="left" />
          <ScrollReveal>
            <div className="retaining-tech">
              <p>Terraforce® retaining blocks are designed to stack with a distinctive horizontal interlock and can be used as part of a gravity wall or as the fascia of a geosynthetic reinforced wall structure. The system can also be used with cement stabilised backfill where space or site conditions require it.</p>
              <p>The blocks are manufactured as hollow-core units that can be filled with soil, gravel, or concrete, depending on the engineered design. This construction method supports soil stabilisation while allowing water to drain through the wall structure.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Range */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Product Range" title="Terraforce® product families" align="left" />
          <div className="retaining-families">
            {families.map((f, i) => (
              <ScrollReveal key={f.id} delay={i * 0.05}>
                <Link to={`/products/walling/${f.id}`} className="retaining-family-card">
                  <div className="retaining-family-icon">
                    <Grid3x3 size={20} />
                  </div>
                  <span>{f.name}</span>
                  <ArrowRight size={14} className="retaining-family-arrow" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Finish Options */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Finish Options" title="Appearance choices" align="left" />
          <ScrollReveal>
            <div className="retaining-finish">
              <p>Terraforce® blocks are available in different face options, including smooth face and rock face finishes. The system also supports a natural planted appearance where vegetation is incorporated into the wall design.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Use */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Project Use" title="Built for real projects" align="left" />
          <ScrollReveal>
            <div className="retaining-project-use">
              <p>Terraforce® retaining walls are used where a retaining structure is required together with a flexible, attractive and practical wall finish. The system is suitable for domestic, commercial, landscaping, and civil engineering projects.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Subcategory cards */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Product Range" title="Explore Terraforce® products" />
          <div className="retaining-sub-grid">
            {retainingSubs.map((sub, i) => (
              <ScrollReveal key={sub.id} delay={i * 0.06}>
                <ProductHighlightCard
                  categoryIcon={WallingIcon}
                  category="Retaining Walls"
                  title={sub.name}
                  description={sub.description}
                  to={sub.path}
                  imageSrc={`/images/products/retaining-wall-${(i % 3) + 1}.jpg`}
                  imageAlt={sub.name}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container">
          <div className="about-cta">
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Need retaining walls for your project?</h2>
            <p className="about-cta-text" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Contact our team for technical specifications, pricing, and project advice.
            </p>
            <div className="about-cta-actions">
              <AnimatedButton to="/request-quote" variant="yellow">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products/walling" variant="outline">View All Walling</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
