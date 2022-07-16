/**
 * 
 * @param {Object} container Contenedor pirncipal.
 * @param {Number} level Nivel actual a mostrar en pantalla.
 * @param {Number} score Puntaje acumulado del jugador.
 */
export const showNavbar = (container, level, score) => {

    const $infoContainer = document.createElement("div");
    $infoContainer.classList.add("info-container");

    const $roundInfo = document.createElement("div");
    $roundInfo.classList.add("round-info");

    const $textRound = document.createElement("span");
    $textRound.innerText = `Ronda: ${level}`;
    $roundInfo.append($textRound);

    const $scoreInfo = document.createElement("div");
    $scoreInfo.classList.add("score-info");

    const $textScore = document.createElement("span");
    $textRound.innerText = `Score: ${score}`;
    $scoreInfo.append($textScore);

    const $logo = document.createElement("div");
    $logo.classList.add("logo-tributo");

    $infoContainer.append($roundInfo, $scoreInfo, $logo);

    container.append($infoContainer);
};