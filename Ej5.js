/* Ejercicio 5: Verificar origen del auto
Solicita al usuario ingresar la marca de un auto y utiliza una función flecha para verificar y 
mostrar si el auto es de origen nacional o importado. 
Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen nacional.
✔	Solicita al usuario que ingrese la marca de un auto.
✔	Utiliza una función flecha para determinar si la marca ingresada corresponde a un auto de origen nacional o importado.
✔	Muestra un mensaje indicando si el auto es de origen nacional o importado, basado en la marca ingresada por el usuario.
*/

const prompt = require('prompt-sync')();

console.log(" --- VERIFICANDO EL ORIGEN DE TU AUTO ---");

let marca = prompt("Ingresá la marca de tu auto: ").toLowerCase();

let marcaChevrolet = "chevrolet";
let marcaFord = "ford";
let marcaFiat = "fiat";

let nacional = (marca) => {
    if (marca === marcaChevrolet || marca === marcaFord || marca === marcaFiat) {
        return "NACIONAL";
    } else {
        return "IMPORTADO";
    }
};

console.log("Tu auto es de origen " + nacional(marca));