import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './AnimatedButton.css';

export default function AnimatedButton({ to, children, variant = 'primary', size = 'md', className = '' }) {
  const Tag = to ? Link : 'button';
  return (
    <Tag to={to} className={`abtn abtn-${variant} abtn-${size} ${className}`}>
      <span className="abtn-text">{children}</span>
      <span className="abtn-icon">
        <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Tag>
  );
}
