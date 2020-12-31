import styled from 'styled-components';

export const HomeStyled = styled.div `
 
    img {
        filter: blur(2px);
        -webkit-filter: blur(2px);
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .homeBar {
        background-color: black;
    }

    .text {
        font-family: 'Handlee', cursive;
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
        color: white;
        font-weight: bold;
        border: 3px solid #f1f1f1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        width: 80%;
        padding: 20px;
        text-align: center;

    }
    .link {
        font-size: 8rem;
        color: black;

    }
`