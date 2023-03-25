/*descripción
En el juego del casino Blackjack el jugadr puede sacarle ventaja a la casa
ññevando un registor del numero relativo de cartas altas y bajas que quedan en
la baraja. 
Esto se llama 'conteo de cartas'. 
Tener mas cartas altas en la baraja es una ventaja para el jugador. 
Se le asigna un valor a cada carta de acuerdo a la siguiente tabla:
-
-Cuando el conteo es positivo, el jugador deberia apostar alto. (swihcht para elegir que pasa y un condicional para la accion final)
-Cuando el conteo es 0  o negativo, el jugador deberia apostar bajo. 


Cambio del conteo       Cartas
-----------------------------------------------------------------
+1                      2,3,4,5,6
0                       7,8,9
-1                      10, 'J', 'Q', 'K', 'A',

Nuestra meta es definir una funcion para contar cartas.
La funcion debe tomar un parametro "carta" que pude ser un numero
o una cadena de caracteres y luego aumentar o reducir la varable global denominada 'conteo'.
(global, que se edita en la funcion)

La guncion debe retornar una cadena de caracteres con el conteo actual y la cadena:
- 'Apostar' si el conteo es positivo. 
- 'Esperar' si el conteo es negativo. 

El conteo actual y la decisión del jugador ('Apostar' o 'Esperar' deben estar separados por un ESPACIO. )

*/

let contador = 0; 

//se define la funcion para contar las cartas pasando como PARAMETRO las cartas, tanto letras como strings
// la variable decision es local ya que solo puede usarse en la funcion, que va a hacer lo de APOSTAR o ESPERAR. 

function contarCartas(cartas) {
    let decision;
    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            conteo++; //incremento en 1. 
        break;
        case 10:
        case 'J':
        case 'K':
          conteo --; //Reduzcp el valor con dos signos - 
          break;  

    

    }
}
