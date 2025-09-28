# Jalin Sehat

**Jalin Sehat** adalah platform layanan kesehatan online berbasis web, yang memudahkan pengguna untuk:  
- Menemukan dokter spesialis sesuai kebutuhan.  
- Membuat janji temu (appointment) online.  
- Mendapatkan layanan konsultasi, resep, dan saran medis secara cepat.  
- Membaca ulasan dari pelanggan lain dan informasi terkait kesehatan.  

---

## Fitur Utama

1. **Beranda / Hero Section**
   - Menampilkan headline, deskripsi singkat, dan tombol Book Appointment.  
   - Statistik singkat: jumlah pasien, dokter, dan pengalaman.  
   - Tombol scroll-to-top muncul saat user scroll.

2. **Informasi Layanan (Info Section)**
   - Emergency Care, Heart Disease, Dental Care.  
   - Setiap layanan dilengkapi ikon dan deskripsi.  

3. **Tim Dokter**
   - Menampilkan kartu dokter: foto, nama, spesialisasi, rating, dan jumlah review.  

4. **Ulasan Pelanggan**
   - Slider review pelanggan dengan navigasi sebelumnya/selanjutnya.  

5. **Newsletter**
   - Input email untuk berlangganan newsletter.  
   - Validasi email dan notifikasi toast menggunakan `react-toastify`.

6. **Footer**
   - Informasi kontak, layanan, legal, dan sosial media.  

7. **Navbar**
   - Responsive: versi desktop & mobile.  
   - Tombol Live Chat dengan cooldown 5 detik.  
   - Mobile menu menonaktifkan scroll saat dibuka.  

8. **Legal Page**
   - Halaman legal: General Info, Privacy Policy, Terms of Service, How it Works, Consultations.  

---

## Teknologi yang Digunakan

- React.js  
- React Router v6  
- React Toastify  
- Font Awesome  
- CSS / Tailwind (opsional, tergantung project setup)  
- React Hooks: useState, useEffect  

---

## Instalasi & Setup

1. Clone repository:
```bash
git clone https://github.com/username/jalin-sehat.git
cd jalin-sehat


npm install
npm start
npm run build



jalin-sehat/
├─ public/
├─ src/
│  ├─ Assets/          # Gambar dan ikon
│  ├─ Components/      # Semua komponen React
│  ├─ Scripts/         # Data dummy / utils
│  ├─ Styles/          # File CSS
│  ├─ App.js
│  └─ index.js
├─ package.json
└─ README.md




