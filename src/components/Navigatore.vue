<template>
<Page> 
    
    <ActionBar :title="menuTitles[currentTab]" flat="true"/>
    <BottomNavigation
        @selectedIndexChange="changeIndex"
        :selectedIndex="currentTab"
        >

            <TabStrip class="tabs-elementes">
                <TabStripItem>
                   <Image src="res://outline_camera_alt_black_48" height="20"></Image>
                   <Label text="QR code" textWrap="true" />
                </TabStripItem>
                
                <TabStripItem>
                   <Image src="res://twotone_search_black_48" height="20"></Image>
                    <Label text="Cerca" textWrap="true" />
                </TabStripItem>

               <TabStripItem>
                   <Image src="res://baseline_home_black_48" height="20"></Image>
                    <Label text="Home" textWrap="true" />
                </TabStripItem>
                
                <TabStripItem>
                   <Image src="res://twotone_list_black_48" height="20"></Image>
                    <Label text="Tutti" textWrap="true" />
                </TabStripItem>
                
                <TabStripItem>
                    <Image src="res://outline_info_black_48" height="20"></Image>
                    <Label text="Info" textWrap="true" />
                </TabStripItem>
                
            </TabStrip>

            <TabContentItem>    <QRScanner/>    </TabContentItem>
            
            <TabContentItem>    <CercaOggetto/>     </TabContentItem>
            
            <TabContentItem>    <Home  @cambiaPagina="changeTab"/>     </TabContentItem>
            
            <TabContentItem>    <ListaOggetti :tutti="true"/>     </TabContentItem>
            
            <TabContentItem>    <Informazioni/>     </TabContentItem>

        </BottomNavigation>
    </Page>
    
</template>
<script >
import ListaOggetti from './ListaOggetti';
import CercaOggetto from './Cerca'
import Informazioni from './InformazioniApp'
import QRScanner from './QRScan'
import Home from './Home'
const httpModule = require("tns-core-modules/http");
  export default {
    data() {
      return {
        msg: 'Hello World!',
        menuTitles:[
            'QR Scanner',
            'Cerca',
            'Home',
            'Oggetti',
            'Info'
        ],
        currentTab:2
      }
    },
    methods:{
        changeIndex:function (tab) {
                this.currentTab=tab.value;           
        },
        mandaDati:function(){
           this.$navigator.navigate('/info',{props:{numOggetto:2}})
        },
        changeTab:function(nt){
            this.currentTab=nt;
        },
    },
    components:{
        ListaOggetti,
        CercaOggetto,
        Home,
        Informazioni,
        QRScanner,
    }
  }
</script>

<style scoped>

TabStripItem{
    background-color: whitesmoke;
}
TabStripItem:active{
    background-color: #ff7961;   
}
Label{
color:black;
}
ActionBar{
    background-color: #f44336;
    color:black;
}
</style>
