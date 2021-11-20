import styled from 'styled-components';

import back from './img/valor.jpg';

export const HeaderStyled = styled.header`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${back}) center center / cover;
  height: 60vh;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  h3 {
    font-size: 5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  h4 {
    font-size: 3rem;
    font-weight: 300;
  }

  p {
    font-size: 2rem;
  }
`;
