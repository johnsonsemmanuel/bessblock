import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ post, index }) {
  const { slug, title, excerpt, image, imageAlt, date, category, author, readTime } = post;
  const authorName = author || 'Bessblock Team';
  const authorInitial = authorName[0];
  const readTimeStr = readTime || '5 min read';

  return (
    <motion.article
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index || 0) * 0.1 }}
    >
      <div className="blog-card-image-wrap">
        <img
          src={image}
          alt={imageAlt || title}
          className="blog-card-image"
          loading="lazy"
        />
        <div className="blog-card-overlay" />
        {category && (
          <div className="blog-card-tags">
            <span className="blog-card-tag">{category}</span>
          </div>
        )}
        <Link to={`/insights/blog/${slug}`} className="blog-card-hover-btn" tabIndex={-1}>
          <ArrowRight size={16} />
          Read Article
        </Link>
      </div>
      <div className="blog-card-body">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-excerpt">{excerpt}</p>
        <div className="blog-card-footer">
          <div className="blog-card-author">
            <span className="blog-card-avatar">{authorInitial}</span>
            <div className="blog-card-author-info">
              <span className="blog-card-author-name">{authorName}</span>
              <span className="blog-card-date">{date}</span>
            </div>
          </div>
          <div className="blog-card-readtime">
            <Clock size={12} />
            <span>{readTimeStr}</span>
          </div>
        </div>
        <Link to={`/insights/blog/${slug}`} className="blog-card-link">
          Read Article &rarr;
        </Link>
      </div>
    </motion.article>
  );
}
