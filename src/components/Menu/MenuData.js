//Theme Icon
import * as BiIcon from 'react-icons/bi';

//Logos
import logoImg from './img/logo.svg';

export const logo = logoImg;

//Nav Navigation
export const nav = [
  { text: 'home', href: '#home',  },
  { text: 'pricing', href: '#pricing' },
  { text: 'about', href: '#about' },
  { text: 'contact us', href: '#contactUs' },
];

export const icons = { moon: <BiIcon.BiMoon />, sun: <BiIcon.BiSun /> };
