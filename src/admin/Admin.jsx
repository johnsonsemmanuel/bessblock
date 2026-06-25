import { AdminAuthProvider, useAdminAuth } from './AdminAuth';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

function AdminGate() {
  const { authed } = useAdminAuth();
  return authed ? <AdminDashboard /> : <AdminLogin />;
}

export default function Admin() {
  return (
    <AdminAuthProvider>
      <AdminGate />
    </AdminAuthProvider>
  );
}
