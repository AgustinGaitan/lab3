"use strict";
function MostrarInformacion(cadena) {
    var contMin = 0;
    var contMay = 0;
    for (var i = 0; i < cadena.length; i++) {
        if (cadena.charCodeAt(i) >= 65 && cadena.charCodeAt(i) <= 90) {
            contMay++;
        }
        else if (cadena.charCodeAt(i) >= 97 && cadena.charCodeAt(i) <= 122) {
            contMin++;
        }
    }
    if (contMay == cadena.length) {
        return "La cadena está formada por mayúsculas solamente.";
    }
    else if (contMin == cadena.length) {
        return "La cadena está formada por minúsculas solamente.";
    }
    else {
        return "La cadena está formada por una mezcla.";
    }
}
console.log(MostrarInformacion("Jorge"));
console.log(MostrarInformacion("ROBERTO"));
console.log(MostrarInformacion("karen"));
//# sourceMappingURL=ej10.js.map