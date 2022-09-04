const VIDEO = document.getElementById('vid');
const CURRENTTIME =

    function playVideo(secs) {
        VIDEO.play();
        VIDEO.currentTime = secs;
    }

function pauseVideo() {
    VIDEO.pause();
}


console.log(cTimeVideo());

VIDEO.addEventListener('timeupdate', function(e) {


})