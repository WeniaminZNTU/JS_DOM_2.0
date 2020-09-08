'use strict';
elem.classList.add('www');
elem.classList.remove('www');

if(!elem.classList.entries('www')){
    console.log(elem.classList);
    console.log('есть');
    elem.classList.remove('www');
}
else{
    elem.classList.add('www');
}
