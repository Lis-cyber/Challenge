import styled from 'styled-components';

export const FeaturesStyled = styled.div `

    .content {
        display: flex;
        flex-wrap: wrap;
    }
  
    .main {
        flex: 3 60rem;
    }

    .sidebar {
        flex: 1 20rem;
        display: flex;
    }

    .product-cart {
        display: flex;
        padding-bottom: 3rem;
        list-style-type: none;
    }

    .infoDiv {
        display: flex;
        padding-left: 0.6rem;
        align-items: center;
    }

    .button-remove {
        padding-left: 1.8rem;
    }
`