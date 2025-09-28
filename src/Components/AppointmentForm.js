import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Nama pasien wajib diisi";
    } else if (patientName.trim().length < 3) {
      errors.patientName = "Nama pasien minimal 3 karakter";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Nomor telepon wajib diisi";
    } else if (!/^[0-9]{10,13}$/.test(patientNumber.trim())) {
      errors.patientNumber = "Nomor telepon harus 10–13 digit angka";
    }

    if (patientGender === "default") {
      errors.patientGender = "Silakan pilih jenis kelamin";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Waktu janji temu wajib dipilih";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Pilih waktu yang akan datang";
      }
    }

    if (preferredMode === "default") {
      errors.preferredMode = "Silakan pilih metode konsultasi";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form jika sukses
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Janji temu berhasil dijadwalkan!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Jalin <span className="legal-siteSign">Sehat</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Buat Janji Temu Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Nama Lengkap Pasien:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>

          <br />
          <label>
            Nomor Telepon Pasien:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </label>

          <br />
          <label>
            Jenis Kelamin:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Pilih</option>
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
              <option value="private">Privasi (hanya untuk dokter)</option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </label>

          <br />
          <label>
            Waktu Janji Temu:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && (
              <p className="error-message">{formErrors.appointmentTime}</p>
            )}
          </label>

          <br />
          <label>
            Metode Konsultasi:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Pilih</option>
              <option value="voice">Telepon Suara</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && (
              <p className="error-message">{formErrors.preferredMode}</p>
            )}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Konfirmasi Janji Temu
          </button>

          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Detail janji temu telah dikirim ke nomor telepon pasien via SMS.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2025 Jalin Sehat. Semua hak dilindungi.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
