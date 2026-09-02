import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import { RequireAuth, RequireStaff } from './auth/RequireAuth';
import { PublicLayout } from './layout/PublicLayout';
import { Home } from './pages/Home';
import { EnConstruccion, Nosotros } from './pages/EnConstruccion';
import { Login } from './pages/auth/Login';
import { Registro } from './pages/auth/Registro';
import { AdminLogin } from './pages/auth/AdminLogin';
import { AdminHome } from './pages/admin/AdminHome';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Autenticación (sin layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Tienda pública */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/categoria/:slug" element={<EnConstruccion titulo="Categoría" />} />
            <Route path="/buscar" element={<EnConstruccion titulo="Resultados de búsqueda" />} />
            <Route path="/carrito" element={<EnConstruccion titulo="Mi carrito" />} />

            {/* Solo cliente autenticado */}
            <Route
              path="/mis-pedidos"
              element={
                <RequireAuth>
                  <EnConstruccion titulo="Mis pedidos" />
                </RequireAuth>
              }
            />
            <Route
              path="/mi-perfil"
              element={
                <RequireAuth>
                  <EnConstruccion titulo="Mi perfil" />
                </RequireAuth>
              }
            />
          </Route>

          {/* Panel interno */}
          <Route
            path="/admin"
            element={
              <RequireStaff>
                <AdminHome />
              </RequireStaff>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
