import { Player } from "../class/Player";
import { Round } from "../class/Round";
import { data } from "../data/data";
import { showNavbar } from "../views/navbar";

export const starGame = () => {    
    const $container = document.querySelector('#container');
    const ronda = new Round();
    const jugador = new Player("Andres");
    let currentScore = jugador.withdraw()[1];

    ronda.getQuestion(data);
    showNavbar($container,ronda.getCurrentLevel(),currentScore);

};