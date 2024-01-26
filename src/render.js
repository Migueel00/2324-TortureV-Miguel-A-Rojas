import globals from "./globals.js";
import { ELEMENTS_NUMBERS, Game } from "./constants.js";
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
    const score  = globals.points;
    const life   = globals.life;

    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctx.font  = "12px Emulogic";
    globals.ctx.fillStyle = "#fff";
    globals.ctx.fillText("SCORE" , 35, 20);

    
    globals.ctx.fillText("" + score, globals.canvas.width / 2, 20);
    globals.ctx.font = "14px Emulogic";
    
    for(let i = 0; i < life; i++){
        globals.ctx.fillText(ELEMENTS.VIDA, 260 + i * 16, 20);
    }

    drawMap(level);
}

function drawMap(level){
    for(let i = 0; i < level.length; i++){
        for(let k = 0; k < level[0].length; k++){
            if(level[i][k] === 1){
                globals.ctx.fillText(ELEMENTS.MURO, 35 + k * 16, 50 + i * 16);
            }
            if(level[i][k] === 2){
                globals.ctx.fillText(ELEMENTS.PERSONAJE, 35 + k * 16, 50 + i * 16);
            }
            if(level[i][k] === 4){
                globals.ctx.fillText(ELEMENTS.DINERO, 35 + k * 16, 50 + i * 16);
            }
            if(level[i][k] === ELEMENTS_NUMBERS.ARAÑA){
                globals.ctx.fillText(ELEMENTS.ARAÑA, 35 + k * 16, 50 + i * 16);
            }
        }
    }

}

function drawGameOver(){
    globals.ctx.font = "12px Emulogic";

    globals.ctx.fillText("GAME OVER", globals.canvas.width, globals.canvas.height);
}
