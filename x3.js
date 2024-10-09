let edad = prompt("Ingresa tu edad:");
let genero = prompt("Ingresa tu género (hombre/mujer):").toLowerCase(); // Convertir a minúsculas para evitar errores

let resultado = "";

if (edad <= 10) {
    resultado += "Recibes un jugo.\n";
}
if (edad > 18) {
    resultado += "Recibes una cerveza.\n"; 
}
if (genero === "mujer") {
    resultado += "Además, recibes una porción de pizza Hawaiana.\n"; 
} else if (genero === "hombre") {
    resultado += "Además, recibes una porción de pizza de tres carnes.\n"; 
}

if (resultado === "") {
    resultado = "No recibes ningún premio.";
}

alert(resultado);
