import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Login.css';

function CorreoCliente() {
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  // 1. Leer los datos que se guardaron temporalmente en el Registro
  const datos = JSON.parse(sessionStorage.getItem('datosRegistro') || '{}');

  // 2. Función para verificar si el correo está libre (sin guardar aún)
  const verificarCorreo = async () => {
    setError('');
    setMensaje('');

    try {
      const response = await fetch('/api/verificar-correo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: datos.correo }),
      });

      const data = await response.text();
      if (!response.ok) {
        setError(data || 'Este correo ya está registrado');
        return;
      }
      setMensaje(`Correo enviado a ${datos.correo}. Confirma si te ha llegado.`);
    } catch {
      setError('Error de conexión con el servidor');
    }
  };

  // 3. Función para GUARDAR EN LA BASE DE DATOS (solo al confirmar)
  const confirmarRegistro = async () => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos), // <- Enviamos los datos que estaban guardados
      });

      if (response.ok) {
        // Limpiar datos temporales
        sessionStorage.removeItem('datosRegistro');
        alert('¡Cuenta creada exitosamente!');
        window.location.href = '/cliente/login'; // Redirige al login
      } else {
        const errorData = await response.text();
        setError(errorData || 'Error al crear la cuenta');
      }
    } catch {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <div className="glass-card">
      <h2 className="card-title">Verificar Correo (Cliente)</h2>
      <p style={{ marginBottom: '15px' }}>
        Correo ingresado: <strong>{datos.correo || 'No se encontraron datos'}</strong>
      </p>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {mensaje && <p style={{ color: 'green', textAlign: 'center', marginBottom: '15px' }}>{mensaje}</p>}

      {/* Si aún no se ha enviado el correo, mostramos el botón de enviar */}
      {!mensaje ? (
        <button type="button" className="submit-btn" onClick={verificarCorreo}>Enviar correo</button>
      ) : (
        /* Si ya se envió, mostramos el botón de confirmar (aquí se guarda en BD) */
        <button type="button" className="submit-btn" onClick={confirmarRegistro}>Confirmar que ha llegado</button>
      )}

      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <Link to="/cliente/login" className="card-link">Volver al inicio</Link>
      </div>
    </div>
  );
}

export default CorreoCliente;