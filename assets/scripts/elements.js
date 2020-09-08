'use strict'

const div = document.createElement('div');
div.id = 'elem';
div.textContent = 'This is div';

document.body.prepend(div);

const elem = document.getElementById('elem');
