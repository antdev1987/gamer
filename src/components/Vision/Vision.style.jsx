import styled from 'styled-components';
import { device } from '../../styles/Responsive';

export const VisionStyled = styled.section`
  margin-top: 3rem;

  .title {
    margin: 5rem 0 0 0;
  }
  p {
    color: ${(props) => props.theme.color};
    font-size: 1.5rem;
    margin-top: 1rem;
    text-transform: lowercase;
  }

`;

export const VisionFlex = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 185rem;
  gap: 2rem;
  margin-top: -10%;

  @media ${device.mobileL} {
    flex-direction: row;
    height: 170rem;
  }

  .flex {
    flex: 1;
    align-self: center;
    color: ${props => props.theme.colors.white};


    @media ${device.mobileL}{
      color: ${props => props.theme.color};
    }
    div {
      margin: 8rem 0;
      text-align: center;
      padding: 1rem 5rem;

      @media ${device.mobileL}{
      padding: 0 5rem;
      }

      section {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.7rem;
        margin-bottom: 2rem;
        line-height: 3rem;
        padding: 0 2rem;

        @media ${device.mobileL} {
          font-size: 1.4rem;
        }
      }

      svg {
        font-size: 5rem;
      }
    }
  }
`;

export const ImgBox = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  margin: 0 auto;
  top: 0;
  flex: 1;
  position: sticky;
  object-fit: cover;
  z-index: -1;

  img {
    margin-top: 10rem;
    height: 80%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 1.5rem black;

    @media ${device.mobileL} {
      height: 70%;
    }
  }
`;

