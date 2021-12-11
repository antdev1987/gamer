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
          <img src={logo} alt="" className="desktop" />
        </Fade>
        <div
          className="phone"
          style={{
            display: 'flex',
            alignItems: 'Center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div className="box--1">
            <img src={logo} alt="" style={{ height: '2rem' }} />
          </div>
          <div className="box--2">
            <button onClick={() => click()}>
              {theme === 'dark' ? icons.sun : icons.moon}
            </button>
          </div>
        </div>
        <ul>
          {nav.map(({ text, href }, idx) => (
            <li id={idx}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
        <Fade right>
          <button onClick={() => click()} className="desktop">
            {theme === 'dark' ? icons.sun : icons.moon}
          </button>
        </Fade>
      </NavGrid>
    </Nav>
  );
};

export default Menu;
