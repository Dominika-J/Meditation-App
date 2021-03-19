const $start = document.getElementById('start');
const $text = document.getElementById('text');
const $musicContainer = document.getElementById("music-container");
const $dotContainer = document.getElementById('dot-container');
const $playBtn = document.getElementById("play");

function showPlayer(){
    $start.style.display = 'none';
    $musicContainer.style.visibility = 'visible';
    $musicContainer.classList.add('animated');
    $dotContainer.style.visibility = 'visible';
    $dotContainer.classList.add('fadeIn');
}

$start.onclick =  showPlayer;

function startMeditation() {
    $start.style.display = 'none';
    $text.style.display = 'block';
    $dotContainer.classList.add('circling');
    $dotContainer.classList.add('circling');
}

$playBtn.onclick =  startMeditation;
