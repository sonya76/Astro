import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "../components/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          APPAstro
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/articles"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Articles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ajouterArticle"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Ajouter Article
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/apropos"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                A Propos
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={["fas", "coffee"]} />
            <FontAwesomeIcon className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}