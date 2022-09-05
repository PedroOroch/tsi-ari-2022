let audioplay = document.getElementById('audioPlay');
const BPLAY = document.querySelector('img');

let music = new Audio('aud/batman.org.mp3');

let checkplay = false;

/*
function playAudio() {

    if (checkplay) {
        MUSIC.pause();
        BPLAY.setAttribute('src', 'img/play-solid-batman.png');
        checkplay = false;

    } else {
        MUSIC.play();
        MUSIC.loop = false;

        BPLAY.setAttribute('src', 'img/pause-solid-batman.png');
        checkplay = true;
    }

}

*/

function playPauseAudio() {
    if (music.paused) {
        music.play();
        BPLAY.setAttribute('src', 'img/pause-solid-batman.png');
    } else {
        music.pause();
        BPLAY.setAttribute('src', 'img/play-solid-batman.png');
    }
}

music.addEventListener('ended', function(e) {
    BPLAY.setAttribute('src', 'img/rotate-left-solid-batman.png');
});