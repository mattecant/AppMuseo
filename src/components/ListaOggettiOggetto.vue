<template>
  <GridLayout v-if="idOggetto>=0"
    columns="90, auto">
      <Image 
        :src="linkImage" 
        stretch="aspectFill" 
        col="0" />
      <Label 
        :text="nome" 
        col="1" />
  </GridLayout>
  <StackLayout v-else>
      <Label :text="((idOggetto==-2)?'Inserire un elemento da ricercare':'Nessun elemento trovato')+' id: '+idOggetto" textWrap="true" />
  </StackLayout>

</template>

<script>
import apiMuseo from '../api/museo.js';
export default {
    props:{
        idOggetto:{
            type:Number,
            required:true,
        }
    },
    data(){
        return {
            linkImage:'not found',
            nome:'non trovato',
        }
    },
    created(){
        console.log(this.idOggetto);
        apiMuseo.infoOggetto(this.idOggetto).then((ris)=>{
            this.nome=ris.nome +' id:'+this.idOggetto;
            this.linkImage=ris.img;
        });
    },
    watch:{
        idOggetto:function(nuovoId){
            apiMuseo.infoOggetto(this.idOggetto).then((ris)=>{
                this.nome=ris.nome +' id:'+this.idOggetto;
                this.linkImage=ris.img;
            });
        }
    }
}
</script>

<style>

</style>