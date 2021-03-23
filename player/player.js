const $musicContainer = document.getElementById("music-container");
const $playBtn = document.getElementById("play");
const $prevBtn = document.getElementById("prev");
const $nextBtn = document.getElementById("next");
const $audio = document.getElementById("audio");

const SONGS = ["sound1", "sound2", "sound", "sound3"];
let songIndex = 0;

// Initially load song details into DOM
loadSong(SONGS[songIndex]);

// Update song details
function loadSong(song) {
  $audio.src = `mp3/${song}.mp3`;
}

// Play song
function playSong() {
  $musicContainer.classList.add("play");
  $playBtn.querySelector("i.fas").classList.remove("fa-play");
  $playBtn.querySelector("i.fas").classList.add("fa-pause");
  $audio.play();
  toggleButtonState({ state: false });
}

// Pause song
function pauseSong() {
  $musicContainer.classList.remove("play");
  $playBtn.querySelector("i.fas").classList.add("fa-play");
  $playBtn.querySelector("i.fas").classList.remove("fa-pause");
  $audio.pause();
  toggleButtonState({ state: true });
}

function toggleButtonState({ state }){
  $prevBtn.disabled = state;
  $nextBtn.disabled = state;
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = SONGS.length - 1;
  }

  loadSong(SONGS[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > SONGS.length - 1) {
    songIndex = 0;
  }

  loadSong(SONGS[songIndex]);

  playSong();
}

$playBtn.addEventListener("click", () => {
  const isPlaying = $musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

$prevBtn.addEventListener("click", prevSong);
$nextBtn.addEventListener("click", nextSong);

// Song ends
$audio.addEventListener("ended", nextSong);
