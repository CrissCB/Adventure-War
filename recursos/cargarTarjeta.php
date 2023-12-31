<?php
    header('Content-Type: application/json');

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        session_start();
        
        include("conectar.php");
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

        $sql = "
            SELECT
                personajes.nombre,
                partida_personaje.vida,
                partida_personaje.defensa,
                partida_personaje.ataque,
                partida_personaje.metal,
                partida_personaje.elixir,
                partida_personaje.corazon,
                partida_personaje.colmillo
            FROM 
            partida_personaje INNER JOIN personajes on personaje=id_personajes
            WHERE id_pp = $id_partida
        ";

        $datos = mysqli_query($bd,$sql);
        $arr = mysqli_fetch_array($datos);

        $resultado = array_map(function($elemento) {
            return $elemento;
        }, $arr);
    
        $nick_name = $_SESSION['xnickname'];

        $resultado['nickname'] = $nick_name;

        echo json_encode(['resultado' => $resultado]);

        mysqli_close($bd);
    }
?>