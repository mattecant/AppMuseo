<template>
  <Page>
      <ScrollView>
        
      </ScrollView>
  </Page>
</template>

<script>
export default {
    props:{
        numOggetto:{
            type:Number,
            required:true
        }
    },
    data(){
        return {

        }
    },
    onCreate(){
        if(!this.numOggetto)
            this.numOggetto=1;
    }
}
</script>

<style scoped>

</style>