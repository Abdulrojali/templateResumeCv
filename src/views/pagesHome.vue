<template>
    <navigasiComponents></navigasiComponents>
    <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router';
import navigasiComponents from '../components/componentNavigasi/navigasiComponents.vue';
export default{
    components:{
        navigasiComponents
    }
}
</script>