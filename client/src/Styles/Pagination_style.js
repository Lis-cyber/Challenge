import styled from 'styled-components';


export const PaginationStyled = styled.div `

  display: flex; 
  justify-content: flex-end;
  margin-right: 3.5rem;


  .page-list{
    text-decoration: none;
    list-style: none;
    float: left;
    color: black;
    margin: 0.5rem;
    padding: 0.48rem 0.96rem;
    background-color: #ddd;
    border-radius: .6rem;
    border: none
  }

  .page-list a:active {
    background-color: #4CAF50;
    color: white;
    border-radius: 0.3rem;
  }

  .page-list:hover {
    background-color: rgb(235, 199, 145);
    border-radius: 0.3rem;
  }

`