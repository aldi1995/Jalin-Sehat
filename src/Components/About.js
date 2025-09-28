import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Tim Dokter" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Tentang Kami</span>
        </h3>
        <p className="about-description">
          Selamat datang di <b>Jalin Sehat</b>, sahabat terpercaya Anda untuk
          layanan kesehatan yang mudah dijangkau dan lebih personal. Bersama
          dokter-dokter berpengalaman, kami hadir untuk memberi konsultasi
          online serta layanan khusus dengan mengutamakan kenyamanan dan
          kesehatan Anda. Yuk, mulai perjalanan menuju hidup yang lebih sehat
          bersama Jalin Sehat.
        </p>

        <h4 className="about-text-title">Solusi Untuk Anda</h4>

        <SolutionStep
          title="Pilih Dokter Spesialis"
          description="Temukan dokter spesialis yang tepat sesuai kebutuhan Anda dan lakukan pemesanan dengan mudah di Jalin Sehat. Dokter kami siap memberi perawatan yang sesuai untuk kesehatan Anda."
        />

        <SolutionStep
          title="Atur Jadwal Konsultasi"
          description="Pilih hari dan jam yang paling pas dengan aktivitas Anda. Tim dokter kami akan menyesuaikan untuk memastikan layanan tetap nyaman dan tepat waktu."
        />

        <SolutionStep
          title="Dapatkan Solusi Kesehatan"
          description="Dokter dan tenaga medis berpengalaman siap memberikan saran, diagnosa, dan rencana perawatan yang dipersonalisasi agar Anda bisa mencapai hidup yang lebih sehat."
        />
      </div>
    </div>
  );
}

export default About;
