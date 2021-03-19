const $start = document.getElementById('start');
const $text = document.getElementById('text');
const $musicContainer = document.getElementById("music-container");
const $dotContainer = document.getElementById('dot-container');
const $playBtn = document.getElementById("play");
const $containerGrow = document.getElementsByClassName("container grow");
const $containerShrink = document.getElementsByClassName("container grow");


function showPlayer(){
    $start.style.display = 'none';
    $musicContainer.style.visibility = 'visible';
    $musicContainer.classList.add('animated');
    $dotContainer.style.visibility = 'visible';
    $dotContainer.classList.add('fadeIn');
}

$start.onclick =  showPlayer;

function startPauseMeditation() {
    $start.style.display = 'none';
    $text.style.display = 'block';
    $dotContainer.classList.add('circling');

    const runningDot = $dotContainer.style.animationPlayState === 'running';
    $dotContainer.style.animationPlayState = runningDot ? 'paused' : 'running';

    // const runningGrow = $containerGrow.style.animationPlayState === 'running';
    // $containerGrow.style.animationPlayState = runningGrow ? 'paused' : 'running';

    // const runningShrink = $containerShrink.style.animationPlayState === 'running';
    // $containerShrink.style.animationPlayState = runningShrink ? 'paused' : 'running';


}

$playBtn.onclick =  startPauseMeditation;

