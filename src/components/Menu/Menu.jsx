//Component
import { Container } from '../../utility/Container/Container.style';

//Animation
import Fade from 'react-reveal/Fade';

//Style
import { Nav, NavGrid } from './Menu.style';

//Data
import { icons, logo, nav } from './MenuData';

const Menu = ({ click, theme }) => {
  return (
    <Nav>
      <Container>
        <NavGrid>
          <Fade left delay={1000}>
            <img src={logo} alt="" />
          </Fade>
          <ul>
            {nav.map(({ text, href }, idx) => (
              <Fade top delay={`${idx + 2}000`} key={idx}>
                <li>
                  <a href={href}>{text}</a>
                </li>
              </Fade>
            ))}
          </ul>
          <Fade right delay={6000}>
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
