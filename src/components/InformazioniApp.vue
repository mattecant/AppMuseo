<template>

  <GridLayout rows="auto,auto,auto,auto,auto,auto,auto,auto,*" >
      
  
    <Label row="0" text="Applicazione museo" class="Titolo"  textWrap="true" />
    <Label row="1" text="Applicazione" class="list-title" @tap="setStato(1)" textWrap="true" />
    <StackLayout row="2"  v-if="stato==1">
            <Label text="Versione 2.0" class="subtitles" textWrap="true" />
            <Label text="Sviluppatore: " class="subtitles" textWrap="true" />
            <Label text="Canton Matteo" class="subinfo" textWrap="true" />
            <Label text="Codice sorgente:" class="subtitles" textWrap="true" />
            <Label text="https://github.com/" class="subinfo" textWrap="true" />
    </StackLayout>        
    <Label row="3"  text="Informazioni utili" class="list-title" @tap="setStato(2)" textWrap="true" />
    <StackLayout row="4"  v-if="stato==2">
            <Label text="Applicazione realizzata per il museo dell'informatica" class="subtitles" textWrap="true" />
            <Label text="Contatto sviluppatore:" class="subtitles" textWrap="true" />
            <Label text="matteo.canton2@gmail.com" class="subinfo" textWrap="true" />
    </StackLayout>        
    <Label row="5"  text="Note sviluppo" class="list-title" @tap="setStato(3)" textWrap="true" />
    <StackLayout row="6"  v-if="stato==3">
            <Label text="Applicazione realizzata tramite:"  class="subtitles" textWrap="true" />
            <Label text="Nativescript" class="subinfo" textWrap="true" />
            <Label text="Vue.js" class="subinfo" textWrap="true" />
            <Label text="Librerie utilizzate: " class="subtitles" textWrap="true" />
            <Label text="nativescript-barcodescanner" class="subinfo" textWrap="true" />
            <Label text="axios" class="subinfo" textWrap="true" />
            <Label text="Material Design" class="subinfo" textWrap="true" />
    </StackLayout>
    </GridLayout>   
   
</template>
<script>
export default {
    data(){
        return {
            stato:0,
        }
    },
    methods:{
        setStato:function(s){
            if(this.stato==s)
                this.stato=0;
            else
                this.stato=s;
        }
    }
}
</script>
<style scoped>

.subtitles{
    font-size: 16;
    margin-left: 8;
}
.Titolo{
    font-size: 30;
     text-align: center;
    padding-top: 10;
    
}
.subinfo{
    font-size: 14;
    margin-left: 16;
}
.list-title{
    font-size: 23;
    margin-top:35;
    margin-bottom:5;
}
GridLayout{
    margin-left: 8;
    margin-right: 8;
}
</style>>
