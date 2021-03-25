
var numerosPrimos = () : void =>
{
    var validarPrimo : boolean = false;

    for(var i : number = 2 ; i < 20 ; i++)
    {
        var maxDivisor : number = Math.floor(Math.sqrt(i));
        validarPrimo = true;

        for(var j : number = 2 ; j <= maxDivisor ; j++)
        {
            if(i%j == 0)
            {
                validarPrimo = false;
            }
        }
        if(validarPrimo)
        {
            console.log(i);
        }
        
    }

}


numerosPrimos();