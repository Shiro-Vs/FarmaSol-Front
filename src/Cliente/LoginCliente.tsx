import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Login.css';

function LoginCliente() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, password }),
      });

      const data = await response.json();

      if (data.success) {
        if (data.rol === 'Admin') {
          navigate('/home-admin'); // Si un admin entra por aquí, lo mandamos a su home
        } else {
          navigate('/home-cliente');
        }
      } else {
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <div className="glass-card">
      <h2 className="card-title">Iniciar Sesión (Cliente)</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label" htmlFor="user">Ingrese su usuario:</label>
          <div className="input-box">
            <img src="/src/assets/agregar-usuario.png" className="field-icon" alt="Usuario" />
            <input type="text" id="user" required autoComplete="username" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="password">Contraseña:</label>
          <div className="input-box">
            <img src="/src/assets/llave-de-casa.png" className="field-icon" alt="Contraseña" />
            <input type="password" id="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>{error}</p>}

        <div className="links-group">
          <Link to="/cliente/forgot-password" className="card-link">¿Olvidaste tu contraseña?</Link>
          <Link to="/cliente/register" className="card-link">Registrarse como Cliente</Link>
        </div>

        <button type="submit" className="submit-btn">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginCliente;