<?php
    session_start();
    include("conectar.php");
    $bd=conectar();
    $email = $_REQUEST["txt_email"];
    $password = $_REQUEST["txt_password"];

    $sql = "SELECT * FROM users where email='$email' and password=MD5('$password')";

    $datos = mysqli_query($bd,$sql);
    $rows = mysqli_num_rows($datos);
    if ($rows == 0){
        header("Location: http://localhost/AdventureWar/index.php?msg=1");
        exit();
    }
    else{
        $arr = mysqli_fetch_array($datos);
        $_SESSION["xlogin"]=$arr[1];
        $_SESSION["xnickname"]=$arr[3];
        header("Location: http://localhost/AdventureWar/recursos/router/inicio.php");
        exit();
    }
    mysqli_close($bd);
?>