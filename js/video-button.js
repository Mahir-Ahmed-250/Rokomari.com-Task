const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = document.getElementById('play-button')


playButton.addEventListener('click', (e) => {
    if (video.paused) {
        video.play()

    }
    else {
        video.pause()

    }
})