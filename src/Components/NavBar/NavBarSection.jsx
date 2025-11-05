import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
// import portoflioLogo from "../../assets/portoflioLogo.png";


const NavBarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Achievements", href: "/#achievements" },
    { label: "OpenSources", href: "/#opensources" },
    { label: "Contact", href: "/#contact" },
    
  ];

  return (
    <nav className="sticky top-0 w-full backdrop-blur-md bg-[#190b3f] z-50 shadow-lg">
      {/* Navbar Container */}
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Section: Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">
          {/* <img src={portoflioLogo} alt="error" className="w-80 h-12"/> */}
          My PortFolio
        </div>

        {/* Right Section: Nav Links (Desktop Only) */}
        <div className="hidden md:flex bg-white/10 border border-white/30 rounded-2xl px-4 py-2">
          <ul className="flex gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-lg font-medium px-3 py-2 rounded-md transition-all duration-300 hover:bg-white/20"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          <GiHamburgerMenu
            className="text-4xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#190b3f] border-l border-white/30 flex flex-col p-8 gap-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <GrClose
          className="text-3xl text-white cursor-pointer self-end mb-4 hover:rotate-90 hover:text-yellow-400 transition-all"
          onClick={toggleMenu}
        />
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={toggleMenu}
            className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBarSection;
