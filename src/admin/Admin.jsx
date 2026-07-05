import { AdminAuthProvider, useAdminAuth } from './AdminAuth';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import { ToastProvider } from '../components/Toast';

function AdminGate() {
  const { authed } = useAdminAuth();
  return authed ? <AdminDashboard /> : <AdminLogin />;
}

export default function Admin() {
  return (
    <AdminAuthProvider>
      <ToastProvider>
        <AdminGate />
      </ToastProvider>
    </AdminAuthProvider>
  );
}
