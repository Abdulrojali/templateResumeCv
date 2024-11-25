<template>
    <nav>
        <h1>TemplateKu</h1>
        <ul>
            <linksComponents 
        v-for='(data,index) in routing' :key="index"
        :nama="data.namaRouting" :urlPath="data.routingPath"
        ></linksComponents>
        </ul>

    </nav>
</template>

<script>
import linksComponents from './linksComponents.vue';
export default{
    data(){
        return{
            routing:[
                {namaRouting:'home',routingPath:'/'},
                {namaRouting:'cv',routingPath:'/formCv'},
                {namaRouting:'resume',routingPath:'/formResume'},
                // {namaRouting:'preview',routingPath:'/viewPageResult'},
            ] 
        }
    },
    components:{
        linksComponents
    },
}
</script>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
nav{
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 5px;
    top: 0;
    background-color: black;
    color: white;
}
h1{
    font-size: 1.5em;
    font-weight:500;
}
ul{
    display: flex;
    gap: 40px;
    list-style-type: none;
}
</style>