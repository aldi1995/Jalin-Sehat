import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const toggleNav = () => setNav(!nav);

  const handleChatClick = () => {
    if (!isButtonDisabled) {
      setCooldown(5); // cooldown 5 detik
      toast.info("Sedang sibuk, mohon tunggu 5 detik.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    if (cooldown > 0) {
      setIsButtonDisabled(true);
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsButtonDisabled(false);
    }
  }, [cooldown]);

  // Lock scroll saat mobile nav terbuka
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";
  }, [nav]);

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">Jalin <span className="navbar-sign">Sehat</span></Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "navbar-links active" : "navbar-links"}>Beranda</NavLink></li>
        <li><a href="#services" className="navbar-links">Layanan</a></li>
        <li><a href="#about" className="navbar-links">Tentang</a></li>
        <li><a href="#reviews" className="navbar-links">Ulasan</a></li>
        <li><a href="#doctors" className="navbar-links">Dokter</a></li>
      </ul>

      <button
        className="navbar-btn"
        disabled={isButtonDisabled}
        onClick={handleChatClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> {isButtonDisabled ? `Tunggu ${cooldown}s` : "Live Chat"}
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={toggleNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>
        <ul className="mobile-navbar-links">
          <li><NavLink onClick={toggleNav} to="/">Beranda</NavLink></li>
          <li><a onClick={toggleNav} href="#services">Layanan</a></li>
          <li><a onClick={toggleNav} href="#about">Tentang</a></li>
          <li><a onClick={toggleNav} href="#reviews">Ulasan</a></li>
          <li><a onClick={toggleNav} href="#doctors">Dokter</a></li>
          <li><a onClick={toggleNav} href="#contact">Kontak</a></li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon icon={faBars} onClick={toggleNav} className="hamb-icon" aria-label="Menu" />
      </div>
    </div>
  );
}

export default Navbar;
