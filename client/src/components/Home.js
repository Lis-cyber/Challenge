// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Features from './Features';
import ShoppingPhoto from '../Styles/img/home.jpg'
// Aca solo habra un link a la pagina de filtros y search y productos
// y el diseño aca de la pagina principal
import { HomeStyled } from '../Styles/Home_style'
import SearchBar from "./SearchBar"


function Home({onSearch}) {
  return (
    <HomeStyled>
      {/* <SearchBar className="homeBar" /> */}
      
      {/* <img src = {ShoppingPhoto} alt = "shoppingPhoto" /> */}
      {/* link a features, y al clickear, se vaya al componente Features */}
      <Features />
    </HomeStyled>
  )
}

export default Home;