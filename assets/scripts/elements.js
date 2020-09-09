'use strict';

const arrRenderElements = [];
const arrLiElements = [];
const list = document.createElement('ul');

for(let i = 0; i < 100; i++){
    arrRenderElements[i] = {
        id: i,
        title: `Element number ${i}`,
        description: 'I exist (◕◡◕)',
    }
}


for(let i = 0; i < arrRenderElements.length; i++){
    arrLiElements[i] = document.createElement('li');
}
