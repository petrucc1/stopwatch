"use strict"

let hours = 0;
let minutes = 0;
let seconds = 0;

let time = 1000; // Quantidade de milésimos em um segundo
let stopWatch;


// Inicia o cronômetro
function start() {
    stopWatch = setInterval(() => {timer();}, time);
}

// Pausa o cronômetro sem limpar as variáveis
function pause() {
    clearInterval(stopWatch);
}

// Para o cronômetro e limpa as variáveis
function stop() {
    clearInterval(stopWatch);
    hours = 0;
    minutes = 0;
    seconds = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

// Realiza a contagem do tempo e da exibição
function timer() {
    seconds++;

    if(seconds == 59) {
        seconds = 0;
        minutes++;

        if(minutes == 59) {
            minutes = 0;
            hours++;
        }
    }

    // Cria uma variável com o valor "00:00:00"
    let format = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    
    // Insere o valor no "counter"
    document.getElementById('counter').innerText = format;
    
    // Retorna o valor
    return format;
}