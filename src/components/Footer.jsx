import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/">
            <img
              src={Logo}
              alt="Skull Tattoo Studio Logo"
              className="w-16 h-16 mr-2"
            />
          </Link>
          <div>
            <Link to="/" className="text-lg font-bold">
              Skull Tattoo Studio
            </Link>
            <p className="text-sm">
              © 2024 Skull Tattoo Studio. All rights reserved.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 lg:mr-16">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
