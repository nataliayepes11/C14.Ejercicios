// Ejercicio 2: Calcular promedio de calificaciones
//Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.

const prompt = require('prompt-sync')();

console.log(" --- PROMEDIO DE CALIFICACIONES --- ")
console.log("Por favor ingresá las notas, una por una... ")
let n1 = Number(prompt("Nota 1: "));
let n2 = Number(prompt("Nota 2: "));
let n3 = Number(prompt("Nota 3: "));
let n4 = Number(prompt("Nota 4: "));
let n5 = Number(prompt("Nota 5: "));

let notaPromedio = (n1, n2, n3, n4, n5) => (n1 + n2 + n3 + n4 + n5) / 5;
    
console.log(" --- El promedio es: " + notaPromedio(n1, n2, n3, n4, n5) + " ---");

