let video = document.getElementById('vid');
let meter = document.getElementById('meter');
let tempoText = document.getElementById('tempoText');





function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

video.addEventListener('timeupdate', function() {

    meter.max = video.duration.toFixed(2);
    meter.value = video.currentTime.toFixed(2);

    tempoText.innerText = (Math.floor(meter.value / 60) + ":" + Math.ceil((meter.value % 60))) + "/" + (Math.floor(meter.max / 60) + ":" + Math.ceil((meter.max % 60)));

})