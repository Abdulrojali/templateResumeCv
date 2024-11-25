<template>
  <div class="content">
    <div id="app">
  <form @submit.prevent="submitForm" class="application-form" id="top">
      <div class="col">
      <label for="namaPerusahaan">nama perusahaan</label>
      <input type="text" id="namaPerusahaan" v-model="namaPerusahaan" placeholder="Masukkan nama perusahaan" required />
    </div>
    <div class="col">
      <label for="alamatPerusahaan">alamat perusahaan</label>
      <input type="text" id="alamatPerusahaan" v-model="alamatPerusahaan" placeholder="Masukkan alamat perusahaan" required />
    </div>
    <div class="col">
      <label for="name">Nama Lengkap</label>
      <input type="text" id="name" v-model="namaLengkap" placeholder="Masukkan nama lengkap" required />
    </div>
    <div class="col">
      <label for="birth">Tempat, Tanggal Lahir</label>
      <input type="text" id="birth" v-model="birth" placeholder="Contoh: 12 April 2003" required />
    </div>
    <div class="col">
      <label for="location">location</label>
      <input type="text" id="location" v-model="location" placeholder="Contoh: Sukabumi"required />
    </div>


    <label for="position">Posisi yang Dilamar</label>
    <input type="text" id="position" v-model="position" placeholder="Masukkan posisi yang dilamar" required />

    <label for="source">Sumber Informasi</label>
    <input type="text" id="source" v-model="source" placeholder="Contoh: Website, Iklan, dll." required />

    <label for="skills">Keahlian Utama</label>
    <input id="skills" v-model="skills" placeholder="Contoh: Vue.js, Node.js, MongoDB, dll." required></input>

    <label for="contact">Kontak (No. Telepon atau Email)</label>
    <input type="text" id="contact" v-model="contact" placeholder="Masukkan kontak aktif" required />

    <label for="deskripsi">deskripsi (ceritakan tentang anda)</label>
    <textarea type="text" id="deskripsi" v-model="deskripsi" placeholder="ceritakan tentang anda sesuai pekerjaan yang di lamar" required />
    <button type="submit">buat resume</button>
  </form>
</div>
</div>
</template>
<script>
import {resume} from '../stores/resume'
export default{
    data() {
    return  {
        namaPerusahaan:'',
        alamatPerusahaan:'',
        namaLengkap: "", 
        birth: "", 
        location:"",
        position: "",
        source: "", 
        skills: "", 
        contact: "", 
        location: "", 
        deskripsi:"",
      submitted:false,
      resumeStore:resume(),
      currentDate: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        this.submitted=true
        const payload={
          nameCompany:this.namaPerusahaan,
          addresCompany:this.alamatPerusahaan,
          nameUser:this.namaLengkap,
          birthUser:this.birth,
          locationUser:this.location,
          positionUser:this.position,
          sourceUser:this.source,
          skillUser:this.skills,
          contactUser:this.contact,
          deskripsiUser:this.deskripsi,
          dateUser:this.currentDate,
          submitData:this.submitted
        }
      this.resumeStore.getDataResume(payload)
      this.$router.push('/resultResume')
      } else {
        alert("Harap isi semua bidang yang diperlukan!"); 
      }
    },
    validateForm() {
      return (
        this.namaLengkap &&
        this.birth &&
        this.position &&
        this.source &&
        this.skills &&
        this.contact
      );
    },
  }
}   
</script>


<style scoped>
body {
  width: 100%;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #333;
  scroll-behavior: smooth;
}

.content{
  width:100%;
  padding: 20px 0;
}
.application-form {
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.application-form h2 {
  text-align: center;
  color: #007bff;
  margin-bottom: 20px;
}

.application-form label {
  font-weight: bold;
  margin-top: 10px;
  display: block;
}

.application-form input,
.application-form button {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
}

.application-form textarea {
  resize: vertical;
}

.application-form button {
  background-color: #007bff;
  color: white;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.application-form button:hover {
  background-color: #0056b3;
}
#deskripsi{
  display: inline-block;
  height: 250px;
  resize: none;
  width: 100%;
  max-width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
