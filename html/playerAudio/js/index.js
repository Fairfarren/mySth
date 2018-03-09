class CreateAudio {
    constructor () {
        //按钮申明
        this.$play = document.querySelector('#play');
        this.$pause = document.querySelector('#pause');
        this.$next = document.querySelector('#next');
        this.$like = document.querySelector('#like');
        this.$musickList = document.querySelector('#musickList');
        this.$img = document.querySelector('#img');
        this.$line = document.querySelector('#line');
        this.$lineSpan = document.querySelector('#line>span');
        
        //生成audio
        this.audio = new Audio();
        this.audio.src = '005.mp3';
        this.audio.autoplay = true;
        //按钮绑定
        this.$play.addEventListener('click',this.play.bind(this));
        this.$pause.addEventListener('click',this.pause.bind(this));
        //播放器监听
        this.audio.addEventListener('play', this.audioPlay.bind(this));
        this.audio.addEventListener('pause', this.audioPause.bind(this));
        //起始时间
        this.$allTime = document.querySelector('#allTime');
        this.$startTime = document.querySelector('#startTime');
        this.startTime = {};
        this.alltime = {};
        this.time = '';
    }
    play () {
        this.audio.play();
    }
    audioPlay () {
        this.$play.style.display = 'none';
        this.$pause.style.display = 'block';
        this.$img.setAttribute('class','start');
        
        //总时间和播放时间
        this.allTime = {
            m: Math.floor( this.audio.duration / 60 ) < 10 ? `0${Math.floor( this.audio.duration / 60 )}` : Math.floor( this.audio.duration / 60 ),
            s: ( ( this.audio.duration / 60 ) % 1 * 60 ).toFixed(2).substring(2) < 10 ? `0${( ( this.audio.duration / 60 ) % 1 * 60 ).toFixed(2).substring(2)}` : ( ( this.audio.duration / 60 ) % 1 * 60 ).toFixed(2).substring(2)
        }
        this.$allTime.innerText = `${this.allTime.m}:${this.allTime.s}`
        this.time = setInterval( ()=> {
            this.startTime = {
                m: Math.floor( this.audio.currentTime / 60 ),
                s: Math.floor( this.audio.currentTime < 60 ? this.audio.currentTime : this.audio.currentTime % 60)
            }
            this.startTime.m = this.startTime.m < 10 ? `0${this.startTime.m}` : this.startTime.m;
            this.startTime.s = this.startTime.s < 10 ? `0${this.startTime.s}` : this.startTime.s;
            this.$startTime.innerText = `${this.startTime.m}:${this.startTime.s}`
            // console.log(this.audio.currentTime);
            //进度条
            this.$lineSpan.style.width = `${(this.audio.currentTime / this.audio.duration) * 100}%`
        },500)
    }
    pause () {
        this.audio.pause();
        //停止定时器
        clearInterval(this.time);
    }
    audioPause () {
        this.$play.style.display = 'block';
        this.$pause.style.display = 'none';
        this.$img.setAttribute('class','');
    }
}
//实例
const fm = new CreateAudio();