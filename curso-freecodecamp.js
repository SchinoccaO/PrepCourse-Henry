// codigo inalcanzable, ya que el codigo despues del RETURN queda inhabilitado. 
function miFuncion() {
    console.log('hola');
    return 'Mundo';
    console.log('adios');
} 

console.log(miFuncion());

//Dependiendo de cuando necesite dejar de ejecutar el proyecto. 

function calcularRaizCuadrada(num) {
    if (num < 0) {                  // la raiz cuadrada NO existe en numeros negativos. 
        return undefined;
    }
    return Math.sqrt(num); //funcion de raiz cuadrada. MATH!!. 
}
console.log(calcularRaizCuadrada(-3));
