let mochila = {
    'color': 'azul',
    'tamaño': 'mediano',
    'contenido': ['botella de agua', 'cuaderno']

};

//acceder a la variable. 
console.log(mochila.color); //azul

mochila.color = 'verde'; //acá seactualiza
console.log(mochila.color);


//si queremos agregar, accedemos a contenido

console.log(mochila.contenido);
mochila.contenido.push('lápiz');
console.log(mochila.contenido);
