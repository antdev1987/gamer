import styled from 'styled-components';

import { device } from '../../styles/Responsive';

export const Section = styled.section`
  margin-top: 5rem;

  main {
    margin-top: 2rem;
    font-size: 2rem;
    line-height: 4rem;
    position: relative;

    svg {
      margin: 2rem 2rem;
      margin-bottom: 0;
      font-size: 3rem;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
    }

    .red {
      color: ${(props) => props.theme.colors.primary};
      text-align: center;
    }

    img {
      height: 50rem;
      width: 100%;
      object-fit: cover;

      @media ${device.tablet}{
        height: 100%;
      }
    }
  }
`;
