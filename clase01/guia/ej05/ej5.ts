
var nombre : string = "Agustin";
var apellido : string = "Gaitan";

var MostrarNombreApellido = (nom : string, ape : string) : string =>{

    var nombreArreglado :string = nom.charAt(0).toUpperCase() + nom.slice(1);
    var apellidoArreglado : string = ape.toUpperCase();

    return  nombreArreglado + ", " + apellidoArreglado;


}

console.log(MostrarNombreApellido(nombre,apellido));