var audio = document.getElementById('audio');
var PLAY = document.getElementById('PLAY');
var count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
        PLAY.innerHTML = "<b>PAUSE &#9208;</b>";
    } else {
        count = 0;
        audio.pause();
        PLAY.innerHTML = "<b>PLAY &#9658;</b>";
    }
}

function stop() {
    playPause();
    audio.pause();
    audio.currentTime = 0;
    count = 0;
    PLAY.innerHTML = "<b>PLAY &#9658;</b>";
}
