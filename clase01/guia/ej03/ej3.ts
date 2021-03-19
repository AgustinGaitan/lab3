

var numero : number = 4;
var cadena : string = "Jorge";




var funcion : Function = (parametro_numerico : number, parametro_cadena : string) => {

    if(!parametro_cadena){

        console.log(parametro_numerico * (-1));

    }
    else
    {
        for(let i : number = 0; i < parametro_numerico; i++)
        {
            console.log(parametro_cadena + "\n");
        }
    }

   


}

funcion(numero,cadena);

funcion(2);