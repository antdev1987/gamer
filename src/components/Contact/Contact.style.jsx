import styled from 'styled-components';
import { device } from '../../styles/Responsive';

export const Section = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${(props) => props.theme.color};
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  form {
    margin-top: 5rem;
    width: 100%;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.mobileL} {
      width: 70rem;
    }

    .flex {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      
      @media ${device.mobileL} {
        gap: 2rem;
        flex-wrap: nowrap;
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      margin: 1rem 0;
      background: none;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      resize: none;
      color: ${(props) => props.theme.color};

      &:focus {
        outline: none;
      }
    }
    textarea {
      margin-bottom: 5rem;
    }
  }
`;
