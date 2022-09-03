var nombre= prompt("Ingrese su nombre:");
nombre=nombre.toLowerCase();
nombre=nombre[0].toUpperCase() + nombre.substring(1);
alert("¡Hola! Es un gusto conocerte " + nombre);