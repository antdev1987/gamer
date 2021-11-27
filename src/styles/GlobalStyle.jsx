import { createGlobalStyle } from 'styled-components';
import { device } from './Responsive';

const GlobalStyle = createGlobalStyle`
  
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 37.5%;
    font-family: sans-serif;
    scroll-behavior: smooth;


  @media ${device.tablet}{
    font-size: 50%;
  }
  @media ${device.laptop}{
    font-size: 62.5%;
  }

  }


  body{
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.bgColor};
    transition: background  1s ease-in-out;
  }
`;

export default GlobalStyle;
