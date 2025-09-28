import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Dokter Konsultasi" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Mengapa Pilih Jalin Sehat?</span>
        </h3>
        <p className="ba-description">
          Jalin Sehat hadir untuk memudahkan akses layanan kesehatan Anda.
          Dengan dokter terpercaya, kemudahan konsultasi, dan solusi yang
          dipersonalisasi, kami selalu mengutamakan kenyamanan serta
          kesejahteraan Anda. Yuk, mulai langkah menuju hidup lebih sehat
          bersama Jalin Sehat.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Dokter Profesional & Berpengalaman
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Layanan Darurat
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Dukungan Chat 24/7
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Pendaftaran Mudah & Cepat
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Buat Janji Temu
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
