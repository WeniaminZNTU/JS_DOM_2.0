"use strict";

// Task 1
import {input, output, submitBtn, clearBtn, limitationForOutput} from './elementsTask1.js';

submitBtn.addEventListener('click', function onClickBtnHandler(event){
    event.preventDefault();
    event.stopPropagation();

    const inputRadius = input.value;
    const precision = limitationForOutput.valueAsNumber;

    if(inputRadius.toString().indexOf('.') === (inputRadius.toString().length - 1)){
        input.value = Number(inputRadius.toString().slice(0, (inputRadius.toString().length - 1)));
    }

    const outputVolumeBall = ballVolume(inputRadius, precision);

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

limitationForOutput.addEventListener('change', (event)=>{
    if(event.currentTarget.valueAsNumber < 0){
        event.currentTarget.valueAsNumber = 0;
    }
})

clearBtn.addEventListener('click', (event)=>{
    const {currentTarget:{parentElement}} = event;
    parentElement.reset(); //form.reset()
});



function ballVolume(...args){
    let [radius, accuracy] = args;

    if(radius.indexOf(0) === ''){
        return '';
    }
    if(radius.indexOf(0) === '0'){
        return '0';
    }


    radius = Math.pow(radius, 3);
    radius = radius * Math.PI;
    
    const oneThird = radius / 3;

    const volume = radius + oneThird;

    return round(volume, accuracy);
};


function round(...args){
    let [number, accuracy] = args;
    return +number.toString().slice(0, (number.toString().indexOf('.') + accuracy + 1));
};
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Task 2
import {divElem} from './elementsTask2.js'

divElem.classList.add('www');
divElem.classList.remove('www');

if(divElem.classList.contains('www')){
    divElem.classList.remove('www');
}
else{
    divElem.classList.add('www');
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Task 3
import {arrRenderElements, list} from './elementsTask3.js';

const idWord = "id: ";
const titleWord = ", title: ";
const descriptionWord = ", description: ";

document.body.appendChild(list);

for (let i = 0; i < arrRenderElements.length; i++) {
  let { id, title, description } = arrRenderElements[i];

  const textValue = idWord + id + titleWord + title + descriptionWord + description + ' ';

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

function randomColorInHex(amountNumbers=6) {
  let arr = [];

  for(let i = 0; i < amountNumbers; i++){
    arr[i] = Math.floor(Math.random() * Math.floor(16));

  switch (arr[i]) {
    case 10: {
      arr[i] = 'A';
    }
    case 11: {
      arr[i] = "B";
    }
    case 12: {
      arr[i] = "C";
    }
    case 13: {
      arr[i] = "D";
    }
    case 14: {
      arr[i] = "E";
    }
    case 15: {
      arr[i] = "F";
    }
  }
}
  return '#' + arr.join('');
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Task 4
