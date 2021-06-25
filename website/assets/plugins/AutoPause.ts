import MediaPlayer from '../media'

class AutoPause{
        
    private threshold: number;
    player: MediaPlayer;

    constructor(){
        
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibility   = this.handleVisibility.bind(this)
    }
    
    run(player){
        this.player =player
        
        const observador= new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
          });
        
        observador.observe(player.video)

        document.addEventListener("visibilitychange",this.handleVisibility)
    }
    handleIntersection(entries){
        const entry= entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    } 
    handleVisibility(){
       const isVisible = document.visibilityState === "visible"
       if(isVisible){
           this.player.play();
       } 
       else{
           this.player.pause();
       }
    }
}

export default AutoPause