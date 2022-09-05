let video = document.getElementById('vid');
let meter = document.getElementById('meter');
let tempoText = document.getElementById('tempoText');
const BPLAY = document.querySelector('img');

const VLRANGE = document.querySelector('input');
const VLPROGRESS = document.querySelector('.volume-progress');





function playPauseVideo() {
    if (video.paused) {
        video.play();
        BPLAY.setAttribute('src', 'img/pause-solid-ciano.png');
    } else {
        video.pause();
        BPLAY.setAttribute('src', 'img/play-solid-ciano.png');
    }
}

/*
function pauseVideo() {
    video.pause();
}
*/

video.addEventListener('timeupdate', function() {

    meter.max = video.duration.toFixed(2);
    meter.value = video.currentTime.toFixed(2);

    tempoText.innerText = (Math.floor(meter.value / 60) + ":" + Math.ceil((meter.value % 60))) + "/" + (Math.floor(meter.max / 60) + ":" + Math.ceil((meter.max % 60)));

})

VLRANGE.addEventListener('input', function(e) {
    VLPROGRESS.style.width = VLRANGE.value + '%';

    video.volume = VLRANGE.value / 100;
}, false);

video.addEventListener('ended', function(e) {
    BPLAY.setAttribute('src', 'img/rotate-left-solid-ciano.png');
})