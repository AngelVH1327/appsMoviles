//FUNCION FLECHA

//1.************************************
function mifuncion (a,b) {
    return a*b;
}

//2.************************************
console.log (mifuncion(5,1));

//ESTRUCTURA DE FUNCION FLECHA
let salu2 = () => {};

//3.************************************
let saludo = (nombre) => {
    return 'Saludos ' + nombre;
}
console.log (saludo ('Juan'));

//4.************************************
let saludar = nombre => 'Saludos ' + nombre;
console.log (saludar ('Ramiro'));

//5.************************************
let suma = (a,b) => a+b;
console.log (suma(5,8));

//6.************************************
let obj = () => ({nombre: 'Roberto', edad: 20})

//LLAMAMAOS AL OBJETO Y ACCEDEMOS A LA PROPIEDAD
//let persona = obj().nombre;
//console.log (persona)
console.log (obj().nombre);

//7.************************************
let arrFunc = () => [1,2,3,4,5];
//accediendo a todo el array
console.log(arrFunc());
//accediendo al arreglo
console.log(arrFunc()[4]);