import React, { useState, useEffect } from "react";
import "./HeaderSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isFixed ? "fixed" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            className="text-white"
          />
        </div>
        <div className="heading">
          <h1>Demo Amit Hulk</h1>
        </div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">Catalog</a>
          <a href="/products">Contact</a>
          <a href="/contact">Form Builder App</a>
        </nav>
        <div className="icon-container">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;