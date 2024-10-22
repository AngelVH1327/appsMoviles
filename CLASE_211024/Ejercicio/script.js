let lista =  document.getElementById('lista');
let tarea = document.getElementById('tarea');

let añadirTarea = () => {

    if (tarea.value === "") {
        alert("ingresa una tarea");
        return;
    }


    lista.innerHTML += `<li>${tarea.value} <button onclick= "EliminarTarea(this)">Eliminar</button>`;
    console.log (tarea.value);
};

let EliminarTarea = (tareaEliminada) => {
    tareaEliminada.parentelement.remove();

    let tareasRestantes = lista.getElementsByTagName("li");

    console.clear();

    for (let i = 0; i < tareasRestantes.length; i++) {
        console.log(tareasRestantes[i].textContent.replace("Eliminar", "").trial());
    }
};