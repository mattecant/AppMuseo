<template>
  <Page>
      <StackLayout>
          <Label :text="'Il tuo oggetto è il numero '+numOggetto" textWrap="true" />
          
      </StackLayout>
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