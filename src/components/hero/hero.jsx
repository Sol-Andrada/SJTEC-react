import './hero.css'
function Hero (){
    return(
        <>
    <section id="hero" className="hero align-items-stretch">
    <div className="hero-principal d-flex flex-column justify-content-center align-item-center">
      <img className="hero-imagen-desarrollador rounder-circle" src="src/assets/fotiscaris.jpg" alt="foto de mi carita" />
      <h1 className="saludo">HOLA, SOY SOL ANDRADA</h1>
      <h2 className="saludo2">Estudiante de desarrollo de software | apasionada por el desarrollo web y sistemas</h2>
    </div> 
    <div className="hero-inferior">
      <img className="hero-inferior-imagen img-fluid" src="src/assets/Pair programming Customizable Isometric Illustrations _ Amico Style.png" alt="Monitor, Laptop, logos de HTML, CSS, JavaScript y React" />
    </div>
  </section>
  
  
  </>
  );
}

export default Hero