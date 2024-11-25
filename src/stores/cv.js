import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { DateTime } from 'luxon';
export const cv=defineStore('cv',{
  state:()=>({
    payload:'',
    dataPendidikan:[],
    dataPengalaman:[],
    dataSertifikat:[],
    
  }),
  actions:{
    getData(data){
      this.payload=data
      const pendidikan = data.pendidikan
      pendidikan.map(el=>{
        const localDate=this.formatDateData(el.datePendidikan)
        const namePendidikan = el.pendidikan 
        this.dataPendidikan.push({name:namePendidikan,dateLocal:localDate})
        console.log(this.dataPendidikan)
      })
      const pengalaman = data.pengalaman 
      pengalaman.map(el=>{
        const formatDate=this.formatDateData(el.tanggal)
        this.dataPengalaman.push({judul:el.judul,tanggal:formatDate,jobs:el.jobdesk})
        console.log(this.dataPengalaman)
      })
      const sertifikat= data.sertifikat
      sertifikat.map(el=>{
        const formatDate = this.formatDateData(el.dateSertifikat)
        this.dataSertifikat.push({judul:el.namaSertifikat,dateLocal:formatDate})
        console.log(this.dataSertifikat)
      })
    },
    formatDateData(data){
      const dataFormatId=DateTime.fromISO(data).setLocale('id').toLocaleString({ day: 'numeric', month: 'long', year: 'numeric' });
    return dataFormatId
    }
  }
})


