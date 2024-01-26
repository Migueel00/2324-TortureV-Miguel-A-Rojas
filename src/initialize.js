import globals from "./globals.js";
import { Game, FPS, ELEMENTS, ELEMENTS_NUMBERS } from "./constants.js";
import { keydownHandler, keyUpHandler } from "./Event.js";
import { level } from "./level.js";
import Timer from "./Timer.js";


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

    globals.points  = 0;

    globals.life    = 3;
}


function initGameScreenCharacters(){
    initCharacter();
    initMoney();
    initSpider();
}

function initCharacter(){
    const fila      = 7;
    const columna   = 8;
    const character = ELEMENTS_NUMBERS.PERSONAJE;

    level[fila][columna] = character;
}

export function initMoney(){
    const money  = ELEMENTS_NUMBERS.DINERO;
    const filas   = level.length;
    const columna = level[0].length;
    while(true){
        const filaAleatoria     = Math.floor(Math.random() * filas);
        const columnaAleatoria  = Math.floor(Math.random() * columna);

        if(level[filaAleatoria][columnaAleatoria] === 0){
            level[filaAleatoria][columnaAleatoria] = money;
            break;
        }
    }
   
}

export function initSpider(){
    //border1 = level[1][1];  
    // border2 = level[10][1];
    // border3 = level[1][15];
    // border4 = level[10][15];
    const spider  = ELEMENTS_NUMBERS.ARAÑA;

    const randomBorder = Math.floor(Math.random() * 4);
    
    if(randomBorder === 0){
        level[1][1] = spider;
    }else if(randomBorder === 1){
        level[10][1] = spider;
    }else if(randomBorder === 2){
        level[1][15] = spider;
    }else if(randomBorder === 3){
        level[10][15] = spider;
    }
}

function initEvents(){

    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyUpHandler, false);
}

function initTimers(){

    globals.movementTimer = new Timer(0, 0,2);
}

export {
    initHTMLelements,
    initVars,
    initEvents,
    initGameScreenCharacters,
    initTimers
}
