import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PavingIcon, WallingIcon, KerbIcon } from './CategoryIcons';
import { Grid3x3, LayoutGrid, ArrowRight } from 'lucide-react';
import productCategories from '../data/products';
import './ProductShowcase.css';

function ShieldIcon() {
  return <Grid3x3 size={28} />;
}

function SupportIcon() {
  return <LayoutGrid size={28} />;
}

function PatternBackground({ index }) {
  if (index === 0)
    return <div className="ps-pattern ps-pattern-dots" />;
  if (index === 1)
    return <div className="ps-pattern ps-pattern-lines" />;
  if (index === 2)
    return <div className="ps-pattern ps-pattern-grid" />;
  if (index === 3)
    return <div className="ps-pattern ps-pattern-cross" />;
  return <div className="ps-pattern ps-pattern-stripes" />;
}

const items = [
  {
    id: 'paving-blocks',
    title: productCategories[0].name,
    description: productCategories[0].description,
    subcategories: productCategories[0].subcategories.map(s => s.name),
    icon: PavingIcon,
    path: productCategories[0].path,
    color: '#404088',
  },
  {
    id: 'walling',
    title: productCategories[1].name,
    description: productCategories[1].description,
    subcategories: productCategories[1].subcategories.map(s => s.name),
    icon: WallingIcon,
    path: productCategories[1].path,
    color: '#4a4a8a',
  },
  {
    id: 'kerbs-edging',
    title: productCategories[2].name,
    description: productCategories[2].description,
    subcategories: productCategories[2].subcategories.map(s => s.name),
    icon: KerbIcon,
    path: productCategories[2].path,
    color: '#555599',
  },
  {
    id: 'quality',
    title: 'Quality Assurance',
    description: 'Every batch tested for strength, durability, and dimensional accuracy to exceed industry standards.',
    subcategories: ['Compressive Testing', 'Dimensional Verification', 'Durability Assessment'],
    icon: <ShieldIcon />,
    path: '/about/manufacturing',
    color: '#6060aa',
  },
  {
    id: 'support',
    title: 'Technical Support',
    description: 'Expert guidance on product selection, specification writing, and installation best practices.',
    subcategories: ['Product Specifications', 'Installation Guides', 'Project Consultation'],
    icon: <SupportIcon />,
    path: '/contact',
    color: '#6b6bb5',
  },
];

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const timers = items.map((_, i) =>
      setTimeout(() => setVisibleItems(prev => [...prev, i]), 180 * i)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="ps-container">
      <div className="ps-track">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const isVisible = visibleItems.includes(index);

          return (
            <motion.div
              key={item.id}
              className={`ps-card${isActive ? ' ps-card-active' : ''}`}
              initial={{ opacity: 0, x: -60 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={() => setActiveIndex(index)}
              style={{
                flex: isActive ? '7 1 0%' : '1 1 0%',
                minWidth: '60px',
                zIndex: isActive ? 10 : 1,
              }}
            >
              <div
                className="ps-card-bg"
                style={{ backgroundColor: isActive ? item.color : '#18181b' }}
              />
              <PatternBackground index={index} />
              <PatternBackground index={index + 5} />

              <div
                className="ps-card-shadow"
                style={{
                  bottom: isActive ? '0' : '-40px',
                  boxShadow: isActive
                    ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000'
                    : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000',
                }}
              />

              <div className="ps-label">
                <div className="ps-icon">{item.icon}</div>
                <div className="ps-info">
                  <div
                    className="ps-title"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(25px)',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="ps-desc"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(25px)',
                    }}
                  >
                    {isActive ? item.subcategories.join(' · ') : item.title}
                  </div>
                </div>
              </div>

              {isActive && (
                <motion.div
                  className="ps-actions"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Link to={item.path} className="ps-btn">View Range <span className="ps-btn-arrow"><ArrowRight size={12} /></span></Link>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
