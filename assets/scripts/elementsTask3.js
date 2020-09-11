'use strict';

const arrRenderElements = new Array(100);
const list = document.createElement('ul');

for(let i = 0; i < 100; i++){
    arrRenderElements[i] = {
        id: i,
        title: `Element number ${i}`,
        description: 'I exist (◕◡◕)',
    }
}

export {arrRenderElements, list};
