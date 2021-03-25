"use strict";
var numerosPrimos = function () {
    var validarPrimo = false;
    for (var i = 2; i < 20; i++) {
        var maxDivisor = Math.floor(Math.sqrt(i));
        validarPrimo = true;
        for (var j = 2; j <= maxDivisor; j++) {
            if (i % j == 0) {
                validarPrimo = false;
            }
        }
        if (validarPrimo) {
            console.log(i);
        }
    }
};
numerosPrimos();
//# sourceMappingURL=ej7.js.map