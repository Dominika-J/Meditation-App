const $start = document.getElementById('start');
const $musicContainer = document.getElementById("music-container");
const $text = document.getElementById('text');
const $dotContainer = document.getElementById('dot-container');


function welcomePage() {
    $start.style.display = 'none';
    $musicContainer.style.visibility = 'visible';
    $text.style.display = 'block';
    $dotContainer.style.visibility = 'visible';
}

$start.onclick = welcomePage;