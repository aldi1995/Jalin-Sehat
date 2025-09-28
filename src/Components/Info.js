import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Layanan Kami</span>
        </h3>
        <p className="info-description">
          Di <b>Jalin Sehat</b>, kami menghadirkan layanan kesehatan yang mudah
          diakses dan sesuai kebutuhan Anda. Dengan platform ini, Anda bisa
          terhubung langsung dengan dokter berpengalaman untuk konsultasi,
          mendapatkan resep, hingga layanan medis cepat kapan saja dibutuhkan.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Perawatan Darurat"
          description="Layanan darurat kami siap menjadi penolong terpercaya saat kondisi
          kritis. Baik itu sakit mendadak, cedera, atau masalah medis yang
          perlu penanganan segera, tim medis Jalin Sehat siap 24 jam memberikan
          pertolongan cepat dan tepat."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Kesehatan Jantung"
          description="Tim dokter spesialis jantung kami menggunakan teknologi modern untuk
          memeriksa kesehatan kardiovaskular Anda dan membuat rencana perawatan
          yang sesuai. Mulai dari pemeriksaan menyeluruh hingga tindakan
          lanjutan, kami berkomitmen menjaga jantung Anda tetap sehat."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Perawatan Gigi"
          description="Tersenyum percaya diri dengan layanan perawatan gigi dari Jalin Sehat.
          Dokter gigi kami siap memberikan perawatan lengkap, mulai dari
          pemeriksaan rutin, pembersihan, hingga perawatan estetik dan
          pemulihan agar kesehatan gigi tetap terjaga."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
