import styled from 'styled-components';

export const Nav = styled.nav`
  font-size: 2rem;
  padding: 1rem 0;
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;

  img {
    height: 10rem;
    width: 15rem;
    justify-self: start;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.bgColor};
    opacity: 0.6;
    transition: all 1s ease-in-out;
    font-weight: 500;

    &:hover {
      opacity: 1;
    }
  }

  button {
    justify-self: end;
    transition: all 1s ease-in-out;
    border-radius: 1rem;
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    font-size: 2.5rem;
    border: none;
    background: ${(props) => props.theme.color};
    color: ${(props) => props.theme.bgColor};

    svg {
      height: 2rem;
    }
  }
`;
