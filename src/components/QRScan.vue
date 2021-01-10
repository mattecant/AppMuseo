<template>
    <Page>
<BarcodeView  width="100" height="100"  @scanResult="onScanResult"/>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            pause:false
        }
    },
    methods:{
        onScanResult:function(res){
            return console.log(res);
        }
    }
}
</script>
<style>

</style>