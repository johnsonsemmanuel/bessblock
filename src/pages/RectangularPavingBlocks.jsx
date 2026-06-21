import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import SpecSheet from '../components/SpecSheet';
import './RectangularPavingBlocks.css';

const benefits = [
  { text: 'Designed to withstand heavy traffic loads and harsh weather conditions.' },
  { text: 'Manufactured to achieve excellent compressive strength for long-term performance.' },
  { text: 'Individual blocks can be removed and replaced without affecting surrounding pavement.' },
  { text: 'Available in multiple colours and finishes to complement different architectural designs.' },
  { text: 'Textured surface provides improved traction for pedestrians and vehicles.' },
  { text: 'Offers lower maintenance costs compared to conventional concrete or asphalt surfaces.' },
];

const techItems = [
  { label: 'Material composition', value: 'Cement, graded sand, quarry dust, chippings, and water.' },
  { label: 'Manufacturing method', value: 'Vibration, compaction, and controlled curing.' },
  { label: 'Finish options', value: 'Smooth, textured, or lightly patterned surfaces.' },
  { label: 'Colour options', value: 'Grey, red, buff, black, and other special finishes.' },
  { label: 'Typical use', value: 'Footpaths, patios, terraces, courtyards, garden areas, and utility spaces.' },
];

export default function RectangularPavingBlocks() {
  return (
    <>
      <SEO title="Rectangular Paving Blocks" description="High-quality precast rectangular concrete paving blocks from Bessblock for pedestrian, residential, commercial, and industrial surfacing applications." />
      <div className="page">
      <PageHero title="Rectangular Paving Block" bgImage="/images/products/rectangular-paving-1.jpg">
        <p className="page-hero-desc">
          Rectangular concrete paving block manufactured from high-quality cement, graded aggregates, and pigments (where applicable), compacted under high pressure to ensure dimensional accuracy and durability.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Clean. Strong. Versatile." align="left" />
          <ScrollReveal>
            <div className="rect-overview">
              <p>
                Bessblock Rectangular Paving Blocks are high-quality precast concrete paving units designed for a wide range of pedestrian, residential, commercial, and industrial applications. Manufactured using premium aggregates, cement, and controlled production processes, these paving blocks provide durable, aesthetically appealing, and cost-effective surfacing solutions.
              </p>
              <p style={{ marginTop: 'var(--spacing-4)' }}>
                These products are suitable where project designers want a clean, modern surface with reliable strength and a neat architectural finish. They also work well in spaces where low maintenance, easy replacement, and consistent appearance are important.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Built for performance" align="left" />
          <div className="rect-benefits-grid">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="rect-benefit-card">
                  <div className="rect-benefit-img">
                    <CheckCircle2 size={28} />
                  </div>
                  <div className="rect-benefit-body">
                    <p>{b.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Technical Range" title="Specifications at a glance" align="left" />
          <ScrollReveal><SpecSheet specs={techItems} /></ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Detailed Specifications" title="Sizes & performance data" align="left" />
          <div className="rect-specs-layout">
            <div className="rect-specs-groups">
              <ScrollReveal>
                <div className="rect-spec-group">
                  <h3 className="rect-spec-group-title">Standard sizes</h3>
                  <div className="rect-spec-items">
                    <div className="rect-spec-item">200mm x 100mm x 60mm</div>
                    <div className="rect-spec-item">200mm x 100mm x 80mm</div>
                    <div className="rect-spec-item">200mm x 100mm x 100mm</div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <div className="rect-spec-group">
                  <h3 className="rect-spec-group-title">Performance range</h3>
                  <div className="rect-spec-items">
                    <div className="rect-spec-item">Compressive strength: 25 MPa to 50 MPa depending on grade.</div>
                    <div className="rect-spec-item">Water absorption: Low to moderate depending on finish and cure.</div>
                    <div className="rect-spec-item">Surface tolerance: Suitable for pedestrian, commercial and domestic paving applications.</div>
                    <div className="rect-spec-item">Coverage: Approx. 50pcs per m²</div>
                    <div className="rect-spec-item">Pack quantity: Typically 600pcs per pallet depending on dimensions.</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div
              className="rect-specs-img"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1590674899484-d5640d0f7b3e?w=600&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <span>Dimension reference</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container">
          <div className="about-cta">
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>Need more information?</h2>
            <p className="about-cta-text" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Contact our team for technical specifications, pricing, and project-specific advice.
            </p>
            <div className="about-cta-actions">
              <AnimatedButton to="/contact" variant="yellow">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products/paving-blocks" variant="outline">View All Paving</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
