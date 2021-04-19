<?php
    $operador = isset($_POST["operador"]) ? $_POST["operador"] : NULL;
    $primerOperando = isset($_POST["primerOperando"]) ? $_POST["primerOperando"] : NULL;
    $segundoOperando = isset($_POST["segundoOperando"]) ? $_POST["segundoOperando"] : NULL;

    

    switch($operador)
    {
        case "suma":
            echo $primerOperando + $segundoOperando;
        break;
        
        case "resta":
            echo $primerOperando - $segundoOperando;
        break;
        
        case "division":
            echo $primerOperando / $segundoOperando;
        break;
        
        default:
            echo $primerOperando * $segundoOperando;
            
        break;
    }

?>