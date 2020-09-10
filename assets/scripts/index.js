"use strict";



submitBtn.addEventListener('click', function onClickBtnHandler(event){
    event.preventDefault();
    event.stopPropagation();

    const inputRadius = input.valueAsNumber;
    const precision = limitationForOutput.valueAsNumber;

    const outputVolumeBall = ballVolume(inputRadius, precision);
    if(outputVolumeBall){
        output.value = outputVolumeBall;
    }
    else if(Number.isNaN(outputVolumeBall)){
        console.log(typeof(outputVolumeBall));
        output.value = '';
    }
    console.log(typeof(outputVolumeBall), outputVolumeBall);
});



function ballVolume(...args){
    let [radius, accuracy] = args;
    
    radius = Math.pow(radius, 3);
    radius = radius * Math.PI;
    
    const oneThird = radius / 3;

    const volume = radius + oneThird;

    return round(volume, accuracy);
}


function round(...args){
    let [number, accuracy] = args;

    if(!number.toString().includes('.')){
      return number;
    }

  return +number.toString().slice(0, (number.toString().indexOf('.') + accuracy + 1));
}
