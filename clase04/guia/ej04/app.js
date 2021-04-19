"use strict";
///// <reference path="ajax.ts" />
//import { Ajax } from "./ajax";
var ajax = new Ajax();
function ClickPost() {
    var operador = document.getElementById("operador");
    var primerOperando = document.getElementById("primerOperando");
    var segundOperando = document.getElementById("segundoOperando");
    var parametros = 'operador=${operador}&primerOperando=${primerOperando}&primerOperando=${segundoOperando}';
    ajax.Post("http://localhost/lab3/clase04/guia/ej04/administracion.php", Calcular, parametros);
}
function Calcular(resultado) {
    document.getElementById("spanResultado").innerHTML = resultado;
}
//# sourceMappingURL=app.js.map