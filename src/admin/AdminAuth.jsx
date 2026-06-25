import { createContext, useContext, useState } from 'react';

const AuthCtx = createContext(null);

// Simple PIN-based auth stored in sessionStorage
const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN || 'bessblock2026';

export function AdminAuthProvider({ children }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('admin_authed') === '1');

  const login = (pin) => {
    if (pin === ADMIN_PIN) {
      sessionStorage.setItem('admin_authed', '1');
      setAuthed(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('admin_authed');
    setAuthed(false);
  };

  return <AuthCtx.Provider value={{ authed, login, logout }}>{children}</AuthCtx.Provider>;
}

export const useAdminAuth = () => useContext(AuthCtx);
