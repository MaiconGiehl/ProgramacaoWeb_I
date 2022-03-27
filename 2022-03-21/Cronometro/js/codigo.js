let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("sec");
let millisecond = document.getElementById("milisec");

var hourValue = 0;
var minuteValue = 0;
var secValue = 0;
var milisecValue = 0;

let cronometro;

function start() {
    pause();
    cronometro = setInterval(() => { contador(); }, 10);
}

function contador() {

    if ((milisecValue += 10) > 999) {
      milisecValue = 000;
      secValue++;
    }
    if (secValue == 60) {
      secValue = 0;
      minuteValue++;
    }
    if (minuteValue == 60) {
      minuteValue = 0;
      hourValue++;
    }
    
    millisecond.innerText = adicionarZeroMilisec(milisecValue);
    second.innerText = adicionarZero(secValue);
    minute.innerText = adicionarZero(minuteValue);
    hour.innerText = adicionarZero(hourValue);
}

function adicionarZero(tempo) {
    if(tempo <= 9) {
        return "0" + tempo;
    } else {
        return tempo;
    }
}

function adicionarZeroMilisec(milisec) {
    if(milisec < 9) {
        return "00" + milisec;
    } else if (milisec < 99) {
        return "0" + milisec;
    } else {
        return milisec;
    }
}

function pause () {
    clearInterval(cronometro);
}

function reset () {
    milisecValue = 000;
    secValue = 00;
    minuteValue = 00;
    hourValue = 00;

    millisecond.innerText = adicionarZeroMilisec(milisecValue);
    second.innerText = adicionarZero(secValue)
    minute.innerText = adicionarZero(minuteValue);
    hour.innerText = adicionarZero(hourValue);
}