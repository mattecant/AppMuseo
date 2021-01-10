<template>
<Page>
<TabView :selectedIndex="tabIndex">
  <TabViewItem title="Tab2">
    <StackLayout>
      <Label text="This is Label in Tab 1" />
    </StackLayout>
  </TabViewItem>
  <TabViewItem title="Tab2">
    <StackLayout>
      <Label text="This is Label in Tab 2" />
    </StackLayout>
  </TabViewItem>
</TabView>

    
     <Label text="Ciao" textWrap="true" />
      
    </Page>
    
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style scoped>

</style>
