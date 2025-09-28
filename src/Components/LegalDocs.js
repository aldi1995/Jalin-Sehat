import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Jalin <span className="legal-siteSign">Sehat</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">Informasi Umum</p>
        <p className="legal-description">
          Selamat datang di <b>Jalin Sehat</b>, platform layanan kesehatan online
          terpercaya Anda. Misi kami adalah menghadirkan layanan kesehatan yang
          mudah diakses, aman, dan personal bagi setiap pengguna. Dengan
          menggunakan layanan ini, Anda menyetujui ketentuan yang dijelaskan
          dalam <i>Kebijakan Privasi</i> dan <i>Syarat & Ketentuan</i>.
        </p>

        <p className="legal-title">Kebijakan Privasi</p>
        <p className="legal-description">
          Privasi Anda adalah prioritas utama bagi kami. <b>Kebijakan Privasi</b> 
          menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
          data pribadi serta informasi medis Anda. Seluruh data dikelola dengan
          aman dan dijaga kerahasiaannya.
        </p>

        <p className="legal-title">Syarat & Ketentuan</p>
        <p className="legal-description">
          Dengan menggunakan <b>Jalin Sehat</b>, Anda setuju untuk mematuhi
          <i> Syarat & Ketentuan</i> yang berlaku. Hal ini mencakup tata cara
          penggunaan layanan, interaksi dengan tenaga medis, serta hak dan
          kewajiban kedua belah pihak. Harap membaca dan memahami syarat ini
          untuk pengalaman yang aman dan nyaman.
        </p>

        <p className="legal-title">Konsultasi</p>
        <p className="legal-description">
          <b>Jalin Sehat</b> mempertemukan Anda dengan dokter berpengalaman untuk
          konsultasi online. Layanan ini tidak menggantikan kunjungan tatap muka,
          melainkan sebagai solusi praktis untuk mendapatkan saran medis, resep,
          maupun tindak lanjut kesehatan. Pastikan Anda memberikan data yang
          akurat untuk hasil terbaik.
        </p>

        <p className="legal-title">Cara Kerja</p>
        <p className="legal-description">
          <b>Jalin Sehat</b> dirancang untuk memudahkan akses kesehatan. Anda bisa
          memilih dokter spesialis, membuat janji temu, dan berkonsultasi secara
          virtual. Dokter kami akan memberikan saran medis dan rencana perawatan
          yang sesuai dengan kebutuhan Anda. <b>Catatan:</b> Untuk kondisi darurat,
          segera hubungi fasilitas kesehatan terdekat.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2025 Jalin Sehat. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
