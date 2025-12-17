// Ejercicio 1: Calcular el precio final con IVA
// Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.

const prompt = require('prompt-sync')();

let precio = Number(prompt("Ingrese el precio del producto: $ "));
let iva = Number(prompt("Ingrese el porcentaje de IVA: " ));

let calcularPrecioFinal = (precio, iva) => precio + (precio * iva / 100);
   
let precioFinal = calcularPrecioFinal(precio, iva);

console.log("El precio final (IVA incluido) es: $ " + precioFinal);