<?php
    session_start();
    include("conectar.php");
    $bd=conectar();
    $user = $_SESSION["xlogin"];

    $sql = "SELECT personaje FROM partidas WHERE `user` = (
                SELECT id_user FROM users WHERE email = '$user'
            )  ORDER BY id_partida";

    $datos = mysqli_query($bd,$sql);
    $rows = mysqli_num_rows($datos);

    if ($rows == 0){
        $sql = "INSERT INTO partidas(user, nivel) VALUES((
                        SELECT id_user FROM users WHERE email = '$user'
                    ), (
                    SELECT id_nivel FROM niveles ORDER BY id_nivel LIMIT 1
                ));";
        for ($i=0; $i < 3; $i++) { 
            $datos = mysqli_query($bd,$sql);
        }
        
        echo("000");
    }
    else{
        $msg = "";
        while ($arr = mysqli_fetch_array($datos)) {
            // $fila es un array indexado que contiene los datos de la fila actual
            if($arr[0]){
                $msg = $msg . "1";
            }else{
                $msg = $msg . "0";
            }
        }
        echo($msg);
    }
    mysqli_close($bd);
?>