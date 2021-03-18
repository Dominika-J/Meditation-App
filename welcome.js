const $welcomeText = document.getElementById('welcome-text');
const $musicContainer = document.getElementById("music-container");
const $text = document.getElementById('text');
const $dotContainer = document.getElementById('dot-container');


function welcomeText() {
    $welcomeText.style.display = 'none';
    $musicContainer.style.visibility = 'visible';
    $text.style.display = 'block';
    $dotContainer.style.visibility = 'visible';
}

$welcomeText.onclick = welcomeText;