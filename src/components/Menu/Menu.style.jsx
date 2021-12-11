import styled from 'styled-components';
import { device } from '../../styles/Responsive';

export const Nav = styled.nav`
  font-size: 2rem;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.bgColor};
  z-index: 10;
  transition: background 1s ease-in-out;
  overflow: hidden;
`;

export const NavGrid = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  .desktop {
    display: none;
  }

  .phone {
    width: 100%;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;

    button {
      justify-self: center;
    }

    @media ${device.mobileL} {
      justify-content: center;
    }
  }
  img {
    height: 1rem;
    @media ${device.tablet} {
      height: 2rem;
    }
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.color};
      text-transform: capitalize;
      font-size: 1.8rem;
      word-break: keep-all;
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

  @media ${device.laptop} {
    justify-content: center;
    flex-direction: row;
    padding: 2rem 1rem;
    margin: 0 auto;
    gap: 5rem;

    ul {
      gap: 5rem;
    }

    .phone {
      display: none !important;
    }

    .desktop {
      display: block;
    }
  }
`;
