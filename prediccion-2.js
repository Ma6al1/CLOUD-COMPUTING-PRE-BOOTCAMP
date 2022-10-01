//Desafio 1

var arr = ["Up", "You", "Give", "To", "Going", "Never"];
for(var i = arr.length-1; i >= 0; i = i - 1) {
    console.log(arr[i]);
}

/* Respuesta= El bucle inicializa en 5 y se ejecuta siempre y cuando la variable sea igual o mayor a 0 y va decrementando su valor a lo largo del bucle. Lo que va a suceder es que se va a imprimir en la pantalla los valores del array desde el arr[5] hasta el arr[0]*/

//Desafio 2

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}

/* Respuesta=  El bucle inicializa en 1, siempre y cuando i sea menor a 10 y va incrementando su valor (+2). Lo que va a suceder es que en cada ciclo a la variable sum se le va a sumar el arr [i], luego se va a imprimir en consola el arr[i] y por ultimo se va a imprimir la variable sum.
Por lo que quedaria en el primer ciclo: 2,2. En el segundo ciclo(donde i=3 y sum=2): 4,6. Y asi sucesivamente  */


//Desafio 3

var arr = [8, 2, 0, 6, 12, 4, 3];
for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 6) {
        console.log(true);
    }
}

/* Respuesta= Este bucle inicializa en 0 y se ejecuta siempre y cuando i sea menor a 7 y va incrementando su valor. Lo que sucede dentro de la funcion es que se establece una condicion para que la consola imprima "true" cuando el arr[i] sea mayor o igual a 6. Por lo que el ciclo continuaria desde el 0 al 6. Al llegar al 6 es cuando se cumple la condicion, y se imprime en consola "True" */
