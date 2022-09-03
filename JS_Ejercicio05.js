function Fibonacci(cantidad) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < cantidad; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}

var cantidadNumeros= prompt("Ingrese la cantidad de números Fibonacci que desea generar:");
if(cantidadNumeros<=0){
    alert("No se puede generar la serie. ¡Por favor verifique la cantidad de números!");
}
else{
    if(cantidadNumeros==1){
        alert("La serie de un número Fibonacci es: 0");
    }
    else{
        var serie = Fibonacci(cantidadNumeros);
         alert("La serie de " + cantidadNumeros + " números Fibonacci es: " + serie);   
    }
}
