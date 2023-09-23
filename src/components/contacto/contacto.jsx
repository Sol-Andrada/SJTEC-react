import './contacto.css'
function Contacto (){
    return(
        <section id="contacto" className="contacto seccion-oscura">
  <div className="container">
    <div className="container text-center rectangulo d-flex justify-content-evenly">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="gatito">
            <img src="src/assets/mochi-peach.gif" alt="gatogif" />
          </div>
        </div>
        <div className="col-12 col-md-4 descripcion">
          Espacio para michis
        </div>
        <div className="col-12 col-md-4">
          {/* <a href="mailto:sol.lena.andrada@hotmail.com">
            <button type="button">
              Contacto
              <i className="bi bi-envelope-check-fill"></i>
            </button>
          </a> */}
          <div className="gatito">
            <img src="src/assets/busy-cat.gif" alt="gatogif" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Contacto