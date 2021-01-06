import { Link } from "react-router-dom";
import ShoppingPhoto from "../Styles/img/home.jpg";
import { HomeStyled } from "../Styles/Home_style";

function Home() {
  return (
    <div>
      <HomeStyled>
        <Link className="link" to="/search">
          <div className="text">
            <p>Time To Shop!</p>
            <h1>Lets Go!</h1>
          </div>
        </Link>
        <img src={ShoppingPhoto} alt="shoppingPhoto" />
      </HomeStyled>
    </div>
  );
}

export default Home;