function mostrarMensaje() {
    console.log('¡Hola! Esta es mi primera función.');

}

 // argumentos

 function sumar(a, b){
    let suma = a + b;
    console.log('El resultado de ' + a + ' + ' + b + ' es: ' + suma) 
 }

let x = 5
let y = 10

sumar(x,y);

function concatenarTresCad(cad1, cad2, cad3){
    console.log(cad1 + ' ' + cad2 + ' ' + cad3);
 }

 concatenarTresCad('estoy', 'aprendiendo', 'rapido');

 concatenarTresCad('aguante', 'belgrano', 'giles')


 // Variables locales y globales. 
 // AMBITO GLOBALLLLL :  se pueden usar en cualquier parte del programa ya que esta en el script principal

 let miVariableGlobal = 5;
console.log(miVariableGlobal);

 function mostrar() {
    console.log(miVariableGlobal)
 }

 mostrar();
 mostrar();
 mostrar();

 //ahora local

 function  miFuncion() {
    let miVariableLocal = 4
    console.log(miVariableLocal)
 }


let miNombre = 'nora';

// prioridad

function mostrarMiNombre() {
    let miNombre = 'gino';
    console.log(miNombre)
}
 
mostrarMiNombre();  // cuando llamamos la funcion tiene prioridad la variable LOCAL

console.log(miNombre); // cuando usamos el log. dentro del script tiene mas peso sobre la global. 


// retorno

function sumar(a, b) {
    return a + b;
}

console.log(sumar(6,4));

//no tengo el consol log dentro de la funcion por ende lo tengo q hacer cuando la llame a la funcion

// UNDIFIND

//function sumar (a, b) {
  //  console.log(a + b);

//console.log(sumar(6,3));



//asignar valor retornado a una variable, util para usar ese valor y guardarlo. 

function restar(a, b) {
    return a - b;
}

let resultado = restar(20, 3);
console.log(resultado);

function crearCadenaConMeta(lenguajeDeProgramacion) {
    return 'Mi meta es aprender ' + lenguajeDeProgramacion;
}

let cadena = crearCadenaConMeta('Javascript');
console.log(cadena)


// FILA ó COLA: estructura de datos abstraca en la cual hay elementos en orde. Los nuevos elementos se agregan al final de la cola y los anteriores se retiran al principio. 

/* Define una función 'proximoEnLaFila' que tome un arreglo [] y un numero '4' (elemento) como argumentos
Agrega el numero al final de l arreglo y luego elimina el primer elemento del arreglo.
La función proximoEnLaFila debe retornar el elemento que fue removido. */

function proximoEnLaFila(arr, elem) {
    arr.push(elem); //1. agregar al final del arreglo
    return arr.shift(); //2. remueve el 1er elemento, no toma argumentos. 3. retorna con el return
    

}

// JSON.stringify : permite mostrar un arreglo en fomra de string , o sea lo convierte para mostrarlo mas presentable. 

let miArreglo = [1, 2, 3, 4, 5,6];

console.log('Antes: ' + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 20));

console.log('Despues: ' + JSON.stringify(miArreglo));

