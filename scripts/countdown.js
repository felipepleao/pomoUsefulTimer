export default function TimerCountdown({
  countdownMinutes,
  countdownSeconds,
  playAndPauseBtn,
  playAndPauseImg,
  playAndPauseText,
  skipBtn,
}) {
  let timingController = null;
  let minutes = Number(countdownMinutes.textContent);
  let seconds = Number(countdownSeconds.textContent);
  let decressMinutes = minutes;
  let decressSeconds = seconds;

  function resetTimerDisplay() {
    decressMinutes = minutes;
    decressSeconds = seconds;
    countdownMinutes.textContent = String(minutes).padStart(2, "0");
    countdownSeconds.textContent = String(seconds).padStart(2, "0");
    clearInterval(timingController);
  }

  function timerDisplay() {
    timingController = setInterval(() => {
      if (decressSeconds <= 0) {
        decressSeconds = 60;
        --decressMinutes;
      }

      --decressSeconds;

      countdownMinutes.textContent = String(decressMinutes).padStart(2, "0");
      countdownSeconds.textContent = String(decressSeconds).padStart(2, "0");

      if (decressMinutes == 0 && decressSeconds == 0) {
        resetTimerDisplay();
      }
    }, 1000);
  }

  function changeState(state) {
    skipBtn.classList.add("hidden");
    playAndPauseText.textContent = state;
    playAndPauseImg.setAttribute("src", "./assets/play.svg");
  }

  function playAndPause() {
    if (playAndPauseBtn.innerText == "Iniciar") {
      timerDisplay();
      playAndPauseText.textContent = "Pausar";
      playAndPauseImg.setAttribute("src", "./assets/pause.svg");
      skipBtn.classList.remove("hidden");
    } else {
      changeState("Iniciar");
      clearInterval(timingController);
    }
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function skip() {
    changeState("Iniciar");
    resetTimerDisplay();
  }

  return {
    playAndPause,
    updateMinutes,
    skip,
  };
}
