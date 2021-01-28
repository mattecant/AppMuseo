<template>   
<ScrollView>
      
    <ListView  v-if="tutti || oggettiVisualizzati.length!=0"  ref="listView" for="item in oggettiVisualizzati"  @itemTap="onItemTap" @loadMoreItems="loadMore">
      <v-template >  
            <ListaOggettiOggetto :idOggetto="item" />
      </v-template>
    </ListView>
    <GridLayout rows="120,auto,20,auto,20,auto" v-else>
        
        <Label row="1" text="Qui puoi cercare un oggetto" textWrap="true" />
        <Image row="3" src="res://twotone_search_black_48" height="100"></Image>
        <Label row="5" text="Prova subito a cercare qualcosa!" textWrap="true" />
    </GridLayout> >
</ScrollView> 
</template>

<script>
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
      }
  },

  watch:{
    cerca:function(nuovoValore){
        MuseoApi.cercaOggetto(nuovoValore).then(ris=>{
            console.log("THEN");
            this.oggettiDisponibili=[];
            this.oggettiVisualizzati=ris;
            this.loadMore();
        }).catch((e)=>{
            console.log("err"+e);
        });
    }
  },
  mounted(){
      if(this.tutti){
        MuseoApi.oggettiMuseo().then((ris)=>{
            this.oggettiDisponibili=ris;
            this.loadMore();
        });
      }
  },
  methods:{
      onItemTap:function(el){
          //console.log(el);
            this.$navigator.navigate('/info',{ props: { numOggetto: el.item}});
        },
      
      loadMore:function () {
        console.log("loadMoreCalled");
        console.log(this.oggettiDisponibili);
        console.log(this.oggettiVisualizzati);
        let t=((a,b)=>a<b?a:b)(this.oggettiVisualizzati.length + this.itemPerPage, this.oggettiDisponibili.length)
        while(this.oggettiVisualizzati.length < t){  
            this.oggettiVisualizzati.push(this.oggettiDisponibili[this.oggettiVisualizzati.length]);
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