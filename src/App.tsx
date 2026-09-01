import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginCliente from './Cliente/LoginCliente';
import LoginAdmin from './Admin/LoginAdmin';
import RegisterCliente from './Cliente/RegisterCliente';
import RegisterAdmin from './Admin/RegisterAdmin';
import ForgotPasswordCliente from './Cliente/ForgotPasswordCliente';
import ForgotPasswordAdmin from './Admin/ForgotPasswordAdmin';
import CorreoCliente from './Cliente/CorreoCliente';
import CorreoAdmin from './Admin/CorreoAdmin';
import HomeCliente from './Cliente/HomeCliente';
import HomeAdmin from './Admin/HomeAdmin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas para Cliente */}
        <Route path="/cliente/login" element={<LoginCliente />} />
        <Route path="/cliente/register" element={<RegisterCliente />} />
        <Route path="/cliente/verificar-correo" element={<CorreoCliente />} />
        <Route path="/cliente/forgot-password" element={<ForgotPasswordCliente />} />
        <Route path="/home-cliente" element={<HomeCliente />} />

        {/* Rutas para Administrador */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/admin/verificar-correo" element={<CorreoAdmin />} />
        <Route path="/admin/forgot-password" element={<ForgotPasswordAdmin />} />
        <Route path="/home-admin" element={<HomeAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;