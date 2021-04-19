///// <reference path="ajax.ts" />

//import { Ajax } from "./ajax";


    let ajax = new Ajax();

    function ClickPost():void 
    {
        let operador = (<HTMLInputElement>document.getElementById("operador")).value;
        let primerOperando = (<HTMLInputElement>document.getElementById("primerOperando")).value;
        let segundoOperando = (<HTMLInputElement>document.getElementById("segundoOperando")).value;

      

        switch(operador)
        {
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

        let parametros = `operador=${operador}&primerOperando=${primerOperando}&segundoOperando=${segundoOperando}`;
        ajax.Post("administracion.php", Calcular,parametros);
        
        
    }

    function Calcular(resultado : string) : void
    {
        (<HTMLSpanElement> document.getElementById("spanResultado")).innerHTML = resultado;

     
    }



