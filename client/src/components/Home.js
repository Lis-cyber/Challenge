import { Link } from "react-router-dom";
import ShoppingPhoto from "../Styles/img/home.jpg";
import { HomeStyled } from "../Styles/Home_style";
import Footer from "./Footer";

// Este componente Home, se creó con el fin de mostrar una página principal al usuario, una imagen de fondo y un link para llevar al
// contenido de la página con sus funciones.
function Home() {
  return (
    <div>
      <HomeStyled>
        {/* Se utiliza Link, de react-router-dom, para hacer las conexiones entre las páginas a través de un link.
        El parámetro to, indica hacia donde debe redireccionar, en este caso, al hacerle click a Time to shop! lleva a /search */}
        <Link className="link" to="/search">
          <div className="text">
            <p>Time To Shop!</p>
            <h1>Lets Go!</h1>
          </div>
        </Link>
        <img src={ShoppingPhoto} alt="shoppingPhoto" />
      </HomeStyled>
      <Footer />
    </div>
  );
}

export default Home;