import styled from "styled-components";

export const HomeStyled = styled.div`
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;

  img {
    //filter: blur(1px);
    -webkit-filter: blur(0px);
    width: 110%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .text {
    font-family: "Handlee", cursive;
    background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 70%;
    padding: 20px;
    text-align: center;
  }

  .link {
    font-size: 6rem;
    color: black;
  }
`;
