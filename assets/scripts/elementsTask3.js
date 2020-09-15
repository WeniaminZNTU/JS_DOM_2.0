'use strict';

const AMOUNT_RENDER_ELEMENTS = 100;

const arrRenderElements = new Array(AMOUNT_RENDER_ELEMENTS);

for(let i = 0; i < AMOUNT_RENDER_ELEMENTS; i++){
    arrRenderElements[i] = {
        id: i,
        title: `Element number ${i}`,
        description: 'I exist (◕◡◕)',
    }
}

export {arrRenderElements};
