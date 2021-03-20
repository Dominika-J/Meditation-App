const $textStart = document.getElementById('text-start');
const $body = document.body;

const $animationControl = Array.from(document.getElementsByClassName('animation-control'));


function showPlayer(){
    $body.classList.add('initialized');
}
    $textStart.onclick =  showPlayer;


// function showPlayer(){
//     $textStart.style.display = 'none';
//     $musicContainer.style.visibility = 'visible';
//     $musicContainer.classList.add('animated');
//     $dotContainer.style.visibility = 'visible';
//     $dotContainer.classList.add('fadeIn');
// }

// $textStart.onclick =  showPlayer;

// function textStartPauseMeditation() {
//     $textStart.style.display = 'none';
//     $text.style.display = 'block';
//     $dotContainer.classList.add('circling');

//     $animationControl.forEach(animation => {
//         const running = animation.style.animationPlayState || 'paused';
//         animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
//       })
//     }

// $playBtn.onclick =  textStartPauseMeditation;

