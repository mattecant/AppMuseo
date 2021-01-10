<template>
<Page>
    <ActionBar :title="menuTitles[currentTab]" flat="true" />
    <BottomNavigation
        @selectedIndexChange="changeIndex"
        :selectedIndex="currentTab"
        >

            <TabStrip class="tabs-elementes">
                <TabStripItem>
                   <Image src="res://outline_camera_alt_black_48" height="20"></Image>
                </TabStripItem>
                
                <TabStripItem>
                   <Image src="res://twotone_search_black_48" height="20"></Image>
                </TabStripItem>
               <TabStripItem>
                   <Image src="res://baseline_home_black_48" height="20"></Image>
                </TabStripItem>
                <TabStripItem>
                   <Image src="res://twotone_list_black_48" height="20"></Image>
                </TabStripItem>
                
                <TabStripItem>
                    <Label text="AA" textWrap="true" />
                    
                    <Image src="res://outline_info_black_48" height="20"></Image>
                </TabStripItem>
                
            </TabStrip>

            <TabContentItem>
                <Label text="QR" textWrap="true" />
                
            </TabContentItem>
            
            <TabContentItem>
                 <Label text="Search" textWrap="true" />
            </TabContentItem>
            
            <TabContentItem>
                <Label text="Home" textWrap="true" />
            </TabContentItem>
            
            <TabContentItem>
                <Label text="All" textWrap="true" />
            </TabContentItem>
            
            <TabContentItem>
                <Label text="info" textWrap="true" />
                
            </TabContentItem>

        </BottomNavigation>
    </Page>
    
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Hello World!',
        menuTitles:[
            'QR Scanner',
            'Search',
            'Home',
            'All element',
            'Info'
        ],
        currentTab:2
      }
    },
    methods:{
        changeIndex:function (tab) {

            if(tab.value==0) {
                this.$navigator.navigate('/qr')
                console.log("navigo a qr");    
            }else
                this.currentTab=tab.value;
            
            
        }
    },

  }
</script>

<style scoped>
TabStrip{
    background-color: aqua;
}
TabStripItem{
    background-color: bisque;
}
TabStripItem:active{
    background-color: orange;
}

</style>
