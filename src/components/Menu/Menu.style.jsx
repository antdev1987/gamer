import styled from 'styled-components';

export const Nav = styled.nav`
  font-size: 2rem;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.bgColor};
  z-index: 10;
  height: 6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: background 1s ease-in-out;
`;

export const NavGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding: 0 5rem;

  img {
    height: 2rem;
  }

  ul {
    display: flex;
    gap: 5rem;
    list-style: none;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.color};
      text-transform: capitalize;
    }
  }

  .nav-menu {
    background: ${(props) => props.theme.bgColor};
  }

  .menu-bars svg {
    color: ${(props) => props.theme.color};
  }

  .nav-text a {
    color: ${(props) => props.theme.color};
  }

  button {
    justify-self: end;
    transition: background 1s ease-in-out;
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
