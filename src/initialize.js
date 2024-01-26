import globals from "./globals.js";
import { Game, FPS } from "./constants.js";
import { keydownHandler, keyUpHandler } from "./Event.js";


function initHTMLelements(){

    globals.canvas = document.getElementById("gameScreen");

    globals.ctx = globals.canvas.getContext("2d");

    globals.ctx.imageSmoothingEnabled = false;
}

function initVars(){

    globals.previousCycleMiliseconds = 0;
    globals.deltaTime                = 0;
    globals.frameTimeObj             = 1 / FPS;

    globals.gameState = Game.PLAYING;

    // Estado de las acciones
    globals.action = {
        moveLeft:   false,
        moveRight:  false,
        moveDown:   false,
        moveUp:     false
    }
}

export {
    initHTMLelements,
    initVars,
    initEvents
}

function initCharacter(){

}

function initEvents(){

    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyUpHandler, false);
}