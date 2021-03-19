const $start = document.getElementById('start');
const $text = document.getElementById('text');
const $musicContainer = document.getElementById("music-container");
const $dotContainer = document.getElementById('dot-container');
const $playBtn = document.getElementById("play");
const $animationControl = Array.from(document.getElementsByClassName("animation-control"));


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

    $animationControl.forEach(animation => {
        const running = animation.style.animationPlayState || 'paused';
        animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
      })

    // const isAnimationRunning = $animationControl.forEach()
    
    // style.animationPlayState === 'running';
    // $animationControl.style.animationPlayState = isAnimationRunning ? 'paused' : 'running';
}


$playBtn.onclick =  startPauseMeditation;

