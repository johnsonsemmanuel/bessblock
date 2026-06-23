import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CoverageCalculator from '../components/CoverageCalculator';
import '../components/CoverageCalculator.css';
import { PavingIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';

export default function PavingBlocks() {
  const cat = productCategories.find(c => c.id === 'paving-blocks');
  return (
    <>
      <SEO title="Paving Blocks" description="Explore Bessblock's range of concrete paving blocks including interlocking, rectangular, and hexagonal options for durable pavement surfaces." />
      <div className="page">
      <PageHero title="Paving Blocks" description={cat.description} bgImage="/images/hero/concrete-texture-1.webp" />
      <section className="section">
        <div className="container">
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
    </div>
    </>
  );
}
