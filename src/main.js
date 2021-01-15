import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'

//Vue.use(VueDevtools)
//import Vue from 'nativescript-vue'
Vue.use(VueDevtools, { host: '192.168.1.1' })

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'
Vue.use(Navigator, { routes })
//Vue.registerElement('BarcodeView', () => require('@nativescript-community/ui-barcodeview').BarcodeView);

new Vue({
  
    render: h => h(App),
}).$start()
