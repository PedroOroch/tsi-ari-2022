let video = document.querySelector('video');


video.addEventListener('timeupdate', function(timeUpt) {
    console.log(timeUpt.timeStamp)
})