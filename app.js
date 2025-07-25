let numeroSecreto = 0;
let numerosdeIntentos = 0;
let numerosGenerados = [];
let Maximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("casillaIntento").value);
    if(numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `Felicidades Acertaste en ${numerosdeIntentos} ${numerosdeIntentos === 1 ? 'intento' : 'intentos'}  `);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById("intentar").setAttribute("disabled", "false");
    }else if(numeroSecreto > numeroUsuario) {
        asignarTextoElemento('p', "El numero es mayor");
    } else {
        asignarTextoElemento('p', "El numero es menor");
    }
    numerosdeIntentos++;
    limpiarIntento();
  return;
}

function reiniciarJuego() {
    limpiarIntento();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.querySelector('#intentar').removeAttribute('disabled');
}

function limpiarIntento() {
    document.querySelector('#casillaIntento').value = '';
}
function generarNumeroSecreto() {
    
    let numeroSecret = Math.floor(Math.random() * Maximo) + 1;

    if (numerosGenerados.length == Maximo) {
        asignarTextoElemento('p', 'Ya adivinaste todos los números posibles');
    } else {
        if (numerosGenerados.includes(numeroSecret)) {
            return generarNumeroSecreto();
        } else {
            numerosGenerados.push(numeroSecret);
            return numeroSecret;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${Maximo}`);
    numeroSecreto = generarNumeroSecreto();
    numerosdeIntentos = 1;
}

condicionesIniciales();



