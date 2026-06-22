import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogPosts from '../data/blog';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import './Blog.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <SEO title="Blog Post" description="The article you're looking for doesn't exist." />
        <div className="page">
        <PageHero title="Post Not Found" description="The article you're looking for doesn't exist." bgImage="/images/hero/concrete-texture-2.webp" />
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <Link to="/insights/blog" className="blog-card-link" style={{ fontSize: 'var(--text-base)' }}>
              &larr; Back to Blog
            </Link>
          </div>
        </section>
      </div>
    </>
    );
  }

  return (
    <>
      <SEO
        title={post?.title || 'Blog Post'}
        description={post?.excerpt || ''}
        schema={{
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: `${window.location.origin}${post.image}`,
          datePublished: post.date,
          author: { '@type': 'Person', name: post.author },
          publisher: {
            '@type': 'Organization',
            name: 'Bessblock Concrete Products Ltd',
            logo: { '@type': 'ImageObject', url: 'https://bessblock.com/bessblocklogo.png' },
          },
        }}
      />
      <div className="page">
      <PageHero title="Blog" description={post.title} bgImage="/images/hero/concrete-texture-2.webp" />

      <section className="section">
        <div className="container blog-post">
          <Link to="/insights/blog" className="blog-post-back">
            &larr; Back to Blog
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={post.image}
              alt={post.imageAlt}
              className="blog-post-image"
            />

            <h1 className="blog-post-title">{post.title}</h1>

            <div className="blog-post-meta">
              <span>{post.date}</span>
              <span className="blog-card-cat">{post.category}</span>
              <span>By {post.author}</span>
            </div>

            {post.sections.map((section, i) => (
              <ScrollReveal key={i}>
                <div className="blog-post-section">
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.body && <p>{section.body}</p>}
                  {section.subs && section.subs.length > 0 && (
                    <ul>
                      {section.subs.map((sub, j) => (
                        <li key={j}>{sub}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </motion.article>
        </div>
      </section>
    </div>
    </>
  );
}
