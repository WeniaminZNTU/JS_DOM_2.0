"use strict";

// Task 1
import {input, output, submitBtn, clearBtn, limitationForOutput} from './elementsTask1.js';

submitBtn.addEventListener('click', function onClickBtnHandler(event){
    event.preventDefault();
    event.stopPropagation();
    debugger;
    const inputRadius = input.value;
    const precision = limitationForOutput.valueAsNumber;

    if(inputRadius.toString().indexOf('.') === (inputRadius.toString().length - 1)){
        input.value = Number(inputRadius.toString().slice(0, (inputRadius.toString().length - 1)));
    }

    const outputVolumeBall = ballVolume(inputRadius, precision);

    if(inputRadius === '0'){
        output.value = '0';
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

