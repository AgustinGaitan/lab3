///// <reference path="ajax.ts" />

    let ajax = new Ajax();

    function Verificar():void 
    {
        let nombre = (<HTMLInputElement>document.getElementById("txtNombreUser")).value;

        //let parametros = `nombreUser=${nombre}`;

        ajax.Post("comprobarDisponibilidad.php",Exito);
        
        
    }

    function Exito(rtaServidor : string):void
    {
        (<HTMLSpanElement> document.getElementById("spanJorge")).innerHTML = rtaServidor;
        console.log(rtaServidor);
    }

    
   
    
    
    
