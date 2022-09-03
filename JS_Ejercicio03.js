function NumeroBotellas(cantidad) {
    var botellas=cantidad/0.75;
    return Math.floor(botellas);
}

var cantidad= prompt("Ingrese la cantidad de dinero:");
alert("Ha comprado " + NumeroBotellas(cantidad) + " botellas de agua.");