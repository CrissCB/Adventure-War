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
        $nivel_pj = $data[1];

        $i = 0;
        while ($arr = mysqli_fetch_array($datos) and $i < $limit) {
        
            if ($i == $data[0]) {
                $id_partida = $arr[0];
            }
        
            $i++;
        }

        $sql = "SELECT nivel FROM partidas WHERE id_partida = $id_partida";
        $datos = mysqli_query($bd,$sql);
        $arr = mysqli_fetch_array($datos);

        $nivel_max = $arr[0];
        
        $resultado['respuesta'] = 0;
        
        if ($nivel_pj < 4 && $nivel_max == $nivel_pj) {
            $sql = "UPDATE partidas SET nivel = nivel+1 WHERE id_partida = $id_partida;";
            $datos = mysqli_query($bd,$sql);
            
            $resultado['respuesta'] = $nivel_max+1;
        }

        echo json_encode(['resultado' => $resultado]);

        mysqli_close($bd);
    }
?>