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

        $sql = "SELECT elixir, metal, corazon, diente FROM recompensas JOIN niveles on recompensas.dificultad = niveles.dificultad WHERE id_nivel = $nivel_pj ORDER BY RAND() LIMIT 1";
        $datos = mysqli_query($bd,$sql);
        $arr = mysqli_fetch_array($datos);
        
        $sql = "UPDATE partida_personaje SET elixir=elixir+ $arr[0], metal=metal+$arr[1], corazon=corazon+$arr[2], colmillo=colmillo+$arr[3] WHERE id_pp = $id_partida";
        $datos = mysqli_query($bd,$sql);

        $resultado['respuesta'] = "Si";

        echo json_encode(['resultado' => $resultado]);

        mysqli_close($bd);
    }
?>