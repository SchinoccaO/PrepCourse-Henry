//arreglo de objetos. cada objeto es UN elemento de ese arreglo. 

let misPlantas = [
    {
        tipo : 'flores',
        lista: [
            'rosas',                // INDICE 0
            'tulipanes',
            'dientes de leon'
,        ]
    },
    {
        tipo: 'arboles',
        lista: [
            'abeto',                // INDICE 1
            'pino',
            'abedul'
        ]
    },
];

//sintaxis distntia ya que son arreglo de objetos. 
//se crea una variable, se accede al primer objeto del arreglo, luego a la p´rimera lista y luego al primer elemento de la lista. 
let primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);

let segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);

let tercerArbol = misPlantas[1].lista[2];
console.log(tercerArbol);

let primerArbol = misPlantas[1].lista[0];
console.log(primerArbol);

