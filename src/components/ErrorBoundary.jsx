import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, marginBottom: 'var(--spacing-4)', color: 'var(--text)' }}>Something went wrong</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-6)', lineHeight: 1.7 }}>
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <Link to="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-2)',
              padding: 'var(--spacing-3) var(--spacing-6)', borderRadius: 8,
              background: 'var(--color-bessblock-blue)', color: '#fff',
              textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-sm)',
            }}>
              <Home size={18} />
              Go Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
