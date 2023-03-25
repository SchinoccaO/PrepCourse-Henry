// OBJETOS = permiten guardar caracteristicas relacioandas al al objeto en si, o sea propiedades. 

let miPerro = {
    'nombre': 'gino',
    'edad': 5,
    'peso': 6,
    'raza': 'Beagle'
};

let miObjetop = {
    5: 'cinco'
};

//Acceder a la variable con console.log
console.log(miPerro.nombre);

// notacion alternativa para acceder a las propiedades. 

let miCuadero = {
    'color': 'verde',
    'categoria': 3,
    'numero de paginas': 200,
    'numero de hojas': 100
};
console.log(miCuadero['color']); // aca se utiliza corchetes por ende es EQUYIVALENTE. 
//se usa para aquellas propiedades que tienen ESPACIOS, sino se unen todas

// es util cuando necesitamos ACCEDER a la propiedad de un objeto usando variables. 

let resultaods = {
    1: 'nora',
    2: 'gino',
    3: 'lombardi22',
    4: 'kiara'
};

let posicion = 4;

//acceder:
 console.log(resultaods[posicion]); //Asi se puede acceder, ya que es mas dinamico porque depende del valor de la variable. 