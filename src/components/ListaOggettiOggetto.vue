<template>
  <GridLayout  columns="90, auto">
      <Image :src="linkImage" stretch="aspectFill" col="0" />
      <Label :text="nome" row="0" col="1" />
  </GridLayout>

</template>

<script>
import apiMuseo from '../api/museo.js';
export default {
    props:{
        id:Number,
    },
    data(){
        return {
            linkImage:'not found',
            nome:'non trovato',
        }
    },
    mounted(){
        apiMuseo.infoOggetto().then((ris)=>{
            this.nome=ris.nome;
            this.linkImage=ris.img;
        });

    }
}
</script>

<style>

</style>