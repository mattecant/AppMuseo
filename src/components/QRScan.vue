<template>
    <Page>
        <StackLayout>
        <Label text="Sembra che ci siano problemi con la fotocamera, tocca qui per riprovare" textWrap="true" />
        <Image src="res://outline_camera_alt_black_48" stretch="true" class="imgFotocamera"/>
        <Button text="Avvia fotocamera" @tap="avviaScan" />
        
        </StackLayout>

    </Page>
</template>

<script>

import {BarcodeScanner} from "nativescript-barcodescanner";
const httpModule = require("tns-core-modules/http");
export default {
    data() {
        return {
            pause:false,
            risultato:""
        }
    },
    methods:{
        onScanResult:function(res){
            return console.log(res);
        },
        avviaScan:function(){
            var barcodescanner = new BarcodeScanner();
            barcodescanner.scan({
                formats: "QR_CODE,PDF_417",   // Pass in of you want to restrict scanning to certain types
                cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
                message: "Inquadra il QR code", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
                fullScreen: true,             // Currently only used on iOS; with iOS 13 modals are no longer shown fullScreen by default, which may be actually preferred. But to use the old fullScreen appearance, set this to 'true'. Default 'false'.
                resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
                orientation: "portrait",     // Android only, optionally lock the orientation to either "portrait" or "landscape"
                openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
            }).then((res)=>{
                    this.$navigator.navigate('/info',{ props: { numOggetto: parseInt(res.text)}});
                },
                (err)=>{
                    console.log(err);
                }
            )
        },
    },
    mounted(){
        this.avviaScan();
    }
}
</script>
<style scoped>
Image{
    height: 90;
    width: 90;
}
</style>