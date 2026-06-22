import { useState } from 'react';
import { Calculator, RefreshCw } from 'lucide-react';

const presetProducts = [
  { label: 'Interlocking Paving (60mm)', unit: 'blocks', coverage: 17, unitLabel: 'blocks' },
  { label: 'Interlocking Paving (80mm)', unit: 'blocks', coverage: 17, unitLabel: 'blocks' },
  { label: 'Rectangular Paving', unit: 'blocks', coverage: 17, unitLabel: 'blocks' },
  { label: 'Hexagonal Paving', unit: 'blocks', coverage: 17, unitLabel: 'blocks' },
  { label: 'Hollow Concrete Blocks', unit: 'blocks', coverage: 17, unitLabel: 'blocks' },
  { label: 'Solid Concrete Blocks', unit: 'blocks', coverage: 17, unitLabel: 'blocks' },
  { label: 'Ceiling Blocks', unit: 'blocks', coverage: 17, unitLabel: 'blocks' },
  { label: 'Road Kerbs', unit: 'lin', coverage: 4, unitLabel: 'linear metres per kerb' },
  { label: 'Garden Kerbs', unit: 'lin', coverage: 4, unitLabel: 'linear metres per kerb' },
];

export default function CoverageCalculator({ className = '' }) {
  const [product, setProduct] = useState(presetProducts[0].label);
  const [area, setArea] = useState('');
  const [result, setResult] = useState(null);

  const selected = presetProducts.find(p => p.label === product) || presetProducts[0];

  const handleCalc = (e) => {
    e.preventDefault();
    const a = parseFloat(area);
    if (!a || a <= 0) return;

    const qty = a * selected.coverage;
    setResult({
      area: a,
      qty: Math.ceil(qty),
      unit: selected.unitLabel,
    });
  };

  const handleReset = () => {
    setArea('');
    setResult(null);
  };

  return (
    <div className={`cc-card ${className}`} style={{
      padding: 'var(--spacing-6)', borderRadius: 16,
      background: 'var(--bg-section)', border: '1px solid var(--border)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <Calculator size={20} style={{ color: 'var(--color-bessblock-blue)' }} />
        <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)' }}>
          Coverage Calculator
        </h3>
      </div>

      <form onSubmit={handleCalc} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 4, display: 'block' }}>
            Product
          </label>
          <select
            value={product}
            onChange={e => { setProduct(e.target.value); setResult(null); }}
            style={{
              width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)',
              fontSize: 14, fontFamily: 'inherit', outline: 'none',
              background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer',
            }}
          >
            {presetProducts.map(p => (
              <option key={p.label} value={p.label}>{p.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 4, display: 'block' }}>
            Area (m²)
          </label>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="number"
              value={area}
              onChange={e => setArea(e.target.value)}
              placeholder="e.g. 50"
              min="0"
              step="0.1"
              required
              style={{
                flex: 1, padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)',
                fontSize: 14, fontFamily: 'inherit', outline: 'none',
                background: 'var(--bg)', color: 'var(--text)',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '10px 18px', borderRadius: 8, border: 'none',
                background: 'var(--color-bessblock-blue)', color: '#fff',
                fontSize: 14, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'background var(--transition-fast)',
              }}
            >
              Calculate
            </button>
          </div>
        </div>
      </form>

      {result && (
        <div style={{
          marginTop: 16, padding: 14, borderRadius: 10,
          background: 'var(--bg)', border: '1px solid var(--color-bessblock-blue)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 2 }}>
                For {result.area}m² of {product.toLowerCase()}
              </p>
              <p style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-bessblock-blue)' }}>
                ~{result.qty.toLocaleString()}
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                {result.unit} needed
              </p>
            </div>
            <button
              onClick={handleReset}
              aria-label="Reset calculator"
              style={{
                padding: 6, borderRadius: 6, border: '1px solid var(--border)',
                background: 'none', cursor: 'pointer', color: 'var(--text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'color var(--transition-fast)',
              }}
            >
              <RefreshCw size={14} />
            </button>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8, lineHeight: 1.5 }}>
            This is an estimate. Actual quantities may vary depending on layout, cutting waste, and site conditions. Add 5-10% for wastage.
          </p>
        </div>
      )}
    </div>
  );
}
