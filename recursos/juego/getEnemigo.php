<?php
    header('Content-Type: application/json');

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        session_start();
        
        include("../conectar.php");
        $bd=conectar();

        $datosjs = json_decode(file_get_contents("php://input"), true);
        $data = $datosjs["data"];
        
        $enemigo = $data[0];

        $sql = "SELECT nombre, apariencia, vida, ataque FROM personajes JOIN niveles on id_personajes = jefe WHERE id_nivel = $enemigo";
        $datos = mysqli_query($bd,$sql);
        $arr = mysqli_fetch_array($datos);

        $resultado = array_map(function($elemento) {
            return $elemento;
        }, $arr);

        echo json_encode(['resultado' => $resultado]);

        mysqli_close($bd);
    }
?>