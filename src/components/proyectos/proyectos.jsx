import './proyectos.css'
import "bootstrap-icons/font/bootstrap-icons.css";
function Proyectos (){
    return (<section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
    <h2 className="seccion-titulo texto-negro">Mis proyectos recientes</h2>
    <h3 className="seccion-descripcion">Estos son algunos proyectos que he creado recientemente</h3>
    {/* Galeria de Proyectos */}
    <div className="container text-center proyectos-contenedor">
      <div className="row">
        {/* Proyecto 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="proyecto">
            <img src="src/assets/proyecto sol.png" alt="proyecto 1" />
            <div className="overlay">
              <p>Mi primer portfolio</p>
              <div className="iconos-contenedor">
                <a href="https://github.com/Sol-Andrada/sol-andrada.github.io" target="_blank" rel="noopener noreferrer"> 
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://sol-andrada.github.io" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Proyecto 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="proyecto">
            <img src="src/assets/proyecto2.png" alt="proyecto 1" />
            <div className="overlay">
              <p>Proximamente</p>
              <div className="iconos-contenedor">
                <a href="" target="_blank" rel="noopener noreferrer"> 
                  <i className="bi bi-github"></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Proyecto 3 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="proyecto">
            <img src="src/assets/proyecto2.png" alt="proyecto 1" />
            <div className="overlay">
              <p>Proximamente</p>
              <div className="iconos-contenedor">
                <a href="" target="_blank" rel="noopener noreferrer"> 
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.freecodecamp.org/espanol/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Proyectos