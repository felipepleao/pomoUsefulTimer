const html = document.querySelector("html");
const appTitle = document.querySelector(".app__title-text");
const focoBtn = document.querySelector(".time-mode-list-item--foco");
const curtoBtn = document.querySelector(".time-mode-list-item--descanso-curto");
const longoBtn = document.querySelector(".time-mode-list-item--descanso-longo");
const countdownMinutes = document.querySelector(".time-countdown-minutes");
const countdownSeconds = document.querySelector(".time-countdown-seconds");
const playAndPauseBtn = document.querySelector(".time-controls-playAndPause");
const playAndPauseText = document.querySelector(
  ".time-controls-playAndPause span"
);
const playAndPauseImg = document.querySelector(
  ".time-controls-playAndPause img"
);
const skipBtn = document.querySelector(".time-controls-skip");

export const elements = {
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
};
