import styled from 'styled-components';

export const ProductCardStyled = styled.div `

  display: flex;
  flex-grow: 1;

  .card-body {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-height: 17rem; 
    min-height: 17rem;   
    p {
      flex-grow: 1;
    }
  }
  
  .card {
    display: flex;
    padding: 0.6rem;
    border-radius: 0.5rem;
    margin: 2rem;
    flex-direction: column;
    border: 0.1rem solid #DDD;
    box-shadow: 0.3rem 0.3rem 0.5rem #AAA;
    transition: transform 0.5s;
    width: 18rem
  }
  
  .card-title {
    display: flex;
    text-align: center;
  }
  
  .card:hover {
    transform: scale(1.1);
  }
  
  .card-text {
    display: flex;
    justify-content: center;
    margin: 0.2rem;
  }

  .card-img {
    margin: auto;
    width: 9rem;
    padding-top: 2rem;
    cursor: pointer;
  }

  .buttonAdd {
    border-radius: 0.24rem;
    background-color: #6495ED;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 0.6rem;
    padding: 0.6rem;
    width: 6rem;
    transition: all 0.5s;
    cursor: pointer;
    margin: 0.3rem;
  }
  
  .buttonAdd span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  
  .buttonAdd span:after {
    content: '\0bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -1.2rem;
    transition: 0.5s;
  }
  
  .buttonAdd:hover span {
    padding-right: 0.9rem;
  }
  
  .buttonAdd:hover span:after {
    opacity: 1;
    right: 0;
  } 
`