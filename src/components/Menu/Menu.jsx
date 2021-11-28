//Component

//Animation
import Fade from 'react-reveal/Fade';

//Style
import { Nav, NavGrid } from './Menu.style';

//Data
import { icons, logo, nav } from './MenuData';
import Slidebar from '../Slidebar/Slidebar';

const Menu = ({ click, theme }) => {
  return (
    <Nav>
        <NavGrid>
          <Slidebar nav={nav} />
          <Fade top>
            <img src={logo} alt="" />
          </Fade>
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
