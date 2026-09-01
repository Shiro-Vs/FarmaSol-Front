import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Login.css';

function RegisterCliente() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');

    // 1. Guardar TODOS los datos temporalmente en sessionStorage
    const datos = { nombre, apellido, usuario, correo, password, rol: 'cliente' };
    sessionStorage.setItem('datosRegistro', JSON.stringify(datos));

    // 2. Redirigir a la página de verificación de correo
    navigate('/cliente/verificar-correo');
  };

  return (
    <div className="glass-card" style={{ maxHeight: '85vh', overflowY: 'auto', padding: '30px 25px' }}>
      <h2 className="card-title">Registro de Cliente</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">Nombre:</label>
          <div className="input-box">
            <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Apellido:</label>
          <div className="input-box">
            <input type="text" required value={apellido} onChange={(e) => setApellido(e.target.value)} />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Usuario:</label>
          <div className="input-box">
            <input type="text" required value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Correo (Gmail):</label>
          <div className="input-box">
            <input type="email" required value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="tucorreo@gmail.com" />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Contraseña:</label>
          <div className="input-box">
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Repetir Contraseña:</label>
          <div className="input-box">
            <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </div>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <button type="submit" className="submit-btn">Registrarme</button>

        <div style={{ marginTop: '15px', textAlign: 'center' }}>
          <Link to="/cliente/login" className="card-link">¿Ya tienes cuenta?</Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterCliente;