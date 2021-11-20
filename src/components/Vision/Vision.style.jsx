import styled from 'styled-components';

export const VisionStyled = styled.section`
  margin-top: 3rem;

  .title {
    margin: 5rem 0 0 0;
  }
`;

export const VisionFlex = styled.div`
  display: flex;
  position: relative;
  height: 170rem;
  gap: 2rem;
  margin-top: -10%;

  .flex {
    flex: 1;
    align-self: center;

    div {
      height: 20rem;
      margin: 8rem 0;
      text-align: center;
      padding: 0 5rem;

      section {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.4rem;
        margin-bottom: 2rem;
        line-height: 3rem;
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
  /* background: url(${(props) => props.back}) center center / cover; */
  margin: 0 auto;
  height: 100vh;
  margin: 0 auto;
  top: 0;
  flex: 1;
  position: sticky;
  object-fit: cover;

  img {
    margin-top: 10rem;
    height: 70%;
    width: 100%;
    object-fit: cover;
  }
`;
