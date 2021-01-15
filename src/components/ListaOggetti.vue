<template>   
<ScrollView>
    <ListView for="obj in oggettiVisualizzati"  @itemTap="onItemTap" @loadMoreItems="loadMore">
      <v-template>  
            <ListaOggettiOggetto :id="obj"  textWrap="true" />
      </v-template>
    </ListView>
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
          type:String,
          required:false
      }
  },
  data(){
      return {
          itemPerPage:5,
          oggettiDisponibili:[],
          oggettiVisualizzati:[-1],
          actIndex:0,
      }
  },

  computed:{
    oggettiDisponibili:function(){
        if(this.tutti){
            MuseoApi.oggettiMuseo().then((ris)=>{
                this.oggettiDisponibili=ris;
            });
        }
        if(this.cerca){
            MuseoApi.cercaOggetto(this.cerca).then(ris=>{
                this.oggettiDisponibili=ris;
            }); 
        }
        }  
  },
  methods:{
      onItemTap:function(el){
      },
      loadMore:function () {
          if(!this.oggettiVisualizzati[this.actIndex])
              return;
          let t=this.actIndex+this.itemPerPage;
          while(this.actIndex<t && this.oggettiDisponibili[this.actIndex]){  
            this.oggettiVisualizzati.push(this.oggettiDisponibili[this.actIndex]);
            this.actIndex++;
          }
      }
  },
  components: { 
      ListaOggettiOggetto
  },


}
</script>

<style>

</style>