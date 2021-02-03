import HomePage from './components/App'
import Tab from './components/Navigatore'
import QRScan from './components/QRScan'
import InfoObj from './components/InfoOggetto'
export const routes = {
  '/principale': {
    component: Tab,
  },
  '/info':{
      component: InfoObj,
  }
}