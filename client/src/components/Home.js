import React from "react";
import {
  Link
} from "react-router-dom";

import ShoppingPhoto from '../Styles/img/home.jpg'
import { HomeStyled } from '../Styles/Home_style'

function Home() {


  return (
    <HomeStyled>
      <Link className="link" to = "/search">
        <div className="text">
          <p>Time To Shop!</p>
          <h1>Lets Go!</h1>
        </div>
      </Link>
      <img src = {ShoppingPhoto} alt = "shoppingPhoto" />
      {/* link a features, y al clickear, se vaya al componente Features */}
    </HomeStyled>
  )
}

export default Home;