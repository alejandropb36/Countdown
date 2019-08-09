'use strict'

var form = document.querySelector('#form-datetime');

form.addEventListener('submit', function() {
    var inputDatetime = document.querySelector('#datetime').value;

    var datetime = new Date(inputDatetime);

    var nowDate = new Date();

    if(datetime > nowDate){
        localStorage.clear();
        localStorage.setItem(datetime, datetime);
    }
    else{
        alert('The date is less than the current one');
    }



});


