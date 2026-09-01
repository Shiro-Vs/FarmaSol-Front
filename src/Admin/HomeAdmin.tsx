import { Link } from 'react-router-dom';

function HomeAdmin() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <h1>Bienvenido, Administrador</h1>
      <p>Estás en el panel de control. Aquí puedes gestionar la farmacia.</p>
      <Link to="/admin/login" style={{ color: '#2ea471' }}>Cerrar Sesión</Link>
    </div>
  );
}
export default HomeAdmin;