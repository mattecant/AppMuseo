

<template>

  <GridLayout rows="auto,auto,auto,auto,auto,auto,auto,auto,*" >
      
    <Label row="0" text="Applicazione museo" class="Titolo"  textWrap="true" />

    <Label row="1" text="Applicazione" class="list-title" @tap="setStato(1)" textWrap="true" />
    <StackLayout row="2" :style="{'height':'5'}" ref="stack1">
        <Label v-show="f1" text="Sviluppatore: " class="subtitles" textWrap="true" />
        <Label v-show="f1" text="Canton Matteo" class="subinfo" textWrap="true" />
        <Label v-show="f1" text="Codice sorgente:" class="subtitles" textWrap="true" />
        <Label v-show="f1" text="https://github.com/mattecant/AppMuseo" class="subinfo" textWrap="true" />
    </StackLayout>
     
    
    <Label row="3"  text="Informazioni utili"  class="list-title" @tap="setStato(2)" textWrap="true" />
    <StackLayout row="4" :style="{'height':'5'}" ref="stack2">
        <Label v-show="f2" text="Applicazione realizzata per il museo dell'informatica" class="subtitles" textWrap="true" />
        <Label v-show="f2" text="Contatto sviluppatore:" class="subtitles" textWrap="true" />
        <Label v-show="f2" text="matteo.canton2@gmail.com" class="subinfo" textWrap="true" />
    </StackLayout>        
 
    <Label row="5"  text="Note sviluppo" class="list-title" @tap="setStato(3)" textWrap="true" />
    <StackLayout row="6"  :style="{'height':'5'}"  ref="stack3">
        <Label v-show="f3" text="Ringraziamenti"  class="subtitles" textWrap="true" />
        <Label v-show="f3" text="Si ringraziano gli sviluppatori della versione 1.0 per la documentazione degli oggetti presenti nel museo" class="subinfo" textWrap="true" />
        <Label v-show="f3" text="Licenza" class="subtitle" textWrap="true" />
        <Label v-show="f3" text="Applicazione rilasciata con licenza Aoache 2.0" class="subtitles" textWrap="true" />
    </StackLayout>

    </GridLayout>   
</template>
<script>
const Animation = require("tns-core-modules/ui/animation").Animation;
import { Color } from "@nativescript/core";
const AnimationCurve = require("tns-core-modules/ui/enums").AnimationCurve;
export default {
    data(){
        return {
            stato:0,
            f1:false,
            f2:false,
            f3:false,
            altezze:[100,75,175]
        }
    },
    methods:{
        setStato:function(s){
            if(this.stato==s)
                this.stato=0;
            else
                this.stato=s;
        },
    },
    watch:{
        stato:function(succ, prec){
            if(prec!=0){        
                setTimeout(()=>{
                    this['f'+prec]=false;
                },300);
                this.$refs['stack'+prec].nativeView.animate({       //animazione per la chiusura della finestra aperta
                    height:5,
                    duration: 300,
                    curve: AnimationCurve.easeIn
                });
            }
            if(succ!=0)
            {
                this.$refs['stack'+succ].nativeView.animate({       //animazione per l'apertura della finestra
                    height:this.altezze[succ-1],
                    duration: 500,
                    curve: AnimationCurve.easeIn
                });
                this['f'+succ]=true;
            }

        }
    }
}
</script>
<style scoped>

.subtitles{
    font-size: 16;
    margin-left: 8;
}
.Titolo{
    font-size: 30;
     text-align: center;
    padding-top: 10;
    
}
.subinfo{
    font-size: 14;
    margin-left: 16;
}
.list-title{
    font-size: 23;
    margin-top:35;
    margin-bottom:5;
}
GridLayout{
    margin-left: 8;
    margin-right: 8;
}
StackLayout{
    overflow: auto;
    height: 0;
}
</style>>
