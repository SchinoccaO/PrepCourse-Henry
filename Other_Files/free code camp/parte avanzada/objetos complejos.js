let ordenDePizza = [ // arreglo externo que contiene los objetos. 

{               //aca empieza el 1er objeto. 
    'tipo':  'margarita',
    'tamaño': 'individual',
    'precio': 5.66,
    'toppings': [ //arreglo interno que contiene los toppings. 
        'extra champiñones',
        'extra queso',
        'piña'
    ],
'para llevar': true 
},             //aca termina, SE DEBE SEPARAR CON COMA. 

{              //aca empieza el 2do obj. 
    'tipo': 'cuatro quesos',
    'tamaño': 'familiar',
    'precio': 18.45,
    'toppings': [  //arreglo interno. 
        'extra queso',
        'pimenton'  
    ],
    'para llevar': false
},           //aca termina.  
{   'tipo': 'calabresa',
    'tamaño': 'grande',
    'precio': 20.30,
    'toppings': [
        'extra queso',
        'extra large'
    ]

}

]; // termina el arrglo externo. 

// Primero: entender q se esta trabajando con un arreglo y q cada propiedad y objeto. tiene un lugar en ese arreglo. 


// el 1er objeto dentro del gran arregloe sta ern el INDICE: 0
// el 2do objeto esta en el ÍNDICE: 1

//console.log(ordenDePizza[0]);
//console.log(ordenDePizza[1]);

//console.log(ordenDePizza[0].tipo); //notacion de punto
//console.log(ordenDePizza[0]['tipo']); // notacion de corchetes

//console.log(ordenDePizza[0].toppings);


// OBJETOS ANIDADOS: objetos dentro de un objeto. 

let miReceta = {
    'descripccion': 'mi postre favorito',
    'costo': 14.3,
    'ingredientes': {
        'masa': {
            'harina': '100 grs',
            'sal': '1 chucharada',
            'agua': '1 taza'
        },
    },
    'cobertura': {
        'azucar': '120 grs',
        'chocolate': '5 cucharadas',
        'manteca': '200grs'
    }
}

//console.log(miReceta.descripccion);
//console.log(miReceta.costo);
//console.log(miReceta.ingredientes.masa); // de miReceta voy a ingredientes y de ahi a masa.

console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);

//sepuede usar la notacion de corchetes tmb y ESCRIBIR una variable, personalizando así lo que se muestra. 
console.log(miReceta.ingredientes.masa['harina']);


// cobertura. 
console.log(miReceta.cobertura);
console.log(miReceta.cobertura.azucar);
console.log(miReceta.cobertura.chocolate);
let variable2 = 'La cantidad necesaria de manteca es de: ' + miReceta.cobertura['manteca'];
console.log(variable2);


