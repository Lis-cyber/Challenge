import styled from 'styled-components';

export const FilterStyled = styled.div `
    display: inline-block;
    justify-content: flex-start;
    align-items: center;
    .all {
        display: flex;
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
        border: 0.05rem solid #DDD;
        box-shadow: 0.3rem 0.3rem 0.5rem #AAA;
        display: flex;
    }
    .input {
        text-transform: capitalize;
    }
    .results {
        margin:1rem;
        display: flex;
        justify-content: flex-start;
        font-family: 'Bellota', cursive;
    }
    
    .send {
        background-color: rgb(241, 227, 227);
        padding: 0.6rem;
        border-radius: 0.5rem;
        margin-left: 2rem;
        margin-bottom: 0.35rem;
        border: 0.05rem solid #DDD;
        box-shadow: 0.3rem 0.3rem 0.5rem #AAA;
        vertical-align: bottom
        
    }
    `