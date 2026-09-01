import { Link } from 'react-router-dom';

function HomeCliente() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <h1>Bienvenido, Cliente</h1>
      <p>Estás en la tienda. Aquí puedes ver los productos.</p>
      <Link to="/cliente/login" style={{ color: '#2ea471' }}>Cerrar Sesión</Link>
    </div>
  );
}
export default HomeCliente;