import { time } from "@nativescript/core/profiling";
import { selectedIndexProperty } from "@nativescript/core/ui/tab-navigation-base/tab-navigation-base";
import axios from 'axios';
const servername="http://192.168.1.1:3000";
export default{
    oggettiMuseo:()=>{
        return new Promise((res,rej)=>{
            axios({
                method:'get',
                url: `${servername}/oggettiInMuseo`,
                timeout: 1000,
                
            }).then((ris)=>{
                if(ris.status==null) rej();
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
                url: `${servername}/cercaOggetti`,
                timeout: 1000,
                params: {
                  q:valoreRicerca
                }
            }).then((ris)=>{
                if(ris.status==null) rej();
                res(ris.data);
            }).catch(()=>{
                rej();
            })
            // dato che la lista va male, se non c'è niente ritorna -1, che equivale a dire no oggetto
            //res(valoreRicerca.split('').map((c)=>{return c.charCodeAt(0)}));

        })
    },
    descrizioneOggetto:(codice)=>{
        return new Promise((res,rej)=>{
            axios({
                method: 'get',
                url: `${servername}/descrivi`,
                timeout: 1000,
                params: {
                  id:codice
                }
              }).then((ris)=>{
                if(ris.status==null) rej();
                res(ris.data);
            }).catch((err)=>{
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
                url: `${servername}/infoOggetto`,
                timeout: 1000,
                params: {
                  id:codice
                }
              }).then((ris)=>{
                if(ris.status==null) rej();
                res(ris.data);
            }).catch((err)=>{
                console.log(err);
                rej(err);
            })
        })
    }

}

