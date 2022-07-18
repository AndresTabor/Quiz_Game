class Question{
    /**Preunta a realizar. 
     * @type {String}*/
    // @ts-ignore
    #question;
    /**opciones para responder. 
     * @type {String[]}*/
    // @ts-ignore
    #options;
    /**respuesta correcta. 
     * @type {Number} */
    // @ts-ignore
    #correctAnswer;
    /**Nivel de dificultad de la pregunta. 
     * @type {Number} */
    // @ts-ignore
    #level;

    /**
     * Funcion contructura de la pregunta. 
     * @param {String} question Pregunta a realizar.
     * @param {String[]} options Opciones posibles para responder. 
     * @param {Number} correctAnswer 
     * @param {Number} level 
     */
    constructor(question, options, correctAnswer, level) {
        this.#question = question;
        this.#options = options;
        this.#correctAnswer = correctAnswer; 
        this.#level = level;
    }

    /**
     * Funcion para validar la respuesta seleccionada.
     * @param {Number} option Opcion seleccionada por el jugador.
     * @returns {boolean} True si la opcion es correcta, de lo contrario retorna false.
     */
    validateAnswer(option) {
        return option === this.#correctAnswer;
    }
    /**
     * Funcion para optener atributos de la clase.
     * @returns {Object} Arreglo con la pregunta y las opciones de respuesta.
     */
    getQuestionData(){         
        return {"question": this.#question, "options":this.#options};
    }
    
}
export { Question };