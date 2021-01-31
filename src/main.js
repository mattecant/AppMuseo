import Vue from 'nativescript-vue'
import App from './components/App'

/* uncomment the following lines to enable vue-devtools  */ 
//import VueDevtools from 'nativescript-vue-devtools'
//Vue.use(VueDevtools, { host: 'YOUR_HOST' })

Vue.config.silent =true|| (TNS_ENV === 'production')

import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'
Vue.use(Navigator, { routes })

new Vue({  
    render: h => h(App),
}).$start()
