<template>
    <li><p href="" @click='anchorPath'>{{ nama }}</p></li>
</template>

<script>
export default{
    props:{
        nama:{
            type:String
        },
        urlPath:{
            type:String
        }
    },
    methods:{
        anchorPath(){
            this.$router.push(`${this.urlPath}`)
        }
    }
}
</script>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
p{
    text-decoration: none;
    color: white;
    font-size: 1.25em;
    font-weight: 250;
    cursor: pointer;
}
p:hover{
    opacity: .9em;
}
</style>