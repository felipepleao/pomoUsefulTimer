export default function ControlsMode({
  html,
  appTitle,
  focoBtn,
  curtoBtn,
  longoBtn,
  countdownMinutes,
}) {
  const modeList = [focoBtn, curtoBtn, longoBtn];

  function activeMode(btnSelect, nameBtn, minutes) {
    modeList.forEach((mode) => {
      mode.classList.remove("select");
    });
    html.setAttribute("data-theme", nameBtn);
    btnSelect.classList.add("select");
    countdownMinutes.textContent = minutes;

    switch (nameBtn) {
      case "foco":
        appTitle.innerHTML = `
        <h1 class="app__title-text">
        Mantenha o <strong>FOCO</strong> para conquistar seu objetivo!
      </h1>`;
        break;
      case "descanso-curto":
        appTitle.innerHTML = `
        <h1 class="app__title-text">
        Tempo para um <strong>breve descanso!</strong>
      </h1>`;
        break;
      case "descanso-longo":
        appTitle.innerHTML = `
        <h1 class="app__title-text">
        Tempo para um merecido <strong>descanso longo!</strong>
      </h1>`;
        break;
    }
  }

  

  return {
    activeMode,
  };
}
