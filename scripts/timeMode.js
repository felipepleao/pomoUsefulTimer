export default function ControlsMode({ html, focoBtn, curtoBtn, longoBtn }) {
  const modeList = [focoBtn, curtoBtn, longoBtn];

  function selectMode() {
    modeList.forEach((mode) => {
      mode.classList.remove("select");
    });
  }

  function activeMode(btnSelect, btn) {
    html.setAttribute("data-theme", btn);
    btnSelect.classList.add("select");
  }

  return {
    selectMode,
    activeMode,
  };
}
