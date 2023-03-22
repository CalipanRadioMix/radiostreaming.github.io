const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const volumeSlider = document.getElementById("volume");

// Actualizar el volumen del elemento de audio cuando se cambia el valor de la barra de volumen
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value / 100;
});

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});
