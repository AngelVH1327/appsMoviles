//FUNCIONES

/*
function hello() {
    console.log('Hola js');
    console.log('Hols html');
    console.log('Hola css');
}

hello();
hello();
*/

/*
function hello() {
    return "holajs";
}

const result = hello();
console.log(result);
*/

/*
function hello() {
    return "holajs";
}
console.log(hello());
*/

/*
function hello() {
    return {};
}
console.log(hello());
*/

/*
function hello() {
    return {
        nombre: 'angel'
    }
}
console.log(hello());
*/



//FUNCION QUE RETORNA A OTRA FUNCION

/*
function hello() {
    return function() {
        return "Hola js"

    }
}
console.log(hello()());
*/


//USO DE PARAMETROS EN FUNCIONES

/*
function hellpconJS(name) {
    return 'Hola ' + name 
}
console.log(hellpconJS('angel'));
console.log(hellpconJS('emilio'));
console.log(hellpconJS('karol'));
console.log(hellpconJS('alejandro'));
*/

/*
function hellpconJS(x,y) {
    return x + y;
}
console.log(hellpconJS(10,20));
*/

/*
function hellpconJS(x,y=0) {
    return x + y;
}
console.log(hellpconJS(10));
*/


//OBJETOS

const user = {
    nombre: 'Angel',
    apellidoP: 'Valadez',
    apellidoM: 'Hernandez',
    edad: 17,
    edoCivil:'comprometido',
    domicilio: {
        ciudad: 'CDMX',
        calle: 'Mexico',
        numero: 872843732842,
    },

    amigos: ['Agustin', 'Mario'],
    activo: true,
    sendMassage: function(){
        return 'enviando msj'
    }
}

// alert ciudad, calle, numero
alert(user.domicilio.ciudad);
alert(user.domicilio.calle);
alert(user.domicilio.numero);

// consola los amigos
console.log(user.amigos);

// alert (activo o dado de baja)
alert(user.activo);

// consola nombre, apellidos, estado civil
console.log(user.nombre);
console.log(user.apellidoP);
console.log(user.apellidoM);
console.log(user.edoCivil);












