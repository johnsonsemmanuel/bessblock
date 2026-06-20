import PageHero from '../components/PageHero';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { PavingIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';

export default function PavingBlocks() {
  const cat = productCategories.find(c => c.id === 'paving-blocks');
  return (
    <div className="page">
      <PageHero title="Paving Blocks" description={cat.description} bgImage="/images/products/interlocking-paving-1.jpg" />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-6)' }}>
              {[
                { ...cat.subcategories[0], image: '/images/products/interlocking-paving-1.jpg' },
                { ...cat.subcategories[1], image: '/images/products/rectangular-paving-1.jpg' },
                { ...cat.subcategories[2], image: '/images/products/hexagonal-paving-blocks-1.png' },
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
    </div>
  );
}
