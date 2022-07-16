import { Player } from "../class/Player.js";
import { Round } from "../class/Round.js";
import { data } from "../data/data.js";
import { showNavbar } from "../views/navbar.js";

export const starGame = () => {    
    const $container = document.querySelector('#container');
    const ronda = new Round();
    const jugador = new Player("Andres");
    let currentScore = 0;

    ronda.getQuestion(data);
    showNavbar($container,ronda.getCurrentLevel(),currentScore);
};
