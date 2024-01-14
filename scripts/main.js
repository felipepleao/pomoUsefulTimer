import ControlsMode from "./timeMode.js";
import { elements } from "./elements.js";

const { html, focoBtn, curtoBtn, longoBtn } = elements;

const modeSelect = ControlsMode({
  html,
  focoBtn,
  curtoBtn,
  longoBtn,
});

focoBtn.addEventListener("click", function () {
  modeSelect.selectMode();
  modeSelect.activeMode(focoBtn, "foco");
});

curtoBtn.addEventListener("click", function () {
  modeSelect.selectMode();
  modeSelect.activeMode(curtoBtn, "descanso-curto");
});

longoBtn.addEventListener("click", function () {
  modeSelect.selectMode();
  modeSelect.activeMode(longoBtn, "descanso-longo");
});
