import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image, ArrowRight } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ name, path, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link to={path} className="product-card">
        <div className="product-card-visual">
          <div className="product-card-icon">
            <Image size={32} />
          </div>
        </div>
        <div className="product-card-body">
          <h3 className="product-card-title">{name}</h3>
          <p className="product-card-desc">{description}</p>
          <span className="product-card-arrow">
            Explore
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
