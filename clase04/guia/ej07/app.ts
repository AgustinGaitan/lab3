///// <reference path="ajax.ts" />

    let ajax = new Ajax();

    function Verificar():void 
    {
        //let nombre = (<HTMLInputElement>document.getElementById("txtNombreUser")).value;

        //let parametros = `nombreUser=${nombre}`;

        ajax.Post("comprobarDisponibilidad.php",Exito);
        
        
    }

    function Exito(rtaServidor : string):void
    {
        (<HTMLDivElement> document.getElementById("idDiv")).innerHTML = rtaServidor;
        console.log(rtaServidor);
    }

    function CambiarInput() : void
    {

        let input = (<HTMLInputElement> document.getElementById("txtNombreUser")).value = (<HTMLElement> document.getElementById("idA")).innerText;
       
    }

    
   
    
    
    
