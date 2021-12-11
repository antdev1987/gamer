//Component

//Animation
import Fade from 'react-reveal/Fade';
//Style
import { Nav, NavGrid } from './Menu.style';

//Data
import { icons, logo, nav } from './MenuData';

const Menu = ({ click, theme }) => {
  return (
    <Nav>
      <NavGrid>
        <Fade top>
          <img src={logo} alt="" />
        </Fade>
        <ul>
          {nav.map(({ text, href }, idx) => (
            <li id={idx}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
        <Fade right>
          <button onClick={() => click()}>
            {theme === 'dark' ? icons.sun : icons.moon}
          </button>
        </Fade>
      </NavGrid>
    </Nav>
  );
};

export default Menu;
