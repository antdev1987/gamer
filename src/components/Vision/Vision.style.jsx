import styled, { css } from 'styled-components';

export const VisionStyled = styled.section`
  margin-top: 3rem;

  .react-parallax {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 300px);
    gap: 3rem;
    row-gap: 10rem;
    position: relative;
  }

  div {
    border: 1px solid red;
  }
`;

export const Img = styled.img`
  position: ${(props) =>
    props.perce > 1 && props.perce < 1.47 ? 'fixed' : 'absolute'};

  ${(props) =>
    props.perce > 1 &&
    css`
      bottom: 0;
    `}

  width: 60rem;
  height: 70rem;
  object-fit: cover;
`;
