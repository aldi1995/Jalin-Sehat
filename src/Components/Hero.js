import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Kesehatan adalah Prioritas</p>
          <h2 className="text-title">
            Temukan Dokter Anda dan Buat Janji Mudah di Jalin Sehat
          </h2>
          <p className="text-descritpion">
            Konsultasi langsung dengan dokter secara online, dapatkan resep,
            perawatan, dan catatan medis hanya dalam hitungan menit. Semua
            layanan kesehatan kini ada di genggaman Anda.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Buat Janji Temu
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145rb+</p>
              <p>Pasien Terlayani</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Dokter Ahli</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Dokter Jalin Sehat" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
