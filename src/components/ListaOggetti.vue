<template>   
<ScrollView>
          
    <ListView  v-if="stato=='visualizza'"  ref="listView" for="item in oggettiVisualizzati"  @itemTap="onItemTap" @loadMoreItems="loadMore">
        <v-template>

        <ListaOggettiOggetto :idOggetto="item" />
        
        </v-template>
    </ListView>
    <ActivityIndicator :busy="stato=='loading'" />
    <GridLayout rows="120,auto,20,auto,20,auto" v-if="stato=='hintCerca'">
        <Label row="1" text="Qui puoi cercare un oggetto" textWrap="true" />
        <Image row="3" src="res://twotone_search_black_48" height="100"></Image>
        <Label row="5" text="Prova subito a cercare qualcosa!" textWrap="true" />
    </GridLayout> 
    <GridLayout rows="120,auto,20,auto,20,auto,20,auto" v-if="stato=='error'">
        <Label row="1" text="Ops, c'è stato un problema" textWrap="true" @tap="loadInit()"/>
        <Image row="3" src="res://outline_error_outline_black_48" height="100" @tap="loadInit()"></Image>
        <Label row="5" text="Prova a controllare la connessione" textWrap="true" @tap="loadInit()"/>
    </GridLayout> 
    <GridLayout rows="120,auto,20,auto,20,auto" v-if="stato=='vuoto'">
        <Label row="1" text="Non abbiamo trovato niente" textWrap="true" />
        <Image row="3" src="res://baseline_help_outline_black_48" height="100"></Image>
        <Label row="5" text="Prova a cercare qualcos'altro" textWrap="true" />
    </GridLayout> 
    
</ScrollView> 
</template>

<script>
import { loadMode } from '@nativescript/core/ui/image'
import MuseoApi from '../api/museo.js'
import ListaOggettiOggetto from './ListaOggettiOggetto'
export default {
  props:{
      tutti:{
          type:Boolean,
          required:false
      },
      cerca:{
          type
          :String,
          required:false
      }
  },
  data(){
      return {
          itemPerPage:5,
          oggettiDisponibili:[],
          oggettiVisualizzati:[],
          isActive:true,
          stato:'loading'
      }
  },

  watch:{
    cerca:function(nuovoValore){
        this.stato="loading"
        console.log(nuovoValore)
        if(nuovoValore=='')
        {
            this.stato="hintCerca";
            console.log("AAA")
        }
        else
        {
            MuseoApi.cercaOggetto(nuovoValore).then(ris=>{
                if(ris.length==0)
                    this.stato="vuoto";
                else
                    this.stato='visualizza';
                this.oggettiDisponibili=ris;
                this.oggettiVisualizzati=[];
                this.loadMore();
            }).catch((e)=>{
                console.log("err"+e);
                console.log("'bdcvjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiaifui")
                this.stato='error';
            });
        }
    }
  },
  mounted(){
    this.loadInit();
  },
  methods:{
      onItemTap:function(el){
            this.$navigator.navigate('/info',{ props: { numOggetto: el.item}});
        },
      
      loadMore:function () {
        let t=((a,b)=>a<b?a:b)(this.oggettiVisualizzati.length + this.itemPerPage, this.oggettiDisponibili.length)
        while(this.oggettiVisualizzati.length < t){  
            this.oggettiVisualizzati.push(this.oggettiDisponibili[this.oggettiVisualizzati.length]);
        }
      },
      loadInit:function(){
        if(this.tutti){
            this.stato="loading";
            MuseoApi.oggettiMuseo().then((ris)=>{
                if(ris==[])
                    this.stato="error";
                else
                    this.stato='visualizza';
                this.oggettiDisponibili=ris;
                this.loadMore();
            }).catch(()=>{
                this.stato="error";
            })
    }
    else{
        this.stato='hintCerca';
    }
      }   
  },
  components: { 
      ListaOggettiOggetto
  },


}
</script>

<style scoped>
Label{
    font-size: 16;
    text-align: center;
}
</style>