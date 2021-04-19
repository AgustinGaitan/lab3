var Ajax = /** @class */ (function () {
    function Ajax() {
        var _this = this;
        this.Post = function (ruta, success, params) {
            if (params === void 0) { params = ""; }
            var parametros = params.length > 0 ? params : "";
            _this._xhr.open('POST', ruta, true);
            _this._xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            _this._xhr.send(parametros);
            _this._xhr.onreadystatechange = function () {
                if (_this._xhr.readyState === Ajax.DONE) {
                    if (_this._xhr.status === Ajax.OK) {
                        success(_this._xhr.responseText);
                    }
                }
            };
        };
        this._xhr = new XMLHttpRequest();
        Ajax.DONE = 4;
        Ajax.OK = 200;
    }
    return Ajax;
}());
///// <reference path="ajax.ts" />
//import { Ajax } from "./ajax";
var ajax = new Ajax();
function ClickPost() {
    var operador = document.getElementById("operador").value;
    var primerOperando = document.getElementById("primerOperando").value;
    var segundoOperando = document.getElementById("segundoOperando").value;
    switch (operador) {
        case "+":
            operador = "suma";
            break;
        case "-":
            operador = "resta";
            break;
        case "/":
            operador = "division";
            break;
        default:
            operador = "multiplicacion";
            break;
    }
    var parametros = "operador=" + operador + "&primerOperando=" + primerOperando + "&segundoOperando=" + segundoOperando;
    ajax.Post("administracion.php", Calcular, parametros);
}
function Calcular(resultado) {
    document.getElementById("spanResultado").innerHTML = resultado;
}
