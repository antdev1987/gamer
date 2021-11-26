import React, { useState } from 'react';

import Fade from "react-reveal/Fade"

// ICONS
import * as FaIcons from 'react-icons/fa'; //Now i get access to all the icons
import * as AiIcons from 'react-icons/ai';

// Rutas
import { Link } from 'react-router-dom';

// STYLES
import './Navbar.css';

export default function Slidebar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        {/* All the icons now are white */}
        <Fade left>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </Fade>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle" >
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {props.nav.map(({href, text}, index) => {
              return (
                <li key={index} className="nav-text">
                  <a href={href}>
                    <span>{text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}