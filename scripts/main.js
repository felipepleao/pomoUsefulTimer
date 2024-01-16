import ControlsMode from "./timeMode.js";
import { elements } from "./elements.js";

const { html, appTitle, focoBtn, curtoBtn, longoBtn, countdownMinutes } =
  elements;

const modeSelect = ControlsMode({
  html,
  appTitle,
  focoBtn,
  curtoBtn,
  longoBtn,
  countdownMinutes,
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
