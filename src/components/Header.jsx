import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="group relative w-max"
    aria-label={children}
  >
    <span>{children}</span>
    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-pink-950 group-hover:w-full"></span>
  </Link>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-2 px-6 fixed top-0 left-0 right-0 z-50 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Skull Tattoo Studio logo"
            className="w-14 h-14"
          />
        </div>
        <nav className="hidden md:flex space-x-4 items-center font-semibold uppercase">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/galeria">Galeria</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>

        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 py-4 z-40 bg-opacity-70 bg-black">
          <nav className="flex flex-col items-center space-y-2">
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/sobre" onClick={toggleMenu}>
              Sobre
            </NavLink>
            <NavLink to="/galeria" onClick={toggleMenu}>
              Galeria
            </NavLink>
            <NavLink to="/contato" onClick={toggleMenu}>
              Contato
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
