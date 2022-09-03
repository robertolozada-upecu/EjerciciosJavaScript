function AnioBisiesto(anio) {
    if ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0))){
        return true
    }
}

var anioValidar= prompt("Ingrese el año a validar:");
if(AnioBisiesto(anioValidar)){
    mensaje=" si ";
}
else{
    mensaje=" no ";
}
alert("El año " + anioValidar + mensaje + "es bisiesto.");