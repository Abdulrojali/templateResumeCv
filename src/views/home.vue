<template>
    <div class="container">
        <h1 class="heading">template gratis</h1>
            <div class="gridContent">
                <div class="col" 
              v-for="(data,index) in templateList"
                :key="index">
                <!-- <img :src="data.img" alt=""> -->
                <h1>{{ data.judul }}</h1>
                <p>{{ data.deskripsi }}</p>
                <button @click="handlingRoutingTemplate(data.index)">use</button>
                </div>
        </div>
    </div>
</template>


<script>
import { useRouter } from 'vue-router';
export default{
setup(){
    const router=useRouter()
    const templateList=[
        {
            judul:'template cv profesional',
            img:'',
            deskripsi:'template cv profesional gratis ',
            index:1
        },
        {
            judul:'template resume profesional',
            img:'',
            deskripsi:'template resume profesional gratis ',
            index:2
        },
    ]
    const handlingRoutingTemplate=function(index){
        if(index==1){
            router.push('/formCv')
        }
        else{
            router.push('/formResume')
        }
    }
    return{templateList,handlingRoutingTemplate}
},

}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.heading{
    font-size: 3em;
    font-weight: 800;
    text-transform: capitalize;
    margin-bottom: 20px;
}
.gridContent{
    margin-top: 40px;
    width: 65%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
    grid-gap: 30px;
}
.col{
    height: 200px;
    padding: 20px;
    box-shadow: 0 0 1px 1px gray;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.col img{
    border: 1px solid red;
    width: 100%;
    height: 200px;
    margin-bottom: 30px;
}
.col h1{
    font-size: 2em;
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 10px;
}
.col p{
    font-size: 1em;
    font-weight: 250;
}
button{
    margin-top: 15px;
    padding: 5px 25px;
    border-radius: 5px;
    border: none;
    background-color: black;
    color: white;
    font-size: 1.1em;
    font-weight: 400;
    cursor: pointer;
}
button:hover{
    opacity: .9;
}
</style>