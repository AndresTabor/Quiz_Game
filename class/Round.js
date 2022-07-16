import { Question } from "./Question";

class Round{
    /**Pregunta seleccionada al azar dentro de la categoria.
     * @type {Question}
     */
    // @ts-ignore
    #question;
    
    /**Nivel de dificultad dentro de la categoria.
     * @type {Number}
     */
    // @ts-ignore
    #currentLevel;
    /**
     * Funcion constructora para una ronda de preguntas.
     */
    constructor(){
        this.#currentLevel = 1;
    }

    getCurrentLevel(){
        return this.#currentLevel;
    }

    /**
     * Funcion para obtener una pregunta segun el nivel de dificultad actual.
     * @param {Object[]} data Arreglo de objetos con los datos de las preguntas.
     * @returns {Question} Pregunta seleccionada al azar dentro de la categoria.
     */
    getQuestion(data){
        let questionsByLevel = data.filter( currentQuestion => currentQuestion.category_level === this.#currentLevel );
        let positionQuestion = Math.floor(Math.random()*questionsByLevel.length);
        let questionResult = questionsByLevel[positionQuestion];
        const {question, options, answer, category_level} = questionResult;
        this.#question = new Question(question, options, answer, category_level);
        return this.#question;
    }
    /**
     * Función que aumenta el nivel de la categoria (dificultad).
     */
    increaseDifficulty(){
        this.#currentLevel++;       
    }

}
export { Round };