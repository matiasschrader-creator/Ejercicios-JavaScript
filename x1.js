// Solicitar al usuario un número n
let n = parseInt(prompt("Ingresa un número:"));

// Inicializamos la variable para almacenar la suma
let suma = 0;

// Bucle para sumar los números desde 1 hasta n
for (let i = 1; i <= n; i++) {
    suma += i;
}

// Mostrar el resultado
alert("La suma de todos los números de 1 a " + n + " es: " + suma);
