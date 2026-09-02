import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { catalogoApi } from '../api/catalogo';
import type { Categoria } from '../types';

export function Home() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    catalogoApi.categoriasArbol().then(setCategorias).catch(() => setCategorias([]));
  }, []);

  return (
    <div>
      <section
        style={{
          background: 'linear-gradient(120deg, #e9f7f0, #eaf1ff)',
          borderRadius: 16,
          padding: '48px 32px',
          textAlign: 'center',
          marginBottom: 32,
        }}
      >
        <h1 style={{ fontSize: 30, marginBottom: 10 }}>Tu farmacia de confianza, a un clic</h1>
        <p style={{ color: 'var(--texto-suave)', maxWidth: 560, margin: '0 auto' }}>
          Medicamentos, dermocosmética y cuidado para toda la familia. Con registro sanitario y
          entrega a domicilio o retiro en botica.
        </p>
      </section>

      <h2 style={{ fontSize: 20, marginBottom: 16 }}>Explora por categoría</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 16,
        }}
      >
        {categorias.map((c) => (
          <Link
            key={c.id}
            to={`/categoria/${c.slug}`}
            style={{
              background: 'var(--blanco)',
              border: '1px solid var(--borde)',
              borderRadius: 12,
              padding: 20,
              fontWeight: 600,
              boxShadow: 'var(--sombra)',
            }}
          >
            {c.nombre}
            {c.subcategorias && c.subcategorias.length > 0 && (
              <span style={{ display: 'block', fontSize: 13, color: 'var(--texto-suave)', fontWeight: 400, marginTop: 4 }}>
                {c.subcategorias.map((s) => s.nombre).join(' · ')}
              </span>
            )}
          </Link>
        ))}
      </div>

      <p style={{ marginTop: 32, color: 'var(--texto-suave)', fontSize: 14 }}>
        El catálogo de productos y el carrito estarán disponibles en la próxima entrega.
      </p>
    </div>
  );
}
