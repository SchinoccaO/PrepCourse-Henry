/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código: 
  console.log(string);
}
devolverString('hola');

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   let suma = x + y;
   console.log(suma);

}
suma(2,5);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   let resta = x -y;
   console.log(resta);
}

resta(10,4);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   let dividir = x / y;
   console.log(dividir);
}
divide(20,10);


function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   multi = x * y;
   console.log(multi);
}
multiplica(10,23);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   resto = x % y;
   console.log(resto);
}
obtenerResto(10,7);


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
