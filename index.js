audio = document.getElementById("music_audio");
audio.volume = 0.1;

button = document.getElementById("music_button");
button.onclick = function () {
  if (audio.paused) {
    audio.play();
    button.innerHTML = "🔇";
  } else {
    audio.pause();
    button.innerHTML = "🔈";
  }
};
