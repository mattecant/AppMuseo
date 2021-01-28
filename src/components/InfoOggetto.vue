<template>
  <Page>
      <ActionBar :title="isReady?titoloOggetto:'Caricamento in corso'" />
      <ScrollView>
          <ListView for="parteDesc in descrizione" v-if="isReady">
            <v-template >
                <StackLayout>
                    
                <Label 
                    v-if="parteDesc.tipo=='titolo'"
                    :text="parteDesc.testo" 
                    class="titolo" 
                    textWrap="true" />
                <Image 
                    v-if="parteDesc.tipo=='immagine'"
                    :src="parteDesc.src" 
                    stretch="aspectFill" />
                <Label 
                v-if="parteDesc.tipo=='testo'"
                :text="parteDesc.testo" 
                class="testo" 
                textWrap="true" />
                </StackLayout>
                
            </v-template>
          </ListView>
      </ScrollView>
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
       
    }
}
</script>

<style scoped>
ListView{
    padding-top:10;
}
.testo{
    text-align: center;
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