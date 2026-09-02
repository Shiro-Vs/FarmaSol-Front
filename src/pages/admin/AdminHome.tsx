import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

export function AdminHome() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', padding: '32px 24px', maxWidth: 1000, margin: '0 auto' }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 32,
        }}
      >
        <h1 style={{ fontSize: 22 }}>
          Panel FarmaSol{' '}
          <span style={{ fontSize: 13, color: 'var(--texto-suave)', fontWeight: 400 }}>
            · {user?.rol}
          </span>
        </h1>
        <button
          className="btn-primario"
          style={{ background: 'var(--rojo)' }}
          onClick={() => {
            logout();
            navigate('/admin/login');
          }}
        >
          Cerrar sesión
        </button>
      </header>

      <p style={{ color: 'var(--texto-suave)' }}>
        Bienvenido, {user?.nombres}. La gestión de productos, categorías, promociones, pedidos y
        reportes estará disponible en la próxima entrega.
      </p>
    </div>
  );
}
