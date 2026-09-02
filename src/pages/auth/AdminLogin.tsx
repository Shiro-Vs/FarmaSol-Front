import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { mensajeDeError } from '../../api/client';
import './Auth.css';

export function AdminLogin() {
  const { loginPersonal } = useAuth();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setCargando(true);
    try {
      await loginPersonal(usuario.trim(), password);
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(mensajeDeError(err, 'Usuario o contraseña incorrectos'));
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="auth-page auth-page--plain">
      <div className="auth-card auth-card--wide" style={{ maxWidth: 420 }}>
        <h1 className="auth-brand" style={{ fontSize: 32 }}>
          FarmaSOL
        </h1>
        <h2 className="auth-title">Acceso Personal</h2>

        <form onSubmit={onSubmit}>
          {error && <div className="form-error">{error}</div>}

          <div className="auth-field">
            <label htmlFor="usuario">Usuario</label>
            <input
              id="usuario"
              type="text"
              autoComplete="username"
              required
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-submit" disabled={cargando}>
            {cargando ? 'Ingresando…' : 'Ingresar'}
          </button>
        </form>

        <div className="auth-links">
          <p>
            <Link to="/login">← Volver a la tienda</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
