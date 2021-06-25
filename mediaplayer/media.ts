
class MediaPlayer {

    video: HTMLMediaElement
    plugins: Array<any>
    container: HTMLElement

    constructor(config) { 
        this.video = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer()
        this.iniPlugins()
    };

    play() {
        this.video.play();
    };
    pause() {
        this.video.pause();
    };
    mute(){
        this.video.muted = true
    }
    unmute(){
        this.video.muted = false
    }
    toggleVolumen(){
        this.video.muted === true ? this.unmute() : this.mute();
    }
    toggle(){
        this.video.paused === false ? this.pause() : this.play();
    };

    initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.video.parentNode.insertBefore(this.container, this.video);
        this.container.appendChild(this.video)
    }
    private iniPlugins(){
        
        this.plugins.forEach(plugin => {
            plugin.run(this)
        });
    }
    
};

export default MediaPlayer;
