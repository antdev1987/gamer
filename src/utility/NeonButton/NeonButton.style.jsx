import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 1.5rem 3rem;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: .4rem;
  text-decoration: none;
  font-size: 2.4rem;
  overflow: hidden;
  transition: 0.2s;
  border: 0.1px solid ${(props) => props.theme.colors.primary};

  &:hover {
    color: ${(props) => props.theme.colors.primaryDark};
    background: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 1rem ${(props) => props.theme.colors.primary},
      0 0 4rem ${(props) => props.theme.colors.primary},
      0 0 8rem ${(props) => props.theme.colors.primary};
    transition-delay: 1s;
  }

  span {
    position: absolute;
    display: block;
    margin: 0;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: .2rem;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.colors.primary}
    );
  }

  &:hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: .2rem;
    background: linear-gradient(
      270deg,
      transparent,
      ${(props) => props.theme.colors.primary}
    );
  }

  &:hover span:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: .2rem;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent,
      ${(props) => props.theme.colors.primary}
    );
  }

  &:hover span:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: .2rem;
    height: 100%;
    background: linear-gradient(
      360deg,
      transparent,
      ${(props) => props.theme.colors.primary}
    );
  }

  &:hover span:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`;
