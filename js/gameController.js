import { Player } from "../class/Player.js";
import { data } from "../data/data.js";
import { showNavbar } from "../views/navbar.js";
import { showRoundComponent } from "../views/roundsView.js";
import { Question } from "../class/Question.js";

const $container = document.querySelector('#container');
const jugador = new Player("Andres");
let isPlaying = true;
let currentScore = 0;
let questionToShow;
let currentLevel = 1;
let finalScore;

export const starGame = () => {   
    questionToShow = getQuestion(data);    
    console.log(questionToShow);    
    showNavbar($container,currentLevel,currentScore);
    showRoundComponent($container, selectChoice);    
};

const nextQuestion = () => {
    questionToShow = getQuestion(data); 
    console.log(questionToShow); 
    document.querySelector("#nivel").textContent = `${currentLevel}`;
    document.querySelector("#score").textContent = `${currentScore}`;
}

const selectChoice = (choicePosition) => {    
    alert("Select a choice..." + choicePosition);
    if(questionToShow.validateAnswer(choicePosition)){
        currentLevel ++;
        currentScore += 100;
        jugador.addScore(currentScore);
        console.log(currentLevel, currentScore);
        nextQuestion();
    }else{
        currentLevel = 0;
        currentScore = 0;
        finalScore = jugador.defeat();
        saveScore(finalScore);
        console.log(finalScore);
    }    
}

export const backingOut = () => {      
    saveScore(jugador.withdraw()); 
    isPlaying = false;
};

/**
 * Funcion para obtener una pregunta segun el nivel de dificultad actual.
 * @param {Object[]} dataQuestion Arreglo de objetos con los datos de las preguntas.
 * 
*/
 const getQuestion = (dataQuestion) =>{
    let questionsByLevel = dataQuestion.filter( currentQuestion => currentQuestion.category_level === currentLevel );
    let positionQuestion = Math.floor(Math.random()*questionsByLevel.length);
    let questionResult = questionsByLevel[positionQuestion];
    const {question, options, answer, category_level} = questionResult;
    questionToShow = new Question(question, options, answer, category_level);
    return questionToShow;
};

const saveScore = (newScore) => {
    alert("Backing out..."); 
    let topScore = [];
    if (localStorage.getItem("topScore") !== null) {
        let scoreAlmacenado = JSON.parse( localStorage.getItem("topScore"));        
        topScore = [...scoreAlmacenado, newScore];
        console.log("guardo");
        localStorage.setItem("topScore", JSON.stringify(topScore));
    }else{
        localStorage.setItem("topScore", JSON.stringify(topScore));
        console.log("creo");
    }
};


