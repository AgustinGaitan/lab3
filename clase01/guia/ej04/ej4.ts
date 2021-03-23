
var determinarNumero = (x : number) : void  => {

    if(x % 2 != 0 )
    {
        console.log("El numero "+x+" es impar, siendo "+x+" el numero recibido como prametro");
    }
    else
    {
        
        console.log("El numero "+x+" es par, siendo "+x+" el numero recibido como prametro");
        
    }

}


determinarNumero(5);
determinarNumero(2);
determinarNumero(7);
determinarNumero(12);
