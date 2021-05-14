<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="app.ts"></script>
    <title>Document</title>
</head>
<body>
    



    <?php

    // $user = isset($_POST["nombreUser"]) ? $_POST["nombreUser"] : NULL;

        //$random = Rand(0,1);
        //sleep($random);
        $asd = 0;
        if($asd) 
        {
            echo "si";
        }
        else
        {
            echo "no";
            
            $path = "./jorge.txt";
            $archivo = fopen($path,"r");
            $i = 0;
            $id = "id";
        
            do
            {   

                $cadena = fgets($archivo);
                $cadena = trim($cadena);
                $array = explode($cadena, PHP_EOL);
                $id .= $i;

                echo "<ul> 
                    <li>";
                    ?>

                <a href=# id ="idA" onclick="CambiarInput()">
                    
                <?php
                echo $cadena;
                ?>
                 </a>
                <?php

               

                echo "</a>
                    </li>
                    </ul>";
                
                    $i++;
           }while(!feof($archivo));
        
        fclose($archivo);
        }
        


    

    ?>
</body>

</html> 