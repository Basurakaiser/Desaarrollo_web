// ===== Ejercicio 1: Tema y saludo dinámico =====

let temaActual = 'claro';
const botonTema = document.querySelector('#boton-tema');
const saludoElemento = document.querySelector('#saludo');
function cambiarTema() {
    document.body.classList.toggle('modo-oscuro');
    temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
    botonTema.textContent =
        temaActual === 'claro' ? '🌙 Modo oscuro' : '☀️ Modo claro';
}

function saludar() {
    const horaActual = new Date().getHours();
    let mensaje;

    if (horaActual < 12) {
        mensaje = 'Buenos días';
    } else if (horaActual < 19) {
        mensaje = 'Buenas tardes';
    } else {
        mensaje = 'Buenas noches';
    }

    saludoElemento.textContent = mensaje;
}

botonTema.addEventListener('click', cambiarTema);
saludar();

// ===== Ejercicio 2: Panel de estadísticas (Modificado: Contador de clics) =====


let totalPresionados = 0;
const visorContador = document.querySelector('#contador-valor');
const btnMas = document.querySelector('#btn-incrementar');
const btnMenos = document.querySelector('#btn-decrementar');

function registrarClic() {
    totalPresionados++;
    if (visorContador) {
        visorContador.textContent = totalPresionados;
    }
}

if (btnMas) {
    btnMas.addEventListener('click', registrarClic);
}

if (btnMenos) {
    btnMenos.addEventListener('click', registrarClic);
}
