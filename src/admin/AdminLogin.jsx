import { useState } from 'react';
import { AlertCircle, Lock } from 'lucide-react';
import { useAdminAuth } from './AdminAuth';
import './admin.css';

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login(pin)) {
      setError('Incorrect password. Please try again.');
      setPin('');
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login-bg" />
      <div className="admin-login-overlay" />
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <img src="/bessblocklogo.png" alt="Bessblock" />
        </div>
        <h1 className="admin-login-title">Admin Portal</h1>
        <p className="admin-login-sub">Sign in to manage your website content.</p>

        {error && (
          <div className="admin-login-error">
            <AlertCircle size={15} />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="admin-login-field">
            <label htmlFor="pin">Password</label>
            <input
              id="pin"
              type="password"
              placeholder="Enter admin password"
              value={pin}
              onChange={e => setPin(e.target.value)}
              autoFocus
              required
            />
          </div>
          <button type="submit" className="admin-login-btn">
            <Lock size={15} /> Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
