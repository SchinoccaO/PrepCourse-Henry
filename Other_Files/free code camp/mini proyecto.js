/* 
en un juego de golf cada hoyo tiene un par que represneta el promedio de golpesq quer se espera que haga el golfista para introducri la pelota en el. 
Hay un nombre diferente dependiendo de qué tanpor encima o por debajho del par estén sus golpes,
Tu funcion debera tomar de argumentos PAR y GOLPES. 
Retorna la cadena correcta segun esta tabla que muestra los golpes de mayor a menor prioridad.

GOLPES             RETORNAR 
.............................
1                   'Hole-in-one'
<= par - 2          'Eagle'
par - 1             'Birdie'
par                 'par'
par + 1             'Bogey'
par + 2             'doble bogey'
>= par + 3          'go home!' 

par y golpe siempre POSITIVOS y numeros..
*/

function puntajeGolf(par, golpes) {
    if (golpes == 1){
        return 'Hole-in-one';
    } else if (golpes <= par -2){
        return 'Eagle';
    } else if (golpes == par -1){
        return 'birdie';
    }else if(golpes == par){
        return 'par';
    } else if(golpes == par + 1){
        return 'bogey';
    } else if(golpes == par + 2){
        return 'double bogey';
    } else if(golpes >= par + 3){
        return 'go home!';
    } 
}

console.log(puntajeGolf(3, 1));