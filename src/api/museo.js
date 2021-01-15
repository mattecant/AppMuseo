import { time } from "@nativescript/core/profiling";
import { selectedIndexProperty } from "@nativescript/core/ui/tab-navigation-base/tab-navigation-base";

export default{
    oggettiMuseo:()=>{
        return new Promise((res,rej)=>{
            res([1,3,5,66,4,55,3,1,3,5,66,4,55,3,1,3,5,66,4,55,3,1,3,5,66,4,55,3,1,3,5,66,4,55,3,1,3,5,66,4,55,3]);
        })
    },
    cercaOggetto:()=>{
        return new Promise((res,rej)=>{
            res([1,4]);
        })
    },
    descrizioneOggetto:(id)=>{
        return new Promise((res,rej)=>{
            res([{
                    tipo:'titolo',
                    testo:'Oggetto numero 1',
                },{
                    tipo:'immagine',
                    src:'https://example.com/static/img/1.png',
                },{
                    tipo:'testo',
                    testo:'Questo oggetto è bellissimo!!!'
                }
            ]);
        })
    },
    infoOggetto:async function(id){
        return new Promise((res,rej)=>{
            setTimeout(()=>res({
                nome:'oggettoBello',
                img:'http://192.168.1.1/static/img/1.png',
                desc:'questo è il mio oggetto'
            }), 100);
        })
    }

}

