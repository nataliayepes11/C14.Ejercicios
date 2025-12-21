/* Ejercicio 8: Funcion backEnd()
Creá la función backEnd() que recibirá 2 números como parámetros. 
La función deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los siguientes criterios:
✔	Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string “Back” en lugar del número.
✔	Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “End” en su lugar del número.
✔	Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Back End” en lugar del número.
*/

const prompt = require('prompt-sync')();

let param1 = Number(prompt("Ingrese un número: "));
let param2 = Number(prompt("Ingrese otro número: "));
// Sé que el ejercicio no pide que ingrese el usuario números, pero lo hago así para que sea más didáctico.
// El enunciado sería desde la línea 15 a la 29.
const backEnd =(param1, param2) => {
    for (let i = 1; i <= 100; i++) {
        if (i % param1 === 0 && i % param2 === 0) {
            console.log("Back End");
        } else if (i % param1 === 0) {
            console.log("Back");
        } else if (i % param2 === 0) {
            console.log("End");
        } else {
            console.log(i);
        }
    }
};
// Si no ingresara el usuario los números, tendrían que ser números concretos ambos parámetros)
backEnd(param1, param2);