<template>
  <div>
    <h1>Result Resume</h1>
    <div class="result" ref="resultResume" id="resultResume">
      <div v-if="resumeStore.payload.submitData">
        <p>{{ resumeStore.payload.nameUser }}, {{ resumeStore.payload.dateUser }}</p>
        <br><br>
        <p>Kepada Yth.<br>HRD/Manager Perusahaan {{ resumeStore.payload.nameCompany }}<br><br>{{ resumeStore.payload.addressCompany }}</p>
        <p>
          Dengan hormat,<br>
          Saya yang bertanda tangan di bawah ini:<br><br>
          Nama: {{ resumeStore.payload.nameUser }}<br>
          Tempat, Tanggal Lahir: {{ resumeStore.payload.birthUser }}<br>
          Posisi yang Dilamar: {{ resumeStore.payload.positionUser }}<br>
          Sumber Informasi: {{ resumeStore.payload.sourceUser }}<br>
          Keahlian: {{ resumeStore.payload.skillUser }}<br>
          Kontak: {{ resumeStore.payload.contactUser }}
        </p>
        <br>
        <p>Bersama surat ini, saya bermaksud melamar pekerjaan di posisi 
          {{ resumeStore.payload.positionUser }} sesuai dengan informasi yang saya peroleh melalui {{ resumeStore.payload.sourceUser }}.</p>
       <br>
          <p>{{ resumeStore.payload.deskripsiUser }}</p>
        <br>
        <p>Sebagai bahan pertimbangan, saya lampirkan dokumen-dokumen pendukung berikut:</p>
        <ul>
          <li>Daftar Riwayat Hidup (CV)</li>
          <li>Fotokopi Ijazah dan Transkrip Nilai</li>
          <li>Sertifikat Pendukung</li>
          <li>Pas Foto Terbaru</li>
        </ul>
        <br>
        <p>Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.</p>
        <br><br><br>
        <p>Hormat saya</p>
      </br>
    <br>
    <br>
    <br>
      <p>{{ resumeStore.payload.nameUser }}</p>
      </div>
    </div>
    <button v-if="resumeStore.payload.submitData" @click="downloadPdf">Download</button>
    <h1 v-else class="notFound">Belum ada input</h1>
  </div>
</template>


<script>
import  html2pdf  from "html2pdf.js";
import  {resume}  from "../stores/resume";
export default {
  setup() {
    const resumeStore = resume();
    return { resumeStore };
  },
  methods: {
    downloadPdf() {
      // Referensi elemen yang akan diubah menjadi PDF
      const element = this.$refs.resultResume;

      // Opsi konfigurasi html2pdf.js
      const options = {
        margin: 10,
        filename: `${this.resumeStore.payload.nameUser}_resume.pdf`, // Nama file PDF
        image: { type: "jpeg", quality: 0.98 }, // Format dan kualitas gambar
        html2canvas: { scale: 2 }, // Skala untuk kualitas lebih baik
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // Format PDF
      };

      // Mengonversi elemen HTML ke PDF dan mengunduhnya
      html2pdf().set(options).from(element).save();
    },
  },
};
</script>



<style scoped>
.result {
  width: 100%;
  max-width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
}

button {
  margin-bottom: 20px;
  padding: 10px;
  text-align: center;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover{
  opacity: .8;
}

.result h2 {
  text-align: center;
  color: #28a745;
}
ul{
  list-style-type: none;
}

.result {
  font-size: 1.1em;
  font-family: "Times New Roman", Times, serif;
}

.notFound {
  font-size: 3em;
  color: red;
  text-align: center;
}

@media print {
  body * {
    visibility: hidden; /* Sembunyikan semua elemen */
  }
  .result {
    visibility: visible; /* Tampilkan hanya elemen tertentu */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
