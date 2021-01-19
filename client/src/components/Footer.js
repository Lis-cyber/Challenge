import githubLogo from "../Styles/img/GitHub-Mark-64px.jpg";
import { FooterStyled } from "../Styles/Footer_style";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer">
        <div className="used-technologies">
          <b>Tecnologías ocupadas:</b>
          <div className="list">
            <ul>
              <li>React</li>
              <ul>
                <li>Axios</li>
                <li>styled-components</li>
              </ul>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>Express</li>
              <ul>
                <li>CORS</li>
              </ul>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div className="container1">
          <div className="info-devs">
            <b>Trabajo realizado por: </b>
            <div className="us">
              Lisbeth
              <a href="https://github.com/Lis-cyber" target="_blank" rel="noreferrer">
                <img src={githubLogo} alt="lis" />
              </a>
              Sixto
              <a href="https://github.com/sacunap" target="_blank" rel="noreferrer">
                <img src={githubLogo} alt="sixto" />
              </a>
            </div>
            <p>
              Este trabajo consiste en construir un Front-End y un Back-End que
              interactúa con la API de mercadolibre.
            </p>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}

export default Footer;