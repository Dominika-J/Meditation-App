const $body = document.body;
const $textStart = document.getElementById("text-start");
const $playBtn = document.getElementById("play");
const $animationControl = Array.from(
  document.getElementsByClassName("animation-control")
);

function showPlayer() {
  $body.classList.add("initialized");
}

$textStart.onclick = showPlayer;

function toggleMeditation() {
  const isPlaying = $body.classList.contains("play");

  if (isPlaying) {
    $body.classList.add("pause");
    $body.classList.remove("play");
  } else {
    $body.classList.add("play");
    $body.classList.remove("pause");
  }

}

$playBtn.onclick = toggleMeditation;


