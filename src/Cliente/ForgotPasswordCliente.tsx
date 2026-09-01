import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Login.css';

function ForgotPasswordCliente() {
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    try {
      const response = await fetch('/api/recuperar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo }),
      });
      const data = await response.text();
      if (response.ok) setMensaje(data);
      else setError(data);
    } catch {
      setError('Error de conexión');
    }
  };

  return (
    <div className="glass-card">
      <h2 className="card-title">Recuperar Contraseña (Cliente)</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">Correo (Gmail):</label>
          <div className="input-box">
            <input type="email" required value={correo} onChange={(e) => setCorreo(e.target.value)} />
          </div>
        </div>
        {mensaje && <p style={{ color: 'green', textAlign: 'center' }}>{mensaje}</p>}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <button type="submit" className="submit-btn">Enviar instrucciones</button>
        <div style={{ marginTop: '15px' }}>
          <Link to="/cliente/login" className="card-link">Volver al inicio de sesión</Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordCliente;