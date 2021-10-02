import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">
            HacktoberFest
          </a>
          <ul className={isActive ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Maintainers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contributors">
                Contributers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/Lunaticsatoshi">
                GitHub
              </a>
            </li>
          </ul>
          <div className={isActive ? "hamburger active" : "hamburger"} onClick={() => setIsActive(!isActive)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
