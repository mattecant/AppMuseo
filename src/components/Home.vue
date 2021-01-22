<template>

<GridLayout rows="auto,*,auto" >
    <StackLayout row="0">
        
    <Label  class="title" text="Museo dell'informatica" textWrap="false" />
    <Image  src="logo" stretch="none" />
    </StackLayout>
    <StackLayout row="2">
        
    <Button  text="Leggi un QR code" @tap="cambiaPagina(0)" />
    <Button  text="Trova un oggetto" @tap="cambiaPagina(1)" />
    <Button  text="Guarda tutti gli oggetti" @tap="cambiaPagina(3)" />
    <Button  class="infobtn" text="Info" @tap="cambiaPagina(4)" />
    </StackLayout>
      
</GridLayout>
</template>

<script>
export default {
    methods:{
        cambiaPagina:function (p) {  
            this.$emit('cambiaPagina',p)
        }
    }
}
</script>

<style scoped>
.title{
    font-size: 25;
    text-align: center;
    margin-top:60;
}
Button{
    font-size: 15;
    background-color: rgb(255, 200, 80);
    width: 75%;
    color: black;
}
.infobtn{
    margin-bottom: 30;
}

</style>