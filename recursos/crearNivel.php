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

        $id_personaje = 0;

        if ($data[1] == 0) {
            $sql = "SELECT id_personajes FROM personajes WHERE LOWER(nombre) LIKE '%caballero%' LIMIT 1";
        } elseif ($data[1] == 1) {
            $sql = "SELECT id_personajes FROM personajes WHERE LOWER(nombre) LIKE '%vikingo%' LIMIT 1";
        } else {
            $sql = "SELECT id_personajes FROM personajes WHERE LOWER(nombre) LIKE '%arquero%' LIMIT 1";
        }

        $datos = mysqli_query($bd,$sql);
        $id_personaje = mysqli_fetch_array($datos);

        $sql = "INSERT INTO partida_personaje(id_pp, personaje, vida, defensa, ataque) VALUES('$id_partida', '$id_personaje[0]', 50, 10, 10)";

        $datos = mysqli_query($bd,$sql);
        
        $sql = "UPDATE partidas SET personaje = '$id_partida' WHERE id_partida = '$id_partida'";

        $datos = mysqli_query($bd,$sql);

        echo("exito");

        mysqli_close($bd);
    }
?>