<template>
  <div class="result" ref="resultCv">
    <div class="profile-card bg-white shadow rounded p-6">
    <div class="header pb-4 border-b-2 border-gray-300 mb-4">
      <h1 class="text-2xl font-bold text-blue-600">{{ cvStore.payload.name }}</h1>
      <p class="text-gray-600">{{ cvStore.payload.address }} || {{ cvStore.payload.phone }} || {{cvStore.payload.mail}}</p>
    </div>
    <div class="section pb-4 border-b-2 border-gray-300 mb-4">
      <h2 class="font-semibold text-lg text-blue-500">Profil</h2>
      <p class="mt-2 text-gray-700">{{ cvStore.payload.profile }}</p>
    </div>
    <div class="section pb-4 border-b-2 border-gray-300 mb-4">
      <h2 class="font-semibold text-lg text-blue-500">Pendidikan</h2>
      <ul class="list-disc pl-6 mt-2">
        <li v-for="(edu, index) in cvStore.dataPendidikan" :key="index" class="text-gray-700">
          <strong>{{ edu.name }}</strong>: {{ edu.dateLocal }}
        </li>
      </ul>
    </div>
    <div class="section pb-4 border-b-2 border-gray-300 mb-4">
      <h2 class="font-semibold text-lg text-blue-500">pengalaman</h2>
      <ul class="list-disc pl-6 mt-2">
        <li v-for="(experience, index) in cvStore.dataPengalaman" :key="index" class="mb-2">
          <strong class="text-blue-600">{{ experience.judul }}</strong> ({{ experience.tanggal }})
          <ul class="list-disc pl-6 text-sm text-gray-700 mt-1">
            <li v-for="(task, i) in experience.jobs" :key="i">{{ task }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="section pb-4">
      <h2 class="font-semibold text-lg text-blue-500">Skill dan Sertifikat</h2>
      <p class="mt-2 text-gray-700"><strong>Skill</strong></p>
      <ul>
        <li  v-for="(data,index) in cvStore.payload.skills" :key="index">{{ data.nameSkill }} : {{ data.listSkill }}</li>
      </ul>
        <!-- {{ cvStore.payload. }} {{ skills.join(', ') }}</p> -->
      <h3 class="font-semibold mt-4 text-blue-600">Sertifikat</h3>
      <ul class="list-disc pl-6 mt-2">
        <li v-for="(certifikat, index) in cvStore.dataSertifikat" :key="index" class="text-gray-700">
          {{ certifikat.judul }}  ({{ certifikat.dateLocal }})</li>
      </ul>
    </div>
  </div>
  </div>
  <button @click="downloadPdf">download</button>
</template>

<script>
import  html2pdf  from "html2pdf.js";
import { cv } from "../stores/cv";
export default {
  setup() {
    const cvStore = cv();
    return { cvStore};
  },
  methods: {
    downloadPdf() {
      // Referensi elemen yang akan diubah menjadi PDF
      const element = this.$refs.resultCv;

      // Opsi konfigurasi html2pdf.js
      const options = {
        margin: 10,
        filename: `${this.cvStore.payload.name}_CV.pdf`, // Nama file PDF
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
.profile-card {
  max-width: 800px;
  margin: auto;
  background-color: #ffffff;
}
.header,
.section {
  border-bottom: 2px solid #d1d5db; /* Border abu-abu */
}
.header {
  padding-bottom: 16px;
  margin-bottom: 16px;
}
.section {
  padding-bottom: 16px;
  margin-bottom: 16px;
}
h1 {
  color: #1e40af; /* Warna biru gelap */
}
h2, h3 {
  color: #2563eb; /* Warna biru terang */
}
ul {
  margin-top: 8px;
}
li {
  line-height: 1.5;
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

</style>
