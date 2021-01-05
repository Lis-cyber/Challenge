import styled from "styled-components";

export const CartStyled = styled.div`
  font-family: "Patrick Hand SC", cursive;
  
  .test {
    position: sticky;
    top: 1rem;
  }

  .product-cart {
    display: flex;
    padding-bottom: 3rem;
    list-style-type: none;
    img {
      margin: auto;
      width: 6.25rem;
    }
  }

  .infoDiv {
    display: flex;
    padding-left: 0.6rem;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    div {
      margin: 0.2rem;
    }
  }

  .button-remove {
    padding-left: 1.5rem;
    padding-right: 2rem;
  }
  .total {
    font-size: 1.5rem;
  }
  .empty {
    font-size: 1.5rem;
  }
  .scroll {
    // Barra deslizable
    overflow-y: scroll;
    overflow-x: hidden;
    height: 45rem;
  }
`;
