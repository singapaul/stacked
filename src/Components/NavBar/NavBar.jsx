import "./NavBar.scss";
import openMenu from "../../Assets/assets/svgs/hamburger-menu.svg";
import closeMenu from "../../Assets/assets/svgs/close-menu.svg";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize.js";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const windowIsDesktop = useWindowSize(1024);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const desktopNav = (
    <nav className="navbar__nav">
      <NavLink className="navbar__nav-item" to="/about">
        Analytics
      </NavLink>
      <NavLink className="navbar__nav-item" to="/testimonials">
        Settings
      </NavLink>
    </nav>
  );

  const mobileNav = (
    <nav className="navbar__nav">
      <Link className="navbar__nav-item" to="/">
        Home
      </Link>
      <Link className="navbar__nav-item" to="/about">
        Analytics
      </Link>
      <Link className="navbar__nav-item" to="/services">
        Settings
      </Link>
    </nav>
  );

  const menuIcon = showMenu ? closeMenu : openMenu;
  const navbarClass = showMenu ? "navbar navbar--active" : "navbar";
  const navbarJSX = (
    <div className={navbarClass}>
      <div className="navbar__container">
        <Link className="navbar__container__item" to="/">
          <p> STCKD</p>
        </Link>

        {windowIsDesktop ? (
          desktopNav
        ) : (
          <button onClick={handleClick} className="navbar__container-button">
            <img
              src={menuIcon}
              className="navbar__container-button-image"
              alt=""
            />
          </button>
        )}
      </div>
      {!windowIsDesktop && showMenu && mobileNav}
    </div>
  );

  return navbarJSX;
};

export default Navbar;
