// Solicitar al usuario un número y un límite
let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
let limite = parseInt(prompt("Ingresa el límite hasta el cual quieres multiplicar:"));

// Inicializar variable para el total de las multiplicaciones
let total = 0;

// Mostrar la tabla de multiplicar
for (let i = 1; i <= limite; i++) {
    let resultado = numero * i; // Calcular el resultado
    total += resultado; // Sumar al total
    console.log(`${numero} x ${i} = ${resultado}`); // Mostrar el resultado
}

// Mostrar el total de las multiplicaciones
alert(`El total de las multiplicaciones es: ${total}`);
