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