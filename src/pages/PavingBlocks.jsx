import PageHero from '../components/PageHero';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CoverageCalculator from '../components/CoverageCalculator';
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-6)' }}>
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
          <SectionTitle title="Coverage Calculator" label="Estimate quantity" />
          <CoverageCalculator />
        </div>
      </section>
    </div>
    </>
  );
}
