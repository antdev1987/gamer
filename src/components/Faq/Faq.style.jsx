import styled from 'styled-components';
import { device } from '../../styles/Responsive';

export const Acordion = styled.main`
  margin-top: 5rem;

  section {
    transition: all 1s;
  }
`;

export const BoxAcordion = styled.div`
  &::first-letter {
    text-transform: capitalize;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.color};
    padding: 1rem 2rem;
  }

  .content {
    max-height: 0;
    transition: all 0.1s;
    overflow: hidden;
    font-size: 2rem;
    padding: 0rem 2rem;
    text-transform: lowercase;

    @media ${device.mobileL} {
      font-size: 1.5rem;
    }
  }

  .content.show {
    height: auto;
    max-height: 9999px;
    transition: all 0.3s;
    border-bottom: 1px solid ${(props) => props.theme.color};
    padding: 1rem 2rem;
  }
`;
