// Ejercicio 3: Clasificación de edades
// Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.

const prompt = require('prompt-sync')();

console.log( "--- CLASIFICACIÓN DE EDADES ---")
let edad = Number(prompt("Ingresá tu edad: "));

let clasificarEdad = (edad) => {
    if (edad < 13) {
        return "NIÑA/O";
    } else if (edad < 18) {
        return "ADOLESCENTE";
    } else {
        return "ADULTA/O";
    }
};

console.log( "Sos " + clasificarEdad(edad));




