const $musicContainer = document.getElementById("music-container");
const $playBtn = document.getElementById("play");
const $prevBtn = document.getElementById("prev");
const $nextBtn = document.getElementById("next");
const $audio = document.getElementById("audio");

const SONGS = ["sound", "sound1", "sound2", "sound3"];
let SONG_INDEX = 0;

// Initially load song details into DOM
loadSong(SONGS[SONG_INDEX]);

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
}

// Pause song
function pauseSong() {
  $musicContainer.classList.remove("play");
  $playBtn.querySelector("i.fas").classList.add("fa-play");
  $playBtn.querySelector("i.fas").classList.remove("fa-pause");
  $audio.pause();
}

// Previous song
function prevSong() {
  SONG_INDEX--;

  if (SONG_INDEX < 0) {
    SONG_INDEX = SONGS.length - 1;
  }

  loadSong(SONGS[SONG_INDEX]);

  playSong();
}

// Next song
function nextSong() {
  SONG_INDEX++;

  if (SONG_INDEX > SONGS.length - 1) {
    SONG_INDEX = 0;
  }

  loadSong(SONGS[SONG_INDEX]);

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
