<?php
    function conectar(){
        $bd = mysqli_connect("localhost","root","","adventurewar");
        if (!$bd){
            echo "<h4>Error al conectarse a la Base de Datos</h4>";
            return NULL;
        }
        return $bd;
    }

?>