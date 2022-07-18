import { showScores } from "../js/showScores.js";
/**
 * Crea una tabla de puntuacion en el DOM.
 */
export const createTable = () => {
    const $overley = document.createElement("div");
    $overley.classList.add("overley-container");

    const $tableContainer = document.createElement("div");
    $tableContainer.classList.add("table-container");   

    const $tableTitle = document.createElement("h2");
    $tableTitle.classList.add("table-title");
    $tableTitle.innerHTML = "Tabla de puntuación";
    //tabla
    const $table = document.createElement("table");
    $table.classList.add("table");   
    //cabecera tabla
    const $thead = document.createElement("thead");
    const $tr = document.createElement("tr");
    const $th1 = document.createElement("th");
    $th1.scope="col";
    $th1.innerText = "#";
    const $th2 = document.createElement("th");
    $th2.scope="col";
    $th2.innerText = "PLAYER";
    const $th3 = document.createElement("th");
    $th3.scope="col";
    $th3.innerText = "SCORE";
    //cuerpo tabla
    const $tbody = document.createElement("tbody");
    $tbody.classList.add("body-table-score");

    $tr.append($th1,$th2,$th3);
    $thead.append($tr);
    $table.append($thead,$tbody);
    $tableContainer.append($tableTitle,$table);
    $overley.append($tableContainer);    

    let $body= document.getElementById("container");
    $body.append($overley);
    showScores();
};