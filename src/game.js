import globals from "./globals.js";
import { initHTMLelements, initVars,  initEvents, initGameScreenCharacters} from "./initialize.js";
import update from "./update.js";
import render from "./render.js";


window.onload = init;

function init(){

    // Iniciar elementos html
    initHTMLelements();

    // Iniciar variables del juego
    initVars();

    // Start first frame request
    window.requestAnimationFrame(gameLoop);

    //Init events
    initEvents();

    //init characters
    initGameScreenCharacters();

}


function gameLoop(timeStamp){
    window.requestAnimationFrame(gameLoop, globals.canvas);

    const elapsedCycleSeconds = (timeStamp - globals.previousCycleMiliseconds) / 1000; // seconds

    globals.previousCycleMiliseconds = timeStamp;

    globals.deltaTime += elapsedCycleSeconds;

    if(globals.deltaTime >= globals.frameTimeObj){

        update();

        render();

        globals.deltaTime -= globals.frameTimeObj;
    }
}