export default function TimerCountdown({
  countdownMinutes,
  playAndPauseBtn,
  playAndPauseImg,
  skipBtn,
}) {
  function play() {
    playAndPauseBtn.innerText = "Pausar";
    playAndPauseImg.attributes.src = "/assets/pause.svg";
    skipBtn.classList.remove("hidden");
  }

  function pause() {
    skipBtn.classList.add("hidden");
    playAndPauseBtn.innerText = "Iniciar";
    playAndPauseImg.attributes.src = "/assets/play.svg";
  }

  return {
    play,
    pause,
  };
}
