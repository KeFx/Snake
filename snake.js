'use strict';

/** @type {HTMLCanvasElement} */

function startGame(rows, cols, baseUnitWidth){
    const pg = new Playground(rows, cols, baseUnitWidth, 'snake');
    document.getElementById('snake').style.cssText = `width: ${cols*baseUnitWidth}px;
                                                    height: ${rows*baseUnitWidth}px;
                                                    border-style: solid;
                                                    border-width: 1em;
                                                    border-color: lightskyblue;`
    pg.start();
}