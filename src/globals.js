import {Game} from "./constants.js";


export default {
    
    // Acceso al canvas y al context
    canvas: {},
    ctx:    {},

    // Estado de juego
    gameState: Game.INVALID,

    // Tiempo de ciclo anterior
    previousCycleMiliseconds: -1,

    // Tiempo de ciclo de juego
    deltaTime: 0,

    //texto prueba
    txtPruebas: {},

    //  
    frameTimeObj: 0,

    // events actions
    action: {}
}