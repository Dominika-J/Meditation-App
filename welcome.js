const $start = document.getElementById('start');
const $text = document.getElementById('text');
const $musicContainer = document.getElementById("music-container");
const $dotContainer = document.getElementById('dot-container');


function showPlayer(){
    $start.style.display = 'none';
    $musicContainer.style.visibility = 'visible';
    $musicContainer.classList.add('animated');
}

$start.onclick =  showPlayer;



// function startMeditation() {
//     $start.style.display = 'none';
   
//     $text.style.display = 'block';
//     $dotContainer.style.visibility = 'visible';
// }


