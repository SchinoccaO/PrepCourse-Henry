// sirve para remplazar los condicionales. 
// sirve SOLO para esa valor en partiuclar, no hace falta condiconales.  
// cada caso se debe terminar con un BREACK. 
function clasificarValor(valor) {
    let respuesta;
    switch(valor){
        case 1:
            respuesta = 'alpha';
            break;
        case 2:
            respuesta = 'beta';
            break;
        case 3: 
            respuesta = 'gamma';
            break;
        case 4: 
            respuesta = 'delta';
            break;
    }
    return respuesta;  //NO OLVIDAR RETORNAR!!!!!!
}

console.log(clasificarValor(2 ));


let producto = 'pizza'; // cambiando el valor de la variable cambia el swicht

switch (producto) {
    case 'pizza':
        console.log('La pizza cuesta $10.55');
        break;
    case 'hamburguesa':
        console.log('cuestan $6.78');
        break;
    case 'helado':
        console.log('$10.20');
        break;

}

// OPCION PREDETERMINADA : swicht, cuando ninguno de los valores es el corectyo

function selecIdi(valor) {
    let idioma;
    switch(valor) {
        case 1: 
            idioma = 'español'
            break;
        case 2:
            idioma = 'italiano';
            break;
        default: 
            idioma = 'inglés';
            break;
    }
return idioma
}

console.log(selecIdi(1));
console.log(selecIdi(2));
console.log(selecIdi(5)); //da la opcion por DEFAULT. 


//multiples casos de la sentencia switch
function clasificarVolumen(valorr) {
    let volumen;
    switch(valorr) {
        case 1:
            volumen = 'bajo';
            break;
        case 2:
        case 3:
            volumen = 'intermedio';
            break;
        case 4:
        case 5:
        case 6:
            volumen = 'alto';
            break;
    }
return volumen
}
console.log(clasificarVolumen(4));
