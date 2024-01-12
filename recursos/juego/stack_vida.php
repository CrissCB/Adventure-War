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

        $sql = "SELECT vida, corazon FROM partida_personaje WHERE id_pp = $id_partida";
        $datos = mysqli_query($bd,$sql);

        $arr = mysqli_fetch_array($datos);

        $vida = $arr[0];
        $corazon = $arr[1];

        $resultado['respuesta'] = "";

        if ($corazon > 0) {
            $corazon -= 1;
            $vida += 10; 

            $sql = "UPDATE partida_personaje SET vida = $vida, corazon = $corazon WHERE id_pp = $id_partida";

            $datos = mysqli_query($bd,$sql);

            $resultado['respuesta'] = "Si";
            $resultado['atributo'] = $vida;
            $resultado['stack'] = $corazon;
        }else{
            $resultado['respuesta'] = "No";
        }

        echo json_encode(['resultado' => $resultado]);

        mysqli_close($bd);
    }
?>