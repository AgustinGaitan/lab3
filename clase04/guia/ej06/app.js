"use strict";
///// <reference path="ajax.ts" />
var ajax = new Ajax();
function Verificar() {
    //let nombre = (<HTMLInputElement>document.getElementById("txtNombreUser")).value;
    //let parametros = `nombreUser=${nombre}`;
    ajax.Post("administracion.php", Exito);
}
function Exito(rtaServidor) {
    console.log(rtaServidor);
}
function Falla(rtaServidor) {
    console.log(rtaServidor);
}
//# sourceMappingURL=app.js.map