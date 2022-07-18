import { Player } from "../class/Player.js";
import { data } from "../data/data.js";
import { showNavbar } from "../views/navbar.js";
import { showRoundComponent } from "../views/roundsView.js";
import { Question } from "../class/Question.js";
import { createTable } from "../views/scoreHistory.js";

const $container = document.querySelector('#container');
let jugador;
let currentScore = 0;
let questionToShow;
let currentLevel = 1;
let finalScore;

/**
 * Funcion que inicializa la primera pregunta y muestra los componentes en del DOM
 * e instancia un nuevo Jugador.
 */
export const starGame = () => {             
    showNavbar($container,currentLevel,currentScore);
    showRoundComponent($container, selectChoice);
    showQuestion();    
    let name = prompt("Ingrese nombre del jugador");
    if (name === null || name === "") {
        name = "Anonimo";
    } 
    jugador = new Player(name); 
};

/**
 * Funcion que pinta en pantalla la pregunta y sus opciones de respuesta.
 */
const showQuestion = () => {
    questionToShow = getQuestion(data); 
    let dataQuestion = questionToShow.getQuestionData(); 
    const {question, options} = dataQuestion;     
    document.querySelector("#nivel").textContent = `${currentLevel}`;
    document.querySelector("#score").textContent = `${currentScore}`;
    document.querySelector(".trivia-title").textContent = `${question}`;
    options.map( (option, index) => {
        let $btnOption = document.querySelector("#btn-options"+ `${index + 1}`);
        $btnOption.textContent = `${option}`;
    });

}

/**
 * Funcion que valida la respuesta seleccionada
 * -> true aumenta el nivel, atribuye puntaje
 * e invoca la funcion que muestra la siguiente pregunta.
 * -> false ejecutar la funcion finishGame.
 * @param {Number} choicePosition Respuesta seleccionada.
 */
const selectChoice = (choicePosition) => {    
    if(questionToShow.validateAnswer(choicePosition) && currentLevel === 5){
        currentScore = jugador.addScore();
        saveScore(jugador.getDataPlayer());
        alert("¡Ganaste!");
        createTable();
    }else if(questionToShow.validateAnswer(choicePosition) ){
        currentLevel ++;
        currentScore = jugador.addScore();
        showQuestion();
    }else{
        finishGame();
    }    
}

/**
 * Funcion que retira al jugador del juego y almacena en localStorage.
 */
export const backingOut = () => {      
    saveScore(jugador.getDataPlayer()); 
    createTable();
};

/**
 * Funcion para obtener una pregunta segun el nivel de dificultad actual.
 * @param {Object[]} dataQuestion Arreglo de objetos con los datos de las preguntas.
 * @return {Question} Nuevo objeto Question.
*/
 const getQuestion = (dataQuestion) =>{
    let questionsByLevel = dataQuestion.filter( currentQuestion => currentQuestion.category_level === currentLevel );
    let positionQuestion = Math.floor(Math.random()*questionsByLevel.length);
    let questionResult = questionsByLevel[positionQuestion];
    const {question, options, answer, category_level} = questionResult;
    questionToShow = new Question(question, options, answer, category_level);
    return questionToShow;
};

/**
 * Funcion que permite almacenar los datos del jugador en localStorage.
 * @param {Array} newScore Array con el nombre y puntaje del jugador.
 */
const saveScore = (newScore) => {     
    let topScore = [];
    if (localStorage.getItem("topScore") !== null) {
        let scoreAlmacenado = JSON.parse( localStorage.getItem("topScore"));        
        topScore = [...scoreAlmacenado, newScore];
        localStorage.setItem("topScore", JSON.stringify(topScore));
    }else{
        topScore = [newScore];
        localStorage.setItem("topScore", JSON.stringify(topScore));
    }
};

/**
 * Funcion que resetea valores de nivel, puntaje y almacena resultado
 * en localStorage.
 */
const finishGame = () => {
    currentLevel = 0;
    currentScore = 0;
    finalScore = jugador.defeat();
    saveScore(finalScore);
    alert("Haz perdido"); 
    createTable();   
};




