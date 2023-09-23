import './footer.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Sol from '../sol/sol';

function Footer (){
    return(
        <footer className="seccion-oscura d-flex flex-column align-item-center justify-content-center">
        <Sol className="footer-logo" width="" />
        <p className="footer-texto text-center">Aprendo y creo todos los días<br />Contáctame</p>
        <div className="iconos-redes-sociales d-flex flex-wrap align-item-center justify-content-center">
          <a href="https://github.com/Sol-Andrada" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sol-milena-andrada-135218271/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:sol.lena.andrada@hotmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope"></i>
          </a>
          <a href="resources/Sol Milena Andrada.pdf" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-file-earmark-person-fill"></i>
          </a>
        </div>
        <div id="jihyo" className="jihyo flex-wrap align-item-center justify-content-center">
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/4Cyf87ul1le0xTWRFBoYd7?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <div className="derechos-de-autor align-item-center">Creado por Sol Andrada (2023) ©</div>
        </div>
      </footer>
        
    );
}

export default Footer