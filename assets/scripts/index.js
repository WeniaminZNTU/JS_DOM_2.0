"use strict";

import {input, output, submitBtn, clearBtn, limitationForOutput} from './elementsTask1.js';
import {divElem} from './elementsTask2.js';
import {arrRenderElements} from './elementsTask3.js';
import {randomColorInHex} from './features.js';

// Task 1
submitBtn.addEventListener('click', function onClickBtnHandler(event){
    event.preventDefault();
    event.stopPropagation();

    const inputRadius = input.value;
    const precision = limitationForOutput.valueAsNumber;

    if(inputRadius.toString().indexOf('.') === (inputRadius.toString().length - 1)){
        input.value = Number(inputRadius.toString().slice(0, (inputRadius.toString().length - 1)));
    }

    const outputVolumeBall = ballVolume({inputRadius, precision});

    if(Number(inputRadius) === 0){
        input.value = '0';
        output.value = '0';
    }
    if(inputRadius.charAt(0) === ''){
        input.value = '';
        output.value = '';
    }
    if(outputVolumeBall){
        output.value = outputVolumeBall;
    }
    else if(Number.isNaN(outputVolumeBall)){
        output.value = '';
    }
});

limitationForOutput.addEventListener('input', (event)=>{
    if(event.currentTarget.valueAsNumber < 0){
        event.currentTarget.value = 0;
    }
})

clearBtn.addEventListener('click', (event)=>{
    const {currentTarget:{parentElement}} = event;
    parentElement.reset(); //form.reset()
});



function ballVolume({inputRadius, precision}){
    console.log(inputRadius);
    if(inputRadius.indexOf(0) === ''){
        return '';
    }
    if(inputRadius.indexOf(0) === '0'){
        return '0';
    }


    inputRadius = Math.pow(inputRadius, 3);
    inputRadius = inputRadius * Math.PI;
    
    const oneThird = inputRadius / 3;

    const volume = inputRadius + oneThird;

    return round({volume, precision});
};


function round({volume, precision}){
    return volume.toString().slice(0, (volume.toString().indexOf('.') + precision + 1));
};
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Task 2
const selector = 'primitiveSelector';

addClass(divElem, selector);
deleteClass(divElem, selector);

toggleClassAttr(divElem, selector);
toggleClassAttr(divElem, selector);
toggleClassAttr(divElem, selector);


function addClass(elem, className){
  if(!elem){
    throw new ReferenceError('Elem is not defined');
  }
  if(typeof(className) !== 'string'){
    throw new TypeError('class name must be a string');
  }

  elem.classList.add(className);
}

function deleteClass(elem, className){
  if(!elem){
    throw new ReferenceError('Elem is not defined');
  }
  if(typeof(className) !== 'string'){
    throw new TypeError('class name must be a string');
  }

  elem.classList.remove(className);
}

function toggleClassAttr(elem, className){
  if(!elem){
    throw new ReferenceError('Elem is not defined');
  }
  if(typeof(className) !== 'string'){
    throw new TypeError('class name must be a string');
  }

  elem.classList.toggle(className);
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Task 3
const list = document.createElement('ul');
document.body.appendChild(list);

for (let i = 0; i < arrRenderElements.length; i++) {
  let { id, title, description } = arrRenderElements[i];

  const textValue = `id: ${id}, title: ${title}, description: ${description} `;

  const li = createListItem({
      value: textValue,
      children:[
          createButton({text:'Delete', onClick:deleteBtnHandler}),
      ],
      onClick:clickOnLiHandler 
    });


  list.appendChild(li);
}



function createListItem({value, children, onClick = ()=>{}}) {
    const li = document.createElement('li');

    
    li.onclick = onClick;
    li.append(document.createTextNode(value), ...children);

    return li;
}


function createButton({
    text,
    onClick = ()=>{},
}){
    const btn = document.createElement('button');

    btn.textContent = text;
    btn.onclick = onClick;

    return btn;
}


function deleteBtnHandler(event) {
  const {
    currentTarget: { parentElement },
  } = event;
  parentElement.remove();
}


function clickOnLiHandler(event){
    const {currentTarget:{style}} = event;
    style.color = randomColorInHex();
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Task 4
document.body.prepend(document.createElement("h1"));

class Elem {
  constructor(selector) {
    this.element = document.querySelector(selector);

    if (!this.element) {
      throw new TypeError("Selector must be an HTML element selector");
    }
  }

  html(newTextContent) {
    this.element.textContent = newTextContent;

    return this;
  }

  append(appendText) {
    const { element } = this;

    appendText += element.textContent;
    element.textContent = appendText;

    return this;
  }

  prepend(prependText) {
    this.element.textContent += prependText;

    return this;
  }

  attr(attrName, attrValue) {
    this.element.setAttribute(attrName, attrValue);

    return this;
  }
}

const elem = new Elem("h1");

elem
  .html("JS DOM 2.0")
  .append("I complete ")
  .prepend(": 4 Task!")
  .attr("class", "www");
