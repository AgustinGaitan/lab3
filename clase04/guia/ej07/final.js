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
var ajax = new Ajax();
function Verificar() {
    //let nombre = (<HTMLInputElement>document.getElementById("txtNombreUser")).value;
    //let parametros = `nombreUser=${nombre}`;
    ajax.Post("comprobarDisponibilidad.php", Exito);
}
function Exito(rtaServidor) {
    document.getElementById("idDiv").innerHTML = rtaServidor;
    console.log(rtaServidor);
}
function CambiarInput() {
    //let i : number = 0;
    var id = "id";
    for (var i = 0; i < 5; i++) {
        id += i;
        var input = document.getElementById("txtNombreUser").value = document.getElementById(id).innerText;
    }
}
