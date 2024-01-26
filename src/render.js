import globals from "./globals.js";
import { Game } from "./constants.js";
import { ELEMENTS } from "./constants.js";
import {level} from "./level.js";

export default function render(){

    switch(globals.gameState){
        case Game.PLAYING:
            drawGame();
            break;
        default:
            console.error("Error: Game state invalid");
    }
}

function drawGame(){
    globals.ctx.font  = "14px Emulogic";

    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);

    drawMap(level);
}

function drawMap(level){
    for(let i = 0; i < level.length; i++){
        for(let k = 0; k < level[0].length; k++){
            if(level[i][k] === 1){
                globals.ctx.fillText(ELEMENTS.MURO, 40 + k * 16, 50 + i * 16);
            }
            if(level[i][k] === 2){
                globals.ctx.fillText(ELEMENTS.PERSONAJE, 40 + k * 16, 50 + i * 16);
            }
            if(level[i][k] === 4){
                globals.ctx.fillText(ELEMENTS.DINERO, 40 + k * 16, 50 + i * 16);
            }
        }
    }

}
