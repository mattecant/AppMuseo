<template>
    
    <GridLayout     
        rows="5,auto,5"
        columns="auto, auto"
         v-if="idOggetto>=0">

        <Image 
            row="1"
            :src="linkImage" 
            stretch="aspectFill" 
            col="0" />
        <Label
            row="1" 
            :text="nome"
            class="elementoLista" 
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

<style scoped>
Label{
    font-size: 20;
    margin-left: 5%;
    margin-top:8;
    margin-bottom: 8;
}
Image{
    height: 90;
    width: 90;
    margin-left: 5;
}
GridLayout{
    background-color: #efefef;

}
</style>