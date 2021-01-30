import {BarcodeScanner} from "nativescript-barcodescanner";
export default{
    avviaScan:function(){
        var barcodescanner = new BarcodeScanner();
        return barcodescanner.scan({
            formats: "QR_CODE,PDF_417",
            cancelLabelBackgroundColor: "#333333",
            message: "Inquadra il QR code",
            fullScreen: true,
            resultDisplayDuration: 500,
            orientation: "portrait",    
            openSettingsIfPermissionWasPreviouslyDenied: true
        })
    },
    testAccess:function(){
        return true;
    }
}