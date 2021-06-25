<<<<<<< HEAD
import MediaPlayer from '../media' 

class AutoPlay{

    constructor(){

    }
    run(player: MediaPlayer){
        player.mute()
        player.play()
    }

}



export default AutoPlay
=======
import MediaPlayer from '../MediaPlayer';

class AutoPlay {
  constructor() {}
  run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}

export default AutoPlay;
>>>>>>> origin
