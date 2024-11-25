import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const resume=defineStore('resume',{
  state:()=>({
    // nameCompany:ref(''),
    // addressCompany:ref(''),
    // nameUser:ref(''),
    // birthUser:ref(''),
    // locationUser:ref(''),
    // positionUser:ref(''),
    // sourceUser:ref(''),
    // skillUser:ref(''),
    // contactUser:ref(''),
    // deskripsiUser:ref(''),
    // dateUser:ref('')
    payload:''
  }),
  actions:{
    getDataResume(data){
      this.payload=data
      // this.nameCompany=payload.nameCompany
      // this.addressCompany=payload.addressCompany
      // this.nameUser=payload.nameUser
      // this.birthUser=payload.birthUser
      // this.locationUser=payload.locationUser
      // this.positionUser=payload.positionUser
      // this.sourceUser=payload.sourceUser
      // this.skillUser=payload.skillUser
      // this.contactUser=payload.contactUser
      // this.deskripsiUser=payload.deskripsiUser
      // this.dateUser=payload.dateUser
    }
  }
})