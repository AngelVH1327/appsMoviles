function appendToDisplay(value) { //funcion para que los valores que vaya seleccionando el usuario se muestrene en la pantalla
    document.getElementById('display').value += value; //aqui se va ir aumentando dependiendo de lo que seleccione el usuario
}

function clearDisplay() {  //funcion para eliminar todos los value guardados en la memoria y limpiar el display 
    document.getElementById('display').value = '';
}

function deleteLast() {  //funcion para discriminar el utimo valor y borrarlo 
    let displayValue = document.getElementById('display').value; //aqui se discrimina el ultimo valor ingresado
    document.getElementById('display').value = displayValue.slice(0, -1); //aqui se borra el ultimo valor
}
function calculateResult() { //funcion para calcular el resultado y colocarlo en el display
    try {
        let result = eval(document.getElementsById('display').value); //se usa una funcion matematica para hacer las operacines
        document.getElementById('display').value = result;
    } catch(error) {
        alert("Expresion invalida"); //en caso de ingresar algo invalido se tiene que mandar un error
    }
}