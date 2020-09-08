'use strict';

const div = document.createElement("div");
const form = document.createElement("form");
const input = document.createElement("input");
const output = document.createElement("input");
const limitationForOutput = document.createElement('input');
const submitBtn = document.createElement('button');
const clearBtn = document.createElement('button');

const textForInput = document.createElement('span');
const textForOutput = document.createElement('span');
const textForLimitationInput = document.createElement('span');

input.type = 'number';

textForInput.textContent = 'Enter radius:';
textForOutput.textContent = 'Ball volume:';
textForLimitationInput.textContent = 'Precision:';

clearBtn.textContent = 'Clear';
clearBtn.type = 'reset';

submitBtn.textContent = 'Calculate';
submitBtn.type = 'submit';

limitationForOutput.type = 'number';
limitationForOutput.defaultValue = 2;


form.classList.add('formStyle');

input.classList.add('inputStyle');
output.classList.add('inputStyle');
limitationForOutput.classList.add('limitInputStyle');
submitBtn.classList.add('culculateButtonStyle');
clearBtn.classList.add('clearButtonStyle');

textForInput.classList.add('textStyle');
textForOutput.classList.add('textStyle');;
textForLimitationInput.classList.add('textStyle');;



document.body.prepend(div);

div.appendChild(form);

form.appendChild(textForInput);
form.appendChild(input);

form.appendChild(textForOutput);
form.appendChild(output);
form.appendChild(textForLimitationInput)
form.appendChild(limitationForOutput);

form.appendChild(submitBtn);
form.appendChild(clearBtn);
