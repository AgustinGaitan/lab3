"use strict";
var numero = 4;
var cadena = "Jorge";
var funcion = function (parametro_numerico, parametro_cadena) {
    if (!parametro_cadena) {
        console.log(parametro_numerico * (-1));
    }
    else {
        for (var i = 0; i < parametro_numerico; i++) {
            console.log(parametro_cadena + "\n");
        }
    }
};
funcion(numero, cadena);
funcion(2);
//# sourceMappingURL=ej3.js.map