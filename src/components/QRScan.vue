<template>
    <GridLayout  columns="*, auto, *" rows="*,auto,auto,auto,*" v-if="accessoFotocamera">
        <Label col="1" row="1" text="Cerca un oggettio tramite il QR code" textWrap="true" />
        
        <Image col="1" row="2" src="res://outline_camera_alt_black_48" @tap="startScan" />
        <Label col="1" row="3" text="Clicca qui per provare" @tap="startScan" textWrap="true" />            
    </GridLayout>
    <GridLayout rows="*, auto, 39, auto,auto,*" v-else>
        <Label  col="1" row="1" text="Sembra che ci siano problemi con la fotocamera" textWrap="true" />
        <Button col="1" row="3" text="Clicca qui per riprovare" @tap="testAcces" />
        <Image col="1" row="4" src="res://outline_error_outline_black_48"  />
    
    </GridLayout>
</template>

<script>
import QRapi from "../api/QRCode";
export default { 
    data() {
        return {
            pause:false,
            risultato:"",
            accessoFotocamera:false,
        }
    },
    methods:{
        startScan:function(){
            QRapi.avviaScan().then((res)=>{
                this.$navigator.navigate('/info',{ props: { numOggetto: parseInt(res.text)}});
            },
            (err)=>{
                alert("Errore nell'esecuzione, riprovare")
            })
        },
        testAcces:function(){
            if(QRapi.testAccess()){
                this.accessoFotocamera=true;
                QRapi.avviaScan();
            }
            else{
                alert("Impossibile accedere alla fotocamera, se il problema consiste contattare lo sviluppatore");
                this.accessoFotocamera=false;
            }
        }
    },
    created(){
        this.testAcces()
    }
}
</script>
<style scoped>
Image{
    height: 30%;
    width: 30%;
}
Label{
    font-size: 16;
    text-align: center;
    width: 80%;
}
Button{
    width: 80%;
    font-size: 20;
}
</style>