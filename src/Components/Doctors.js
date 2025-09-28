import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Kenalan dengan Dokter Kami</span>
        </h3>

        <p className="dt-description">
          Tim dokter spesialis di <b>Jalin Sehat</b> siap memberikan layanan
          kesehatan terbaik untuk Anda dan keluarga. Dengan pengalaman luas dan
          keahlian di bidangnya, kami hadir untuk membantu menjaga kesehatan
          serta kualitas hidup Anda.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="dr. Kartika Sari, Sp.B"
          title="Dokter Bedah Umum"
          stars="4.9"
          reviews="1.800"
        />
        <DoctorCard
          img={profile2}
          name="dr. Joko Pratama, Sp.PD-KHOM"
          title="Spesialis Penyakit Dalam - Hematologi"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="dr. Intan Widya, Sp.PD-KEMD"
          title="Spesialis Endokrinologi"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="dr. Andi Firmansyah, Sp.PD-KHOM"
          title="Spesialis Penyakit Dalam - Hematologi"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
