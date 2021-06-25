
 import MediaPlayer from './media'
 import AutoPlay from './plugins/AutoPlay'
 import AutoPause from './plugins/AutoPause'
 import Ads from './plugins/ads'

const video = document.querySelector("video");
const play: HTMLElement = document.querySelector("#play");  
const mute: HTMLElement = document.querySelector("#mute");  
  
const player = new MediaPlayer({ el: video, plugins:[
    new AutoPlay(), new AutoPause(), new Ads()
] });
play.onclick = () => player.toggle();
mute.onclick = () => player.toggleVolumen();


/* if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('../sw.js').catch(error => {
     console.log(error.message);
   });
 } */
