// Selecciona el elemento con clase 'boton' y obtiene una lista de todos los botones
const calculador = document.querySelector('.boton');
const buttons = document.querySelectorAll('.boton button');

// Variable para almacenar el valor del porcentaje seleccionado
let numeroPorcentaje;

// Agrega un evento de clic al botón calculador principal que activa la función 'calcular'
calculador.addEventListener('click', calcular);

// Event listener para los botones
buttons.forEach(button => {
    button.addEventListener("click", presionandoBoton);
});


// Función para manejar el clic en un botón
function presionandoBoton(e) {
    e.preventDefault();
    numeroPorcentaje = e.target.innerText;
}

// Función para calcular y mostrar el resultado del porcentaje
function calcular(e) {
    e.preventDefault();
    // Obtiene el valor ingresado en el campo de entrada
    const entrada = document.querySelector('#entrada').value;

    // Convierte el valor de entrada y el valor del porcentaje seleccionado a números
    const numero = parseFloat(entrada);
    const numero2 = parseFloat(numeroPorcentaje);

    // Verifica si el valor ingresado es un número válido
    if (!isNaN(numero)){
        // Calcula el resultado del porcentaje y muestra los mensajes
        let diferencia = (numero * numero2);
        mensaje(numero)
        mensaje(diferencia / 100);
    } else {
        mensaje('Completar')
    }
}

// Función para mostrar mensajes en el contenido
function mensaje(mensaje) {
    // Crea un elemento <p> para mostrar el mensaje
    const error = document.createElement('p');
    error.textContent = mensaje;

    // Agrega el mensaje al elemento con id 'contenido'
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(error);
    
    // Elimina el mensaje después de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}