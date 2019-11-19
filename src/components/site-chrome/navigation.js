import React from "react";
import { Link } from "gatsby";

import navStyles from "./navigation.module.scss";

const Navigation = () => (
  <nav className={`nav ${navStyles.nav}`}>
    <h2 className="visually-hidden">Navigation</h2>
    <ul id="navigation" tabIndex="-1">
      <li>
        <Link to="/">App Home</Link>
      </li>
      <li>
        <Link to="/slides">Slide deck</Link>
      </li>
      <li className={`navItemGroup ${navStyles.navItemGroup} `}>
        <h3 className={`navHeading ${navStyles.navHeading}`}>Demos</h3>
        <ul id="page-navigation">
          <li>
            <a href="https://dapx.digital/">DAPx</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default Navigation;
