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
          <img src={logo} alt="" className='desktop'/>
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
          <Fade top>
            <img src={logo} alt="" style={{ height: '2rem' }} />
          </Fade>
          <Fade right>
            <button onClick={() => click()}>
              {theme === 'dark' ? icons.sun : icons.moon}
            </button>
          </Fade>
        </div>
        <ul>
          {nav.map(({ text, href }, idx) => (
            <li id={idx}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
        <Fade right>
          <button onClick={() => click()} className='desktop'>
            {theme === 'dark' ? icons.sun : icons.moon}
          </button>
        </Fade>
      </NavGrid>
    </Nav>
  );
};

export default Menu;
