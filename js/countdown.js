'use strict'


window.addEventListener('load', function () {
    var start = document.querySelector('#start');

    function countDown(){
        var result = setInterval(function () {
            var inputDatetime = document.querySelector('#datetime').value;
            var eventDatetime = new Date(inputDatetime);
            var nowDate = new Date();
    
            var nowTime = nowDate.getTime();
            var eventTime = eventDatetime.getTime();
            var restTime = eventTime - nowTime;
    
            var seconds = Math.floor(restTime / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);
    
            hours %= 24;
            minutes %= 60;
            seconds %= 60;
    
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }, 1000);

        return result;
    }

    start.addEventListener("click", function() {
        countDown();
    });
});
