// Ejercicio 4: Calcular descuento por cantidad
// Solicita al usuario la cantidad de productos comprados y el precio unitario. 
// Usa una función flecha para calcular el total con descuento según la cantidad.

const prompt = require('prompt-sync')();

console.log(" --- CÁLCULO DE DESCUENTO POR CANTIDAD ---");

let cantidad = Number(prompt(" Ingresá la cantidad de productos: "));
let precio = Number(prompt(" Ingresá el precio unitario del producto: "));

let precioTotal = (cantidad, precio) => cantidad * precio; 
let total = precioTotal(cantidad, precio);

if (cantidad >= 5) {
    total = total * 0.9;
console.log("Comprando 5 o más productos, accedes al DESCUENTO DEL 10%, y tu caso, sólo abonás: $ " + total);
}  else if (cantidad < 5) {
console.log("El precio total es: $ " + precioTotal(precio, cantidad));
};
    



