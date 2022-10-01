/* Cree la funcion para que salude con el nombre que se ingrese y le indique el horario. Despues, si el nombre ingresado es count dooku ejecuta una alerta que indica el mensaje  */

function saludo (name, hora) {
    console.log(`Hola ${name}, la hora es ${hora}`)

    if(name === "Count Dooku"){
        alert(`¡Voy por ti, Dooku!`)
    }
}

saludo (prompt(`Ingresa tu nombre`), prompt(`Ingresa un horario`))

