import styled from 'styled-components';

export const FilterStyled = styled.div `
    display: inline-block;
    justify-content: flex-start;
    align-items: center;
    .all {
        display: flex;
        margin: 0;
    }
    
    .order {
        display: flex;
        align-items: center;
        margin-left: 1rem;
    }
    select {
        background-color: rgb(241, 227, 227);
        padding: 0.6rem;
        border-radius: 0.5rem;
        margin: 1rem;
        margin-top: 0;
        border: 0.05rem solid #DDD;
        box-shadow: 0.3rem 0.3rem 0.5rem #AAA;
        display: flex;
    }
    .input {
        text-transform: capitalize;
    }
    .results {
        font-family: 'Bellota', cursive;
        margin-left: 1.2rem;
    }
    
`