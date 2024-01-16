export default function TimerCountdown({
  countdownMinutes,
  playAndPauseBtn,
  playAndPauseImg,
  playAndPauseText,
  skipBtn,
}) {
  function changeState(state) {
    skipBtn.classList.add("hidden");
    playAndPauseText.textContent = state;
    playAndPauseImg.setAttribute("src", "/assets/play.svg");
  }

  function playAndPause() {
    if (playAndPauseBtn.innerText == "Iniciar") {
      playAndPauseText.textContent = "Pausar";
      playAndPauseImg.setAttribute("src", "/assets/pause.svg");
      skipBtn.classList.remove("hidden");
    } else {
      changeState("Iniciar");
    }
  }

  function skip() {
    changeState("Iniciar");
  }

  return {
    playAndPause,
    skip,
  };
}
