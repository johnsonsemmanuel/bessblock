import './SpecSheet.css';

export default function SpecSheet({ specs, title, variant = 'full', columns = 2 }) {
  if (!specs || specs.length === 0) return null;

  if (variant === 'sidebar') {
    return (
      <div className="spec-sidebar">
        {title && <h3 className="spec-sidebar-title">{title}</h3>}
        <div className="spec-sidebar-items">
          {specs.map((spec, i) => (
            <div key={i} className="spec-sidebar-row">
              <span className="spec-sidebar-value">{spec.value}</span>
              <span className="spec-sidebar-label">{spec.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="spec-sheet">
      {title && <div className="spec-sheet-header"><span className="spec-sheet-accent" />{title}</div>}
      <div className={`spec-sheet-grid cols-${columns}`}>
        {specs.map((spec, i) => (
          <div key={i} className="spec-sheet-row">
            <span className="spec-sheet-label">
              {spec.icon && <span className="spec-sheet-label-icon">{spec.icon}</span>}
              {spec.label}
            </span>
            <span className="spec-sheet-value">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
