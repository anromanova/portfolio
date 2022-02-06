const videoPlayer = document.querySelector('.video-player');
const video = document.querySelector('.video');
const playButtonControl = document.querySelector('.play-ico');
const playButton = document.querySelector('.video-player-button');
const progress = document.querySelector('.progress-range');
const volume = document.querySelector('.volume-range');
const volumeButton = document.querySelector('.volume-ico');
const currentTimeElement = document.querySelector('.current-time');
const durationTimeElement = document.querySelector('.duration-time');
const control = document.querySelector('.controls');
const fullscreen = document.querySelector('.exp-ico')
  
// Play/Pause video function
function playVideo () {
        if(video.paused) {
            video.play()
            playButtonControl.classList.toggle('pause-ico');
            playButton.classList.toggle('video-player-button_hidden');
        } else {
            video.pause()
            playButtonControl.classList.toggle('pause-ico');
            playButton.classList.toggle('video-player-button_hidden');
        }
}

// Show current time and video duration
function currentTime () {
    let currMin = Math.floor(video.currentTime / 60)
    let currSec = Math.floor(video.currentTime - currMin * 60)
    let durMin = Math.floor(video.duration / 60)
    let durSec = Math.floor(video.duration - durMin * 60)

    currentTimeElement.innerHTML = `${currMin}:${currSec < 10 ? '0'+currSec : currSec}` 
    durationTimeElement.innerHTML = `${durMin}:${durSec < 10 ? '0'+durSec : durSec}`
}

// Сhange the video with the slider
function rangeVideo () {
  const value = ((video.currentTime / video.duration)* 100);
  progress.value = value;
  progress.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #9b9e9f ${value}%, #9b9e9f 100%)`
}

// Сhange the video progress bar with the slider 
function rangeProgressBar (e) {
  const progressTime = (e.offsetX / progress.offsetWidth)*video.duration;
  video.currentTime = progressTime;
}

// Сhange the sound with the slider
function rangeVolume () {
      const value = this.value;
      this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value*100}%, #9b9e9f ${value*100}%, #9b9e9f 100%)`
      video.volume = value;
      if (video.volume === 0) {
        volumeButton.classList.remove('volume-ico');
        volumeButton.classList.add('mute-ico');
      }
      else {
        volumeButton.classList.remove('mute-ico');
        volumeButton.classList.add('volume-ico');
      }
}

// mute function
function muteVolume () {
    if (video.volume === 0) {
        video.volume = 0.4;
        volume.value = video.volume;
        volumeButton.classList.toggle('volume-ico');
        volumeButton.classList.toggle('mute-ico');
      }
      else {
        video.volume = 0;
        volume.value = video.volume;
        volume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${0}%, #9b9e9f ${100}%, #9b9e9f 100%)`
        volumeButton.classList.toggle('mute-ico');
        volumeButton.classList.toggle('volume-ico');
      }
}

//fullscreen function
function fullscrn () {
  if (!document.fullscreenElement) {
    videoPlayer.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

video.addEventListener('timeupdate', rangeVideo);
video.addEventListener('click', playVideo);
video.addEventListener('timeupdate', currentTime);
playButtonControl.addEventListener('click', playVideo);
playButton.addEventListener('click', playVideo);
volume.addEventListener('mousemove', rangeVolume);
volumeButton.addEventListener('click', muteVolume);
progress.addEventListener('click', rangeProgressBar)
fullscreen.addEventListener('click',fullscrn);


let mousedown = false;
control.addEventListener('mousedown', () => mousedown = true);
control.addEventListener('mouseup', () => mousedown = false);



  // progress.addEventListener('input', function() {
  //   const value = ((video.currentTime / video.duration)* 100);
  //   progress.value = value;
  //   progress.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #9b9e9f ${value}%, #9b9e9f 100%)`
  // })


// Нужно: Ползунок при нажатии на кружок двигается за мышкой. 
// Сейчас - он двигается за мышкой без нажатия :) mousedown вместо mousemove не помог 

// progress.addEventListener('click', ()=>{
//   video.addEventListener('timeupdate', rangeVideo);
// });
// progress.addEventListener('input', ()=>{
//   progress.addEventListener('mousemove', rangeProgressBar);
// });