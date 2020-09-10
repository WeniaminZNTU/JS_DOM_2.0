'use strict';

const div = document.createElement("div");
const form = document.createElement("form");
const input = document.createElement("input");
const output = document.createElement("input");
const limitationForOutput = document.createElement('input');
const submitBtn = document.createElement('button');
const clearBtn = document.createElement('button');

const labelForInput = document.createElement('label');
const labelForOutput = document.createElement('label');
const labelForlimitation = document.createElement('label');



output.readOnly = true;

input.setAttribute('id', 'input');
output.setAttribute('id', 'output');
limitationForOutput.setAttribute('id', 'limitationForOutput');

labelForInput.textContent = 'Enter radius:';
labelForOutput.textContent = 'Ball volume:';
labelForlimitation.textContent = 'Precision:';

labelForInput.setAttribute('for', input.id);
labelForOutput.setAttribute('for', output.id);
labelForlimitation.setAttribute('for', limitationForOutput.id);

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

labelForInput.classList.add('textStyle');
labelForOutput.classList.add('textStyle');
labelForlimitation.classList.add('textStyle');


document.body.prepend(div);

div.appendChild(form);

form.appendChild(labelForInput);
form.appendChild(input);

form.appendChild(labelForOutput);
form.appendChild(output);

form.appendChild(labelForlimitation);
form.appendChild(limitationForOutput);

form.appendChild(submitBtn);
form.appendChild(clearBtn);


export {input, output, submitBtn, clearBtn, limitationForOutput};
