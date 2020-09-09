"use strict";

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

    console.log(onClick);
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

/* 
3. Вставьте элементы массива объектов(id, title,
 description) в конец ul так, чтобы каждый на каждый
  объект был свой li. 

  Сделайте так, чтобы по нажатию на li - он подсвечивался
 другим цветом.

 Сделайте так, чтобы по нажатию на кнопку внтри li эта li
 удалялась из разметки.
*/
