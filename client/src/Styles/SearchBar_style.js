import styled from 'styled-components';
import pexels from '../Styles/img/pexels-pixabay-45238.jpg'

export const SearchBarStyled = styled.div `
  * {
    box-sizing: border-box;
  }
  .searchBar {
    background-image: url(${pexels});
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    display: block;
    padding: 1rem;
    align-items: center;
  }

  .cssDeLaBarritaDeBusqueda {
    margin-right: 0.6rem;
  }

  .text {
    font-family: 'Handlee', cursive;
    font-weight: bold;
    float: left;
    color: black;
    font-size: 3rem;
  }
  .inputs {
    float: right;
  }
`