import { infoTarjeta } from "../Tarjeta/data";

const Boton = ({ etiquetas, tarjetaId }) => {
  
  const etiquetasFiltradas = etiquetas.filter((etiqueta) => etiqueta.tarjetaId === tarjetaId);

  return (
    <div className="badges-contenedor">
      {etiquetasFiltradas.map((etiqueta) => (
        <span key={etiqueta.id} className="badge">
          {etiqueta.contenido}
        </span>
      ))}
    </div>
  );
};

export default Boton;
