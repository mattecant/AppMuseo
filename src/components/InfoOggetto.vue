<template>
  <Page>
      <ActionBar :title="isReady?titoloOggetto:'Caricamento in corso'"   />
      
      <StackLayout>
          
              <ListView  for="parteDesc in descrizione" @itemTap="onItemTap"   >
                <v-template>
                  <StackLayout>
                      
                    <Label 
                    v-if="parteDesc.tipo=='titolo'"
                    :text="parteDesc.data" 
                    class="titolo" 
                    textWrap="true" />
                <Image 
                    v-if="parteDesc.tipo=='immagine'"
                    :src="parteDesc.data" 
                    stretch="aspectFill" />
                <Label 
                    v-if="parteDesc.tipo=='testo'"
                    :text="parteDesc.data" 
                    class="testo" 
                    textWrap="true" />
                  </StackLayout>
                </v-template>
              </ListView>
          

      </StackLayout>
  </Page>
</template>

<script>
import apiMuseo from '../api/museo';
export default {
    props:{
        numOggetto:{
            type:Number,
            required:true
        }
    },
    data(){
        return {
            descrizione:[],
            isReady:false,
            titoloOggetto:''
        }
    },
    created(){
        apiMuseo.descrizioneOggetto(this.numOggetto).then((ris)=>{
            this.descrizione=ris.info;
            this.titoloOggetto=ris.nome;
            this.isReady=true;
        }).catch(e=>{
            console.log(e);

        });  
    },
    methods:{
      onItemTap:function(el){
            console.log("AA");
            console.log(el);
      },
  },
}
</script>

<style scoped>
ListView{
    padding-top:10;
}
.testo{
    font-size: 15;
    padding-left: 10;
    padding-right: 10;
}
.titolo{
    font-size:20;
    padding-left: 10;
    padding-right: 10;
}
Image{
    align-self: center;
}
ActionBar{
    background-color: #f44336;
    color:black;
}
</style>