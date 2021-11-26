//Component
import { Container } from '../../utility/Container/Container.style';

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
      <Container>
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
      </Container>
    </Nav>
  );
};

export default Menu;
