import ControlsMode from "./timeMode.js";
import TimerCountdown from "./countdown.js";
import { elements } from "./elements.js";

const {
  html,
  appTitle,
  focoBtn,
  curtoBtn,
  longoBtn,
  countdownMinutes,
  countdownSeconds,
  playAndPauseBtn,
  playAndPauseImg,
  playAndPauseText,
  skipBtn,
} = elements;

const modeSelect = ControlsMode({
  html,
  appTitle,
  focoBtn,
  curtoBtn,
  longoBtn,
  countdownMinutes,
});

const timerControls = TimerCountdown({
  countdownMinutes,
  countdownSeconds,
  playAndPauseBtn,
  playAndPauseImg,
  playAndPauseText,
  skipBtn,
});

focoBtn.addEventListener("click", function () {
  modeSelect.activeMode(focoBtn, "foco", "25");
});

curtoBtn.addEventListener("click", function () {
  modeSelect.activeMode(curtoBtn, "descanso-curto", "05");
});

longoBtn.addEventListener("click", function () {
  modeSelect.activeMode(longoBtn, "descanso-longo", "15");
});

playAndPauseBtn.addEventListener("click", () => {
  timerControls.playAndPause();
});

skipBtn.addEventListener("click", () => {
  timerControls.skip();
});