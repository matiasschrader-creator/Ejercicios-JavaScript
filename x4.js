
let pagar = true 

let total=0

while(pagar) {
    let valor = prompt(`
        Menu:
        hamburguesa: 20000
        pizza: 18000
        carne: 30000`) 

if(valor==="pagar") {

    pagar = false


}

else if(valor==="hamburguesa") {

total = total+20000



}

else if(valor==="pizza") {

    total = total+18000
    
    
    
    }

else if(valor==="carne") {

        total = total+30000
        
        
        
        }

else (

    alert("Opcion Invalida")

)
}
alert("precio total es: " + total);
