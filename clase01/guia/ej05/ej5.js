"use strict";
var nombre = "Agustin";
var apellido = "Gaitan";
var MostrarNombreApellido = function (nom, ape) {
    var nombreArreglado = nom.charAt(0).toUpperCase() + nom.slice(1);
    var apellidoArreglado = ape.toUpperCase();
    return nombreArreglado + ", " + apellidoArreglado;
};
console.log(MostrarNombreApellido(nombre, apellido));
//# sourceMappingURL=ej5.js.map