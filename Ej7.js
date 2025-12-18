/* Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔	título: una cadena con el título del libro.
✔	autor: una cadena con el nombre del autor del libro.
✔	anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro 
que tome un arreglo de libros como parámetro y 
muestre por consola la información de cada libro en el formato especificado.
*/

const libro1 = {
    titulo: "Las Lunas",
    autor: "Eugenio Carutti",
    anioPublicacion: 2015
};

const libro2 = {
    titulo: "La inteligencia emocional",
    autor: "Daniel Goleman",
    anioPublicacion: 2000
};

let biblioteca = [libro1, libro2];

const mostrarLibros = function (biblioteca) {

    console.log(" --- VEAMOS LOS LIBROS QUE TIENE ESTA BIBLIOTECA ---");

    for (let i = 0; i < biblioteca.length; i++) {
        console.log((i + 1) + " - " + biblioteca[i].titulo + " - " + biblioteca[i].autor + " - " + biblioteca[i].anioPublicacion);
    }

    console.log(" --- Te gustaría comenzar a leer alguno? ---");
};

mostrarLibros(biblioteca);
