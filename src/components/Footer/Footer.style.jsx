import styled from 'styled-components';
import { device } from '../../styles/Responsive';

export const SectionFooter = styled.footer`
  margin-top: 3rem;
  padding: 1rem 1rem;

  div {
    text-align: center;
    border-top: 1px solid ${(props) => props.theme.color};
    padding: 1rem 0;
    font-size: 1.5rem;

    @media ${device.mobileL}{
      font-size: 1rem;
    }
  }
`;
