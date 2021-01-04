import styled from "styled-components";
import pexels from "../Styles/img/menu3.jpg";

export const SearchBarStyled = styled.div`
  .searchBar {
    display: block;
    text-align: center;
    background-image: url(${pexels});
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    padding: 2rem;
    font-family: "Handlee", cursive;
  }

  .text {
    font-weight: bold;
    float: left;
    color: black;
    font-size: 3rem;
    overflow: hidden;
  }
  .text1 {
    font-weight: bold;
    float: left;
    color: black;
    font-size: 1.5rem;
    overflow: hidden;
  }

  .form {
    overflow: hidden;
    padding: 1rem;
    input {
      border-radius: 0.4rem;
      border-color: white;
      float: right;
      margin-right: 0.6rem;
      font-size: 1rem;
      padding: 0.1rem;
    }
  }
`;