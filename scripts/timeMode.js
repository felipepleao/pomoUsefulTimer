export default function ControlsMode({
  html,
  focoBtn,
  curtoBtn,
  longoBtn,
  countdownMinutes,
}) {
  const modeList = [focoBtn, curtoBtn, longoBtn];

  function selectMode() {
    modeList.forEach((mode) => {
      mode.classList.remove("select");
    });
  }

  function activeMode(btnSelect, btn, minutes) {
    html.setAttribute("data-theme", btn);
    btnSelect.classList.add("select");
    countdownMinutes.textContent = minutes;
  }

  return {
    selectMode,
    activeMode,
  };
}
