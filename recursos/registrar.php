<?php
    session_start();
    include("conectar.php");
    $bd=conectar();
    $email = $_REQUEST["txt_email"];
    $password = $_REQUEST["txt_password"];
    $nickname = $_REQUEST["txt_nickname"];

    $sql = "INSERT INTO users VALUES(id_user, '$email', md5('$password'), '$nickname')";

    $result = mysqli_query($bd,$sql);
    if (!$result){
        $xerr = mysqli_errno($bd);
        if ($xerr == 1062) {
            echo "El correo $email ya se encuentra registrado";
        }
        else{
            echo mysqli_error($bd);
        }
        
    }
    else {
        echo "Registrado con exito";
    }
    mysqli_close($bd);
?>