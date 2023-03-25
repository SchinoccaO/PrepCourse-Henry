

let x = 5;


if (x > 2 && x > 2 || x == 20) {
    console.log('la condiciones es verdadera');
  
}

var estacion = 'verano';

if (estacion == 'invierno') {
    console.log('Si, amo el inviernooooo.');
}   else {
        console.log('No es invierno, odio mi vida. ')
    }

console.log('despues del condi')

// clausula else if: manejar condiciones alternativas
// solo se ejecuta UNO de todos estos bloques de codigos, el que corresponda a la PRUIMERA uqe sea vverdadera. 
/* function clasificarValorr(valor) {
    if (valor % 2 == 0) {
        console.log('Es divisible por dos. ');
    } else if (valor % 3 == 0){
        console.log('es divisible entre 3.');

    }else {
        console.log('no es divisible entre 2 ni 3.')
    }
}

//clasificarValorr(2);
//clasificarValorr(15);
//clasificarValorr(7);
*/

// Condicionales: orden lógico
 
function clasifciarValor(valor) {         //abro una llave que es la que se cierra al final
    if (valor < 5) {                      //abro otra llave desde esta condicion que se cierra en la prox. luego que ejecuta la acción
        console.log('Menor que 5. ');    
    } else if (valor < 10) {              //cierro la llave abierta en la linea 42 y abro otra en esta condición
        console.log('menor que 10. ');
    } else {                              // la cierro a la abierta en la linea 45 y abro otra
        console.log('mayor o igual que 10.');
    }                                     // que cierro acá, luego de que termina de ejecutarse el código. 
}                                          // finalizo cerrando la PRIMERA llave que abrí apenas arranque la funcion. 


// SE DEBE TENER EN CUENTA EL ORDEN DE LAS CONDICIONES, ya que la primera condicion es la que se ejecuta. 

clasifciarValor(2);
clasifciarValor(7);
clasifciarValor(15);

// encadenar sentencias if else.

function interpretarIMC(indiceMasa) {
    if(indiceMasa < 18.5) {
        console.log('bajo peso');
    } else if (indiceMasa <= 24.9) {
        console.log('peso normal');
    } else if (indiceMasa <= 29.9) {
        console.log('sobrepeso');
    } else {
        console.log('obesidad');
    }
}

interpretarIMC(22.2);

