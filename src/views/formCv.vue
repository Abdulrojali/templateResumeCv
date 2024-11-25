<template>
<div class="container">
  <h1 class="heading">form cv</h1>
  <div class="content">
    <div class="form">
      <div class="header">
        <div class="col">
        <label for="name">nama</label>
        <input type="text" placeholder="contoh budi anduk"  v-model="nama">
      </div>
      <div class="col">
        <label for="alamat">alamat</label>
        <input type="text" placeholder="contoh : jln ahmad yani no 56 rt 03/rw 09"  v-model="alamat">
      </div>
      </div>
      <div class="header">
        <div class="col">
        <label for="numberPhone">nomor telepon</label>
        <input type="text" placeholder="contoh : 081302948929"  v-model="numberPhone">
      </div>
      <div class="col">
        <label for="email">email</label>
        <input type="text" placeholder="contoh : budi@gmail.com"  v-model="email">
       </div>
      </div>
      <br>
      <div class="columnAccording">
        <div class="header"
        v-for="(data,index) in formPendidikan"
        :key="index">
        <div class="col">
          <label for="pendidikan">pendidikan</label>
          <input type="text" placeholder="contoh : sekolah menengah atas" v-model="data.pendidikan">
        </div>
        <div class="col">
          <label for="tanggal">tanggal kelulusan</label>
          <input type="date" name="" id="" v-model="data.datePendidikan"  placeholder="contoh : 10 januari 2022">
          <!-- <i class="fa-solid fa-trash" @click="removeFormPendidikan(index)"></i> -->
         </div>
        </div>
        <button @click="addNewPendidikan" class="button">tambah pendidikan</button>
      </div>
      <br>
    </br>
    <div class="col">
        <label for="about">profil</label>
        <textarea name="" id="" placeholder="contoh : saya adalah seorang mahasiswa yang memiliki pengalaman sebagai seorang web developers" v-model="profil"></textarea>
      </div>
      <div class="columnAccording">
        <div class="header"
        v-for="(data,index) in listPengalaman"
        :key="index">
        <div class="flex">
          <div class="col">
          <label for="pengalaman">pengalaman</label>
          <input type="text" placeholder="nama perusahaan" v-model="data.judul">
        </div>
        <div class="col">
          <label for="tanggal">tanggal</label>
          <input type="date" name="" id="" v-model="data.tanggal">
          <i class="fa-solid fa-trash" @click="removeFormPengalaman(index)"></i>
         </div> 
        </div>
         <div class="col">
          <h1>{{data.no}}</h1>
          <label for="deskripsi">deskripsi Pekerjaan</label>
          <div class="colDeskripsi">
            <input type="text" v-model="data.inputJobdesk" placeholder="contoh : merancang database">
            <button @click="tambahDeskripsiPekerjaan(index,data.no)" class='button'>tambah</button>
          </div>
        </div> 
        <div class="col">
          <b>jobdesk</b>
          <ul>
            <li v-for="job in data.jobdesk">{{ job }}</li>
          </ul>
        </div>       
        </div>
        <button @click="addNewFormPengalaman" class="button">tambah pengalaman</button>
      </div>
      
    <br>
    <br>
    <div class="columnAccording">
        <div class="header"
        v-for="(data,index) in attributSkill"
        :key="index">
        <div class="col">
          <label for="name">name</label>
          <input type="text" placeholder="contoh : pemrograman" v-model="data.nameSkill">
        </div>
        <div class="col">
          <label for="list">list</label>
          <input type="text" name="" id="" placeholder="contoh : html,css" v-model="data.listSkill">
          <i class="fa-solid fa-trash" @click="removeFormskill(index)"></i>
         </div>
        </div>
        <button @click="addNewskill" class="button">tambah skill</button>
      </div>
      <br>
      <br>
      <div class="columnAccording">
       <div class="header"
       v-for="(data,index) in formSertifikat"
       :key="index">
       <div class="col">
         <label for="namaSertifikat">namaSertifikat</label>
         <input type="text" placeholder="namaSertifikat" v-model="data.namaSertifikat">
       </div>
       <div class="col">
         <label for="tanggal">tanggal</label>
         <input type="date" name="" id="" v-model="data.dateSertifikat">
         <i class="fa-solid fa-trash" @click="removeFormSertifikat(index)"></i>
        </div>
       </div>
       <button @click="addNewSertifikat" class="button">tambah sertifikat</button>
     </div>
    </div>
    <button @click="submitFormCv" >submit</button>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import { cv } from '../stores/cv';

export default{
  data(){
    return{
            nama:ref(''),
            alamat:ref(''),
            numberPhone:ref(''),
            email:ref(''),
            profil:ref(''),
            formPendidikan:[{pendidikan:ref(''),datePendidikan:ref('')}],
            listPengalaman:[{judul:ref(''),tanggal:ref(''),jobdesk:[],inputJobdesk:ref('')}],
            attributSkill:[{nameSkill:ref(''),listSkill:ref('')}],
            formSertifikat:[{namaSertifikat:ref(''), dateSertifikat:ref('')}],
            cvStore:cv()
    }
  },
  methods:{
            addNewPendidikan(){
      this.formPendidikan.push(
        {pendidikan:ref(''), 
        datePendidikan:ref(''),})
    },
    tambahDeskripsiPekerjaan(i){
      const inputjobdesk = this.listPengalaman[i].inputJobdesk
       this.listPengalaman[i].jobdesk.push(inputjobdesk)
    },
            addNewFormPengalaman(){
            this.listPengalaman.push(
              {judul:ref(''),
              tanggal:ref(''),
              jobdesk:[],
              inputJobdesk:ref(''),
              no:this.number,})
        },
        addNewskill(){
            this.attributSkill.push({nameSkill:ref(''),listSkill:ref('')})
        },
        addNewSertifikat(){
     this.formSertifikat.push(
      {namaSertifikat:ref(''), 
      dateSertifikat:ref('')})
   },
   removeFormPendidikan(index){
                this.formPendidikan.splice(index,1)
            },
   removeFormPengalaman(index){
            this.listPengalaman.splice(index,1)
        },
   removeFormskill(index){
            this.attributSkill.splice(index,1)
        },
   removeFormSertifikat(index){
               this.formSertifikat.splice(index,1)
           },
           submitFormCv(){
            const payload={
              name:this.nama,
              address:this.alamat,
              mail:this.email,
              phone:this.numberPhone,
              profile:this.profil,
              pendidikan:this.formPendidikan,
              pengalaman:this.listPengalaman,
              skills:this.attributSkill,
              sertifikat:this.formSertifikat
            }
          this.cvStore.getData(payload)
          this.$router.push('/resultCv')
        },
        }
}
</script>

<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.columnAccording {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

/* Container Styling */
.container {
  width: 100%;
  height: 100%;
  padding: 20px;
}

/* Heading Styling */
.heading {
  text-align: center;
  padding: 20px;
  font-size: 3em;
  font-weight: 600;
  text-transform: capitalize;
}

/* Column Layout */
.col {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.colDeskripsi {
  width:100%;
  display: flex;
  gap: 20px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Jarak antara teks dan ikon */
  padding: 10px;
  width: 120px; /* Lebar tombol */
  background: linear-gradient(90deg, #4caf50, #2e7d32); /* Gradasi hijau */
  color: white;
  font-size: 0.9em;
  font-weight: bold;
  text-transform: capitalize;
  border-radius: 25px; /* Membuat tombol berbentuk oval */
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Menambahkan bayangan */
  cursor: pointer;
  transition: all 0.3s ease; /* Efek transisi */
}

.button:hover {
  background: linear-gradient(90deg, #66bb6a, #388e3c); /* Warna gradasi saat hover */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2); /* Memperbesar bayangan */
  transform: translateY(-2px); /* Efek melayang */
}

.button i {
  font-size: 1.2em; /* Ukuran ikon */
  color: white; /* Warna ikon */
}

.button:active {
  transform: translateY(0); /* Tombol kembali ke posisi semula saat diklik */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Mengurangi bayangan */
}

.col label {
  font-size: 1.2em;
  font-weight: 600;
}

.col input {
  width: 80%;
  padding: 10px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 1em;
}

.colDeskripsi button {
  padding: 6px 10px;
  font-size: 1em;
}

.colDeskripsi input {
  padding: 10px 20px;
}

/* Form Layout */
.form {
  padding: 20px;
}

.flex {
  width: 90%;
}

/* Header Styling */
.header {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Membagi menjadi 2 kolom */
  gap: 20px; /* Jarak antar kolom */
}


/* Textarea Styling */
textarea {
  width: 100%;
  height: 150px;
  padding: 20px;
  font-size: 1.1em;
  border: 1px solid gray;
  border-radius: 5px;
  resize: none;
}

/* Button Styling */
textarea {
  width: 100%;
  height: 150px;
  padding: 20px;
  font-size: 1.1em;
  border: 1px solid gray;
  border-radius: 5px;
  resize: none;
}

i {
  position: absolute;
  display:none;
  right: 20px; /* Atur jarak dari tepi kanan */
  top: 50%; /* Posisi vertikal tengah */
  transform: translateY(-50%); /* Koreksi posisi agar benar-benar di tengah */
  cursor: pointer;
  font-size: 1.2em; /* Ukuran yang lebih sesuai */
  color: gray; /* Warna default */
  transition: color 0.3s ease, opacity 0.3s ease; /* Animasi halus */
}

i:hover {
  color: red; /* Warna merah untuk indikasi klik */
  opacity: 0.9;
}

button {
  padding: 10px;
  width:100%;
  background-color: rgb(20, 20, 201);
  color: white;
  font-size: 0.9em;
  font-weight: 700;
  text-transform: capitalize;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
</style>
