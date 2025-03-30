const tiempoDisplay = document.getElementById('tiempo');
const ciclosDisplay = document.getElementById('ciclos');
const inicioBtn = document.getElementById('inicio');
const pausaBtn = document.getElementById('pausa');
const reinicioBtn = document.getElementById('reinicio');
const audio = document.getElementById('audio');

let tiempo = 0;
let ciclos = 0;
let intervalo;

function actualizarTiempo() {
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;

    tiempoDisplay.textContent = `${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`;
}

function formatoTiempo(valor) {
    return valor < 10 ? `0${valor}` : valor;
}

function iniciarCronometro() {
    intervalo = setInterval(() => {
        tiempo++;
        actualizarTiempo();

        if (tiempo % 85 === 0 && tiempo !== 0) { // Cambiado a 85 segundos
            ciclos++;
            ciclosDisplay.textContent = `Ciclos: ${ciclos}`;
        }
    }, 1000);

    audio.play();
}

function pausarCronometro() {
    clearInterval(intervalo);
    audio.pause();
}

function reiniciarCronometro() {
    clearInterval(intervalo);
    tiempo = 0;
    ciclos = 0;
    actualizarTiempo();
    ciclosDisplay.textContent = `Ciclos: ${ciclos}`;
    audio.currentTime = 0;
    audio.pause();
}

inicioBtn.addEventListener('click', iniciarCronometro);
pausaBtn.addEventListener('click', pausarCronometro);
reinicioBtn.addEventListener('click', reiniciarCronometro);