<?php
    session_start(); 
    $link = "http://localhost/AdventureWar/";
    $vida = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fvida.png?alt=media&token=eda57464-7d30-4bb7-ab09-5bceafcac834";
    $defensa = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fdefensa.png?alt=media&token=8f504f29-2904-43c2-89c8-a44205939fa8";
    $ataque = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fataque.png?alt=media&token=ff3ec0d1-17dd-4c65-ba17-c2591737189e";
    $pociones = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fpociones.png?alt=media&token=aedf5c4e-236b-4eda-8f02-80bc70e4791f";

    if (!isset($_SESSION["xlogin"])){
      header("Location: http://localhost/AdventureWar/index.php?msg=2");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include("../header.php"); ?>
    <link rel="stylesheet" href="<?php echo($link)?>css/inicio.css">
</head>
<body>
    <nav class="uk-navbar-container" id="nav_bar">
        <div class="uk-container">
            <div uk-navbar>

                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="#" id="ir_nivel">
                            Adventure War
                        </a></li>
                    </ul>
                </div>

                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="#" id="ir_salir">Salir</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>

    <div class="uk-child-width-1-1 uk-grid-collapse uk-background-fixed uk-background-center-center" uk-grid id="body">

        <div class="uk-flex uk-flex-center">
            <div class="uk-width-1-3@s">
                <div class="uk-background-secondary uk-flex uk-flex-center uk-flex-middle uk-text-center" id="lb_informacion_juego"></div>
            </div>
        </div>

        <div class="uk-margin-top">
            <div class="uk-child-width-1-3 uk-grid-collapse" uk-grid>
                <div class="uk-flex uk-flex-center" id="pj_usuario"></div>

                <div class="uk-flex uk-flex-center uk-flex-middle">
                    <div class="uk-grid-small uk-child-width-1-2@s" uk-grid>
                        <div ><img src="" alt="" id="img_accion_jugador" width="100" height="100"></div>
                        <div ><img src="" alt="" id="img_accion_enemigo" width="100" height="100"></div>
                    </div>
                </div>

                <div class="uk-flex uk-flex-center" id="pj_enemigo"></div>
            </div>
        </div>

        <div class="uk-flex uk-flex-center">
            <div class="uk-width-2-3@s">
                <div class="uk-child-width-1-2 uk-background-secondary uk-grid-collapse uk-padding-small uk-text-center" uk-grid>

                    <div>
                        <div class="uk-child-width-1-1 uk-grid-collapse" uk-grid>
                            <div>
                                <label id="lb_vida"></label>
                            </div>

                            <div class="uk-text-left">
                                <ul class="uk-list uk-margin-left">
                                    <li id="btn_ataque"></li>
                                    <li id="btn_defensa"></li>
                                    <li id="btn_curar"></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ul class="uk-list">
                            <li id="lb_vida_enemigo"></li>
                            <li id="lb_ataque_enemigo"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <footer class="uk-margin-medium-top" id="prueba">
            <div class="uk-text-center">
                <div class="uk-margin-right@m uk-flex-bottom uk-text-right@m">
                    <p>&copy; 2023 Por Cristian Burgos y Gabriel Peña. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    </div>

    <?php include("../script.php")?>
    <script src="<?php echo($link)?>script/juego.js"></script>
</body>
</html>