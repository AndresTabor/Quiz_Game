import { backingOut } from '../js/gameController.js';
/**
 * Funcion para componente de pregunta en el DOM.
 * @param {Object} container Contenedor principal del DOM.
 *
 */
export const showRoundComponent = (container, selectChoice) => {
    const $triviaContainer = document.createElement("main");
    
    const $questionContainer = document.createElement("div");
    $questionContainer.classList.add("trivia-container");

    const $questionText = document.createElement("h2");
    $questionContainer.classList.add("trivia-title");
    $questionContainer.append($questionText);

    const $optionsContainer = document.createElement("div");
    $optionsContainer.classList.add("options-container");

    const $optionBtn1 = document.createElement("button");
    $optionBtn1.classList.add("btn-options");
    $optionBtn1.id = "btn-options1";
    $optionBtn1.addEventListener("click", () => selectChoice(0));

    const $optionBtn2 = document.createElement("button");
    $optionBtn2.classList.add("btn-options");
    $optionBtn2.id = "btn-options2";
    $optionBtn2.addEventListener("click", () => selectChoice(1));

    const $optionBtn3 = document.createElement("button");
    $optionBtn3.classList.add("btn-options");
    $optionBtn3.id = "btn-options3";
    $optionBtn3.addEventListener("click", () => selectChoice(2));

    const $optionBtn4 = document.createElement("button");
    $optionBtn4.classList.add("btn-options");
    $optionBtn4.id = "btn-options4";
    $optionBtn4.addEventListener("click", () => selectChoice(3));
    
    $optionsContainer.append($optionBtn1, $optionBtn2, $optionBtn3, $optionBtn4);
    
    const $div = document.createElement("div");

    const $backingOutBtn = document.createElement("button");
    $backingOutBtn.classList.add("btn-backingOut");
    $backingOutBtn.addEventListener("click", backingOut);
    $backingOutBtn.innerText = "Retirarse";

    $div.append($backingOutBtn);

    $triviaContainer.append($questionContainer,$optionsContainer, $div);

    container.append($triviaContainer);
};