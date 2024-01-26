import globals from "./globals.js";
import {ELEMENTS_NUMBERS, Game} from "./constants.js";
import { level } from "./level.js";
import { initMoney } from "./initialize.js";


export default function update(){

    //change what the game is doing based on the game state
    switch(globals.gameState){

        case Game.LOADING:
            console.log("Loading assets....");
            break;
        case Game.PLAYING:
            playGame();
            break;
        default:
            console.error("Error: Game State invalid");
            break;
    }
}

function playGame(){


    updateMovementTimer();
    characterMovement();
    updateMoney();
}   

function updateMovementTimer(){

    globals.movementTimer.timeChangeCounter += globals.deltaTime;

    if(globals.movementTimer.timeChangeCounter > globals.movementTimer.timeChangeValue){

        globals.movementTimer.value++;

        globals.movementTimer.timeChangeCounter = 0;
    }
}

function characterMovement(){
    const fila = searchCharacterInArray(ELEMENTS_NUMBERS.PERSONAJE).fila;
    const columna = searchCharacterInArray(ELEMENTS_NUMBERS.PERSONAJE).columna;
    const time = globals.movementTimer.value;

   
        if(globals.action.moveUp && level[fila -1][columna] != 1){
            level[fila - 1][columna] = ELEMENTS_NUMBERS.PERSONAJE;
            level[fila][columna]     = ELEMENTS_NUMBERS.VACIO;
        }else if(globals.action.moveLeft && level[fila][columna - 1] != 1){
            level[fila][columna - 1] = ELEMENTS_NUMBERS.PERSONAJE;
            level[fila][columna]     = ELEMENTS_NUMBERS.VACIO;
        }else if(globals.action.moveDown && level[fila + 1][columna] != 1){
            level[fila + 1][columna] = ELEMENTS_NUMBERS.PERSONAJE;
            level[fila][columna]     = ELEMENTS_NUMBERS.VACIO;
        }else if(globals.action.moveRight && level[fila][columna + 1] != 1){
            level[fila][columna + 1] = ELEMENTS_NUMBERS.PERSONAJE;
            level[fila][columna]     = ELEMENTS_NUMBERS.VACIO;
        }
    
   
}

function searchCharacterInArray(characterNumber){
    let fila;
    let columna;

    for(let i = 0; i < level.length; i++){
        for(let k = 0; k < level[0].length; k++){
            if(level[i][k] === characterNumber){
                fila    = i;
                columna = k;
            }
        }
    }

    return {fila, columna};
}

function updateMoney(){ 
    let isMoney = true;

    for(let i = 0; i < level.length; i++){
        for(let k = 0; k < level[0].length; k++){
            if(level[i][k] === ELEMENTS_NUMBERS.DINERO){
                isMoney = false;           
            }
        }
    }

    if(isMoney){
        initMoney();
        globals.points += 100;
    }


}   


