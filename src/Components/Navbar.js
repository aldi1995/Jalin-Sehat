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

  const navLinks = [
    { label: "Beranda", to: "/" },
    { label: "Layanan", to: "#services" },
    { label: "Tentang", to: "#about" },
    { label: "Ulasan", to: "#reviews" },
    { label: "Dokter", to: "#doctors" },
    { label: "Kontak", to: "#contact" },
  ];

  const openNav = () => setNav(!nav);

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      setCooldown(5);
      toast.info("Sedang sibuk, silakan tunggu 5 detik.", {
        position: "top-center",
      });
    } else {
      toast.warning(`Harap tunggu ${cooldown}s sebelum mencoba lagi.`, {
        position: "top-center",
      });
    }
  };

  // Countdown handler
  useEffect(() => {
    if (cooldown > 0) {
      setIsButtonDisabled(true);
      const interval = setInterval(() => setCooldown((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setIsButtonDisabled(false);
    }
  }, [cooldown]);

  // Lock body scroll on mobile nav
  useEffect(() => {
    if (nav) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  }, [nav]);

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">Jalin <span className="navbar-sign">Sehat</span></Link>
      </h1>

      {/* Desktop Links */}
      <ul className="navbar-items">
        {navLinks.slice(0, 5).map((link) => (
          <li key={link.label}>
            {link.to.startsWith("/") ? (
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "navbar-links active" : "navbar-links"
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <a href={link.to} className="navbar-links">{link.label}</a>
            )}
          </li>
        ))}
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
        aria-label="Tombol Live Chat"
      >
        <FontAwesomeIcon icon={faCommentDots} /> {isButtonDisabled ? `Tunggu ${cooldown}s` : "Chat Sekarang"}
      </button>

      {/* Mobile Navbar */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>
        <ul className="mobile-navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.to.startsWith("/") ? (
                <NavLink onClick={openNav} to={link.to}>{link.label}</NavLink>
              ) : (
                <a onClick={openNav} href={link.to}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon icon={faBars} onClick={openNav} className="hamb-icon" aria-label="Buka menu navigasi" />
      </div>
    </div>
  );
}

export default Navbar;
