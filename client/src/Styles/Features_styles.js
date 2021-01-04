import styled from 'styled-components';

export const FeaturesStyled = styled.div `
    //margin-bottom: 10rem;
    .content {
        display: flex;
        flex-wrap: wrap;
        font-family: 'Roboto', sans-serif; 
    }
  
    .main {
        flex: 3 55rem;
        .notFound {
            font-family: 'Handlee', cursive;
            font-size: 3rem;
            text-align: center;
            z-index: 2;
        }
        .error {
            horizontal-align: right;
            margin-left: 24rem;
          }
    }

    .sidebar {
        flex: 1 25rem;
        display: flex;
    }

    .Filter_Categories {
        display: flex;
    }
    .list {
        z-index: 2;
    }

`