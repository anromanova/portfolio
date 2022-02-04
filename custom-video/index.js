const videoPlayer = document.querySelector('.video-player');
const video = document.querySelector('.video');
const playButtonControl = document.querySelector('.play-ico');
const playButton = document.querySelector('.video-player-button');
const progress = document.querySelector('.progress-range');
const volume = document.querySelector('.volume-range');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #9b9e9f ${value}%, #9b9e9f 100%)`
})

volume.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #9b9e9f ${value}%, #9b9e9f 100%)`
  })

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

playButtonControl.addEventListener('click', playVideo);
video.addEventListener('click', playVideo);
playButton.addEventListener('click', playVideo);




// playButtonControl.addEventListener('click', () => {
//     if(video.paused) {
//         video.play()
//         playButtonControl.classList.toggle('pause-ico');
//         playButton.classList.toggle('video-player-button_hidden');
//     } else {
//         video.pause()
//         playButtonControl.classList.toggle('pause-ico');
//         playButton.classList.toggle('video-player-button_hidden');
//     }
// })


// video.addEventListener('click', () => {
//     if(video.paused) {
//         video.play()
//         playButtonControl.classList.toggle('pause-ico');
//         playButton.classList.toggle('video-player-button_hidden');
//     } else {
//         video.pause()
//         playButtonControl.classList.toggle('pause-ico');
//         playButton.classList.toggle('video-player-button_hidden');
//     }
// })

// playButton.addEventListener('click', () => {
//     if(video.paused) {
//         video.play()
//         playButtonControl.classList.toggle('pause-ico');
//         playButton.classList.toggle('video-player-button_hidden');
//     } else {
//         video.pause()
//         playButtonControl.classList.toggle('pause-ico');
//         playButton.classList.toggle('video-player-button_hidden');
//     }
// })