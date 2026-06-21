import { useRef, useState, useEffect } from 'react';

export default function LazyBackground({ src, className, children, style, ...props }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        backgroundImage: loaded ? `url(${src})` : 'none',
        backgroundColor: loaded ? undefined : 'var(--color-grey-900)',
        transition: 'background-image 0.3s ease',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
