// como acceder a las propiedades d los objs mediante corchetes. 

let miCuaderno = {
    'color': 'verde',
    'categoria': 3,
    'numeroDePaginas': 200,
    'numero de hojas' : 100

};

console.log(miCuaderno['numero de hojas']); // nombre de la propiedad
console.log(miCuaderno.color) // normalmente se usa notación de puntos.  
//es utilizable solo para propiedades con espacios. 


//acceder con el nombre de una variable ( visto en la otra compu)
// actualizar propiedades visto tmb en la otra compu, se agregan cpon el metodo PUSH. 

//mochila.contenido = []

//Agregar una propiedad. 

let curso = {
    'titulo': 'Aprende JS desde 0',
    'idioma': 'español',
    'duracion' : 30
};

// añadir una 4ta propiedad

curso['vistas'] = 34500;
console.log(curso.vistas);


// eliminar una propiedad
console.log(curso.duracion);
delete curso.duracion;
console.log(curso.duracion)

console.log(curso);

//nombre de la variable y nombre de la propiedad. 

// busqueda de objetos
// es una funcion que toma como argumento el SIMBOLO de dicho elemento y a partir de el retorna el nombre completo. 
// este codigo asocia dos valores por ende es mas facil para hacer asociacion de objetos. 
function buscarElementoQuimico(simbolo){
    let simbolosQuimicos = {
        'Al': 'Aluminio',
        'S' : 'Azufre',
        'Cl': 'Cloro',
        'He': 'Helio',
        'B': 'Boro',
        'Li': 'Litio'
    };
    // no necesitamos el nombre de la funcion, pq ya lo hicimos un objeto. 
    return simbolosQuimicos[simbolo] 
}
//

console.log(buscarElementoQuimico['azufre']);
console.log(buscarElementoQuimico('S'));
console.log(buscarElementoQuimico('Cl'));
console.log(buscarElementoQuimico('He'));
console.log(buscarElementoQuimico('B'));
console.log(buscarElementoQuimico('Li'));



// por ende, se puede acceder a el y a sus propiedades mediantes corchetes, push, delete

// QUE PASO: Se borra la parte de la funcion con 'switch' ya que se realizó al asociacion por objeto, por ende NO ES NECESARIA. 

/* function buscarElentoQuimico(simbolo){
    var elementoQuimico = '';

    switch (simbolo) { 
        case 'Al':
            elementoQuimico = 'Aluminio';
            break;
        case 'S':
            elementoQuimico = 'Azufre';
            break;
        case 'Cl':
            elementoQuimico = 'Cloro';
            break;
        case 'He':
            elementoQuimico = 'Helio';
            break;
        case 'B':
            elementoQuimico = 'Boro';
            break;
        case 'Li':
            elementoQuimico = 'Litio';
            break;

    }
}
    */ 


//verificar propiedades en objetos. 

let miLibro = {
    'color': 'Verde',
    'categoria': '3',
    'precio': 4.56

}
console.log(miLibro.hasOwnProperty('color'));  //true. util en condiciones: si el objeto la tiene: true
console.log(miLibro.hasOwnProperty('origen')) //False. 



//1. creamos una funcion que verefique si tiene o no la propidad, pasandole como parametro
// el OBJETO y la PROPIEDADA.
//2. Después utilizamos la conficion con el () y OBJ.hasOwnProperty(pasando la propiedad). 


function verificarPropiedad(obj, propiedad) { 
    if (obj.hasOwnProperty(propiedad)) {
        return 'Propiedad: ' + obj[propiedad]; // el valor de la propiedad en ese OBJETO. 
    } else {
        return 'El objeto no tiene esa propiedad.';
    }
}

console.log(verificarPropiedad(miCuaderno, 'pueblo'));

// HAS OWN PROPIETY. 