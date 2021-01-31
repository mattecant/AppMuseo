import HomePage from './components/App'
import Tab from './components/Navigatore'
import QRScan from './components/QRScan'
import InfoObj from './components/InfoOggetto'
export const routes = {
  '/home': {
    component: HomePage,
  },
  '/principale': {
    component: Tab,
  },
  '/qr':{
      component: QRScan,
  },
  '/info':{
      component: InfoObj,
  }
}