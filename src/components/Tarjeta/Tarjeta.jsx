import Boton from "../Botones/Botones";
import { infoTarjeta } from "./data";
const Tarjeta = () => (
  <>
  {infoTarjeta.map((contenidoTarjeta)=>(
  <div key={contenidoTarjeta.id} className="columna col-12 col-md-4"> 
  <i className={contenidoTarjeta.icono}></i>
 <p className="experiencia-titulo">{contenidoTarjeta.titulo}</p> 
 <p>{contenidoTarjeta.descripcion}</p>
 <Boton etiquetas={contenidoTarjeta.etiquetas} tarjetaId={contenidoTarjeta.id} />
  
</div>
  ))}
</>
)

export default Tarjeta; 
