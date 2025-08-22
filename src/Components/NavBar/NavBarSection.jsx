import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import { useState } from "react";

const NavBarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">My Portfolio</div>
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Hamburger Icon (Mobile) */}
      <div className="menu" onClick={toggleMenu}>
        <div className="logo-mob">My Portfolio</div>
        <GiHamburgerMenu />
      </div>

      {/* Sidebar (Mobile Menu) */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <GrClose className="closebtn" onClick={toggleMenu} />
        <a href="#home" onClick={toggleMenu}>
          Home
        </a>
        <a href="#about" onClick={toggleMenu}>
          About
        </a>
        <a href="#projects" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#achievements" onClick={toggleMenu}>
          Achievements
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBarSection;
