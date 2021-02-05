<template>
    <GridLayout     
      rows="5,90,5"
      columns="auto,auto">    
        <Image 
          :src="'res://not_found'" 
          stretch="fill"
          v-if="hasImg"
          row="1"
          col="0" />
        <Image 
          :src="linkImage" 
          stretch="fill"
          v-else
          row="1"
          col="0" />
        <Label
          row="1" 
          :text="nome"
          class="elementoLista" 
          col="1" 
          />        
    </GridLayout>
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
            linkImage:'res://baseline_clear_black_48',
            nome:'',
            hasImg:false
        }
    },
    created(){
        this.hasImg=false
        apiMuseo.infoOggetto(this.idOggetto).then((ris)=>{
            this.nome=ris.nome;
            this.linkImage=ris.img;
            this.hasImg=ris.img=='no_img'
        }).catch(()=>{
            this.nome="Impossibile caricare questo oggetto"
            this.linkImage='no_img';
            this.hasImg=ris.img=='no_img'
        })
    },
    watch:{
        idOggetto:function(nuovoId,prec){
            this.hasImg=false;
            apiMuseo.infoOggetto(nuovoId).then((ris)=>{

                this.nome=ris.nome;
                this.linkImage=ris.img;

                this.hasImg=ris.img=='no_img'
            }).catch(()=>{
                this.nome="Impossibile caricare questo oggetto"
                this.linkImage='no_img';
                this.hasImg=ris.img=='no_img'
            })
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