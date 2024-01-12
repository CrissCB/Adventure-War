<?php
    header('Content-Type: application/json');

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        session_start();
        
        include("../conectar.php");
        $bd=conectar();

        $datosjs = json_decode(file_get_contents("php://input"), true);
        $data = $datosjs["data"];
        
        $user = $_SESSION["xlogin"];
        $sql = "SELECT id_partida FROM partidas WHERE user = (
                    SELECT id_user FROM users WHERE email = '$user'
                )  ORDER BY id_partida";
        
        $datos = mysqli_query($bd,$sql);
    
        $id_partida = 0;
        $limit = $data[0] + 1;

        $i = 0;
        while ($arr = mysqli_fetch_array($datos) and $i < $limit) {
        
            if ($i == $data[0]) {
                $id_partida = $arr[0];
            }
        
            $i++;
        }

        $sql = "SELECT defensa, metal FROM partida_personaje WHERE id_pp = $id_partida";
        $datos = mysqli_query($bd,$sql);

        $arr = mysqli_fetch_array($datos);

        $defensa = $arr[0];
        $metal = $arr[1];

        $resultado['respuesta'] = "";

        if ($metal > 0) {
            $metal -= 1;
            $defensa += 2;

            $sql = "UPDATE partida_personaje SET defensa = $defensa, metal = $metal WHERE id_pp = $id_partida";

            $datos = mysqli_query($bd,$sql);

            $resultado['respuesta'] = "Si";
            $resultado['atributo'] = $defensa;
            $resultado['stack'] = $metal;
        }else{
            $resultado['respuesta'] = "No";

        }

        echo json_encode(['resultado' => $resultado]);

        mysqli_close($bd);
    }
?>