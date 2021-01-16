<template>
  <GridLayout rows="auto, *" >
    <TextField 
        row="0" 
        hint="Cerca" 
        v-model="inserito" 
        @returnPress="aggiornaCercato" 
        returnKeyType="search"
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
          this.cercato=this.inserito;
      }
  }
}
</script>

<style>

</style>