import styled from "styled-components";

export const FooterStyled = styled.div`
  margin-top: 15rem;

  .footer {
    display: flex;
    padding-top: 1rem;
    width: 100%;
    background-color: #bdb7ab;
    color: white;
    text-align: center;
    font-family: "Bellota Text", cursive;
  }

  .used-technologies {
    display: flex;
    align-items: center;
    width: 50rem;
    padding-left: 4rem;
  }

  .list {
    display: flex;
    justify-content: center;
    padding-left: 2rem;
    width: 15rem;

    ul {
      padding-left: 1rem;
      width: 8rem;
      font-family: "Patrick Hand SC", cursive;
      font-size: 1.2rem;
      li {
        text-align: left;
        white-space: nowrap;
      }
    }
  }

  .container1 {
    flex-direction: column;
    width: 30rem;
  }

  .info-devs {
    display: grid;
    align-items: center;
    flex-grow: 2;
    margin: 1rem;

    div {
      padding-left: 1rem;
    }

    img {
      width: 2rem;
    }
  }

  .us {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Patrick Hand SC", cursive;
    font-size: 2rem;
    img {
      margin: 1rem;
    }
  }
`;
