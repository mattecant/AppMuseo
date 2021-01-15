import HomePage from './components/App'
import Tab from './components/Tab1'
import QRScan from './components/QRScan'
import InfoObj from './components/InfoOggetto'
export const routes = {
  '/home': {
    component: HomePage,
  },
  '/tab1': {
    component: Tab,
  },
  '/qr':{
      component: QRScan,
  },
  '/info':{
      component: InfoObj,
  }
}