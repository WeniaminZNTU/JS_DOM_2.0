'use strict'

const divTask2 = document.createElement('div');
divTask2.setAttribute('id', 'divConteiner');
divTask2.textContent = 'This is text in div';

document.body.append(divTask2);

const divElem = document.getElementById('divConteiner');

export {divElem};
