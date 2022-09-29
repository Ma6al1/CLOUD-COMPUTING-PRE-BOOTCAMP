
// Para el parque tematico, cree 2 variables. Una para la edad y la otra para la altura, ambas expresadas en numeros

var age = 10;
var height = 100;

/* En el caso de la altura los 100 equivalen a centimetros 
100 centimetros = 1 metro */

/* Ahora vamos con las condiciones para subirse a la atraccion */

if (height > 52){ 
    console.log("¡Subete, chico!")
    /* En esta condicion estableci que si la altura es mayor a 52, al niño le va a aparecer un mensaje que le indique que puede subirse a la atraccion.  */
} else {
    console.log("Lo siento, chico. Tal vez el proximo año.")
    /* En cambio, si esa condicion no se cumple, y la variable (altura del niño) es menor a 52 al niño le va a aparecer un mensaje indicando que por el momento no puede subirse a la atraccion. */
}