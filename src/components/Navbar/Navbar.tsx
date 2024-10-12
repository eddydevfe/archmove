import "./Navbar.scss";
import Logo from "../UI/Logo/Logo";
import Button from "../UI/Button/Button";
import searchIcon from "../../assets/icons/search.svg";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/x.svg";

import { useRef, useEffect } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  const hamburgerMenu = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive-nav");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth > 900 &&
        navRef.current &&
        navRef.current.classList.contains("responsive-nav")
      ) {
        navRef.current.classList.remove("responsive-nav");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div>
          {/* 
                I know I could have exported the logo as a SVG from Figma but cut me some slack,
                the sun was particularly harsh to my noggins today.
          */}
          <Logo />
          <nav ref={navRef}>
            <ul className="nav-links">
              <li>
                <a href="">How it Works</a>
              </li>
              <li>
                <a href="">Design Gallery</a>
              </li>
              <li>
                <a href="">Architects</a>
              </li>
              <li>
                <a href="">Articles</a>
              </li>
            </ul>
            <div className="auth-actions">
              <div>Sign In</div>
              <Button>Sign Up</Button>
            </div>
            <img
              src={closeIcon}
              alt="Close icon"
              className="menu-close-btn"
              onClick={hamburgerMenu}
            />
          </nav>
        </div>
        <div className="header-actions">
          <div>
            <img src={searchIcon} alt="Search icon" />
            <img src={menuIcon} alt="Menu icon" onClick={hamburgerMenu} />
          </div>
          <div className="auth-actions">
            <div>Sign In</div>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
