/* Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. 
Realiza las siguientes acciones:
1.	Inicializa un array vacío para almacenar las flores favoritas.
2.	Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
agrega cada una al array manualmente (sin usar métodos como push).
3.	Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
4.	Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).
*/

const prompt = require(`prompt-sync`)();

let floresFavoritas = [];

let flor1 = prompt("Ingresá tu primera flor favorita: ");
let flor2 = prompt("Ingresá tu segunda flor favorita: ");
let flor3 = prompt("Ingresá tu tercera flor favorita: ");

floresFavoritas[0] = flor1;
floresFavoritas[1] = flor2;
floresFavoritas[2] = flor3;

let florEspecifica = prompt("Ingresá una flor para verificar si está entre tus favoritas: ");
let contador = 0;

for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i] === florEspecifica) {
        contador++;
    }
}

if (contador > 0) {
    console.log("La flor " + florEspecifica + " aparece " + contador + " vez/veces entre tus favoritas");
} else {
    console.log("Esa flor no está entre tus favoritas");
}

