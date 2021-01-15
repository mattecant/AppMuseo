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
      elementi:{
          type:Array,
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
  components: { 
      ListaOggettiOggetto
   },

  mounted(){
      if(this.tutti){
          MuseoApi.oggettiMuseo().then((ris)=>{
              this.oggettiDisponibili=ris;
          });
      }
      if(this.elementi){
          this.oggettiDisponibili=this.elementi;
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
  }


}
</script>

<style>

</style>