<template>
  <GridLayout rows="auto, *" >
    <SearchBar 
        row="0" 
        v-model="inserito" 
        @submit="aggiornaCercato" 
        hint="Cerca..."
        />
    <ListaOggetti 
        row="1" 
        :cerca="cercato"
        :tutti="false" />
                    
  </GridLayout>
                
</template>

<script>
import ListaOggetti from './ListaOggetti'
export default {
  data(){
      return {
          inserito:'',
          cercato:'',
      }
  },
  components:{
      ListaOggetti,
  },
  methods:{
      aggiornaCercato:function(){
          console.log("aa")
          this.cercato=this.inserito;
      }
  }
}
</script>

<style scoped>
SearchBar{
    font-size: 18;
    margin-top:8;
}
</style>