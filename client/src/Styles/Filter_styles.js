import styled from 'styled-components';

export const FilterStyled = styled.div `

    display: flex;
    justify-content: flex-start;
    margin-top: 0.6rem;

    .order{
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
    .input{
        text-transform: capitalize;
    }
    .results{
        margin:1rem;
    }
`