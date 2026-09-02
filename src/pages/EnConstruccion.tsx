export function EnConstruccion({ titulo }: { titulo: string }) {
  return (
    <div style={{ textAlign: 'center', padding: '64px 16px' }}>
      <h1 style={{ fontSize: 24, marginBottom: 8 }}>{titulo}</h1>
      <p style={{ color: 'var(--texto-suave)' }}>Esta sección estará disponible en la próxima entrega.</p>
    </div>
  );
}

export function Nosotros() {
  return (
    <div style={{ maxWidth: 700 }}>
      <h1 style={{ fontSize: 26, marginBottom: 16 }}>Sobre FarmaSol</h1>
      <p style={{ marginBottom: 12 }}>
        FarmaSol es una farmacia y botica comprometida con el acceso a medicamentos de calidad. Todos
        nuestros productos cuentan con registro sanitario.
      </p>
      <p>
        Puedes recibir tu pedido a domicilio o retirarlo en cualquiera de nuestras sedes. Para
        productos que requieren receta, deberás presentarla al momento de la entrega.
      </p>
    </div>
  );
}
