let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
let limite = parseInt(prompt("Ingresa el límite hasta el cual quieres multiplicar:"));

let total = 0;

for (let i = 1; i <= limite; i++) {
    let resultado = numero * i; 
    total += resultado; 
    console.log(`${numero} x ${i} = ${resultado}`); 
}

alert(`El total de las multiplicaciones es: ${total}`);
