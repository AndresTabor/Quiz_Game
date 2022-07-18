class Player {
    /**nombre del jugador.
     * @type {String}
    */
    // @ts-ignore
    #name;
    /** puntaje acumulado del jugador.
     * @type {Number}
    */
    // @ts-ignore
    #score;
    /** 
     * numero de intentos del jugador.
     * @type {Number}
    */
    // @ts-ignore
    #attempts;

    /**
     * Función constructora para un nuevo jugador.
     * @param {String} name del jugador.
    */
    constructor(name){
        this.#name = name;
        this.#score = 0;
        this.#attempts = 1;
    }
    /**
     * Funcion que aumenta el puntaje del jugador.
     * 
     * @return {Number} Retorna el puntaje del jugador.
     */
    addScore(){
       this.#score += 100;
       return this.#score; 
    }
    /**
     * Función que actualiza los intentos del jugador a cero.
     */
    defeat(){
        this.#attempts -= 1;
        this.#score = 0;
        return this.getDataPlayer();
    }
    /**
     * Función que accede a los datos del jugador.
     * @returns {Array}Nombre y puntaje acumulado del jugador.
     */
    
    getDataPlayer(){
        return [this.#name, this.#score];
    }
    
}

export { Player };