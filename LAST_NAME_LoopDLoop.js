

/* Sabemos que necesitamos un bucle ya que es necesario que se repita una accion */

let recorrido = 0;

for (recorrido = 0; recorrido < 10; recorrido++){
    /* en la primera expresion se indica en que valor inicia el recorrido, en la segunda se indica que si el recorrido es mayor a 10 se corte el ciclo y en la tercera expresion actualizamos el valor incrementandolo para generar el bucle*/
    if(recorrido>=3){
        console.log(`Toma, un caramelo por recorrer ${recorrido} kilometros ¡Felicidades!`)
    }
    /* En el condicional se expresa que si el recorrido que se realizo es mayor o igual a 3 se imprima en la consola el mensaje que ofrece el caramelo */
}
// Característica Stretch 1 

/* Para poder indicar que solo se otorgue el caramelo a partir de los 3km  y si va a una velocidad de 9km, cree la variable velocidad */

let velocidad = 9;

for (recorrido=0; recorrido < 10 ; recorrido++){
    if (recorrido>=3 && velocidad >= 9){
        console.log(`Toma, un caramelo por recorrer ${recorrido} kilometros tan rapido!`)
    }
}