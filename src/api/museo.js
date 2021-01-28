import { time } from "@nativescript/core/profiling";
import { selectedIndexProperty } from "@nativescript/core/ui/tab-navigation-base/tab-navigation-base";
import axios from 'axios';
const servername="http://192.168.1.1/";
export default{
    oggettiMuseo:()=>{
        return new Promise((res,rej)=>{
            axios.get(servername+'oggettiInMuseo').then((ris)=>{
                res(ris.data);
            }).catch(()=>{
                rej();
            })
        });
    },
    cercaOggetto:(valoreRicerca)=>{
        return new Promise((res,rej)=>{
            console.log('Cerco:'+valoreRicerca+'a '+`${servername} cercoOggetto`);
            axios({
                method: 'get',
                url: `${servername}cercaOggetti`,
                data: {
                  q:valoreRicerca
                }
              }).then((ris)=>{
                res(ris.data);
            }).catch((err)=>{
                console.log(err);
                rej(err);
            })
            // dato che la lista va male, se non c'è niente ritorna -1, che equivale a dire no oggetto
            //res(valoreRicerca.split('').map((c)=>{return c.charCodeAt(0)}));

        })
    },
    descrizioneOggetto:(codice)=>{
        return new Promise((res,rej)=>{
            axios({
                method: 'get',
                url: `${servername}descrivi`,
                data: {
                  id:codice
                }
              }).then((ris)=>{
                res(ris.data);
            }).catch((err)=>{
                console.log(err);
                rej(err);
            })
            /*
            res({
                info:[
                    {
                        tipo:'titolo',
                        testo:'Oggetto numero 1',
                    },{
                        tipo:'immagine',
                        src:'http://192.168.1.1/static/img/1.png',
                    },{
                        tipo:'testo',
                        testo:'Questo oggetto è bellissimo!!!'
                    }
                ],
                nome:'Il primo oggetto bellissimo'
            });*/
        })
    },
    infoOggetto:(codice)=>{
        return new Promise((res,rej)=>{
            axios({
                method: 'get',
                url: `${servername}infoOggetto`,
                data: {
                  id:codice
                }
              }).then((ris)=>{
                res(ris.data);
            }).catch((err)=>{
                console.log(err);
                rej(err);
            })
        })
    }

}

