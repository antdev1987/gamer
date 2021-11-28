import styled from 'styled-components';

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
      color: ${props => props.theme.colors.primary};
      text-align: center;
    }
  }
`;

export const ImageBox = styled.div`
  height: 40rem;
  width: 100%;
  background: url(${(props) => props.srcHtml}) center center / cover;
`;
