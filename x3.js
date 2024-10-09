let edad = prompt("Ingresa tu edad:");
let genero = prompt("Ingresa tu género (hombre/mujer):").toLowerCase(); // Convertir a minúsculas para evitar errores

let resultado = "";

if (edad <= 10) {
    resultado += "Recibes un jugo.\n";
}
if (edad > 18) {
    resultado += "Recibes una cerveza.\n"; // Cervezas para mayores de 18 años
}
if (genero === "mujer") {
    resultado += "Además, recibes una porción de pizza Hawaiana.\n"; // Pizza Hawaiana para mujeres
} else if (genero === "hombre") {
    resultado += "Además, recibes una porción de pizza de tres carnes.\n"; // Pizza de tres carnes para hombres
}

// Mensaje si no recibe premio
if (resultado === "") {
    resultado = "No recibes ningún premio.";
}

// Mostrar el resultado al usuario
alert(resultado);
