let audioplay = document.getElementById('audioPlay');
const BPLAY = document.querySelector('img');

const MUSIC = new Audio('aud/batman.org.mp3');

let checkplay = false;

function playAudio() {

    if (checkplay) {
        MUSIC.pause();
        BPLAY.setAttribute('src', 'img/play-solid-ciano.png');
        checkplay = false;
    } else {
        MUSIC.play();
        MUSIC.loop = false;

        BPLAY.setAttribute('src', 'img/pause-solid-ciano.png');
        checkplay = true;
    }

}