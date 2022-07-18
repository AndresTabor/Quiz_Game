/**
 * Crea las filas en la tabla de puntuacion en el DOM,
 * con la data almacenada en localStorage.
 */
export const showScores = () => {
    let dataScore = JSON.parse(localStorage.getItem("topScore"));
    let $bodyTable = document.querySelector(".body-table-score");
    console.log($bodyTable);
    dataScore.map((score,index) =>{
        const $tr = document.createElement("tr");        

        const $th = document.createElement("th");
        $th.scope="row";
        $th.textContent = `${index + 1}`;        
        const $td1 = document.createElement("td");
        $td1.textContent = `${score[0]}`;
        const $td2 = document.createElement("td");
        $td2.textContent = `${score[1]}`;
        $tr.append($th, $td1, $td2);

        $bodyTable.appendChild($tr);
    });
};