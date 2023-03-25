//los elementos estasn en una secuencia especifica
var miArreglo = ['Jhon', 24];

console.log(miArreglo);

var estudiantes = ['JUAN', 'paco', 'PEDRO', 'DE LA MAR'];
console.log(estudiantes);

// anidar arreglos. 

var listOfStudients = [['Nora', 97], ['Juan', 30], ['Gino', 78]];
console.log(listOfStudients);

var listOfProducts = [['camisa', 5.67,'S123'], ['zapatos', 333, 'perro']];
console.log(listOfProducts);

var datos = [['3.4,.5.4, 3.4'], [12, 3.4, 23.21]];
console.log(datos);


// ACCEDER A ARREGLOS.- 

var miArreglo = [10, 20, 30]

console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);

var suma = miArreglo[0] + miArreglo[1] + miArreglo[3];
console.log(suma);

//modificar datos de un arreglo

var miArreglo2 = [10, 20, 30];
miArreglo2[0] = 40;

//console.log(miArreglo2);

miArreglo2[1] = 'hola';
//console.log(miArreglo2);

miArreglo2[2] = [12, 32, 45];
console.log(miArreglo2);


// ACCEDER ARREGLOS MULTIDIMENSIONALES. 

var miArreglo3 = [[1, 2 ,3], [4, 5, ,6], [7, 8, 9]];
/*
arreglo:            [[1, 2 ,3], [4, 5, ,6], [7, 8, 9]];
índices:                0           1           2
índices internos:     0  1  2    0  1   2    0  1   2


*/

console.log(miArreglo3[0][1]); //:D

// PUSH = permite añadir un arreglo o variable al final del arreglo. 
//(uno de los métodos que tiene javascript)

var estaciones = ['invierno', 'otoño', 'primavera']
estaciones.push('verano');
console.log(estaciones)

// POP = remover el ultimo elemento y se puede asignar a una variable para trabajar con ese elemento de forma individual 
var colores = ['rojo', 'blanco', 'azul', 'verde']
var color = colores.pop();

console.log(colores);
console.log(color);

// shift = remover el PRIMER elemento. 
var colores = ['rojo', 'blanco', 'azul', 'verde']
colores.shift();
console.log(colores);

// unshift = agregar un elemento al PRINCIPIO del arreglo. 
var colores = ['rojo', 'blanco', 'azul', 'verde']
colores.unshift('amarillo');
console.log(colores);
 
