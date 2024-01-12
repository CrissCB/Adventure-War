<?php
    session_start(); 
    $link = "http://localhost/AdventureWar/";
    $vida = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fvida.png?alt=media&token=eda57464-7d30-4bb7-ab09-5bceafcac834";
    $defensa = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fdefensa.png?alt=media&token=8f504f29-2904-43c2-89c8-a44205939fa8";
    $ataque = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fataque.png?alt=media&token=ff3ec0d1-17dd-4c65-ba17-c2591737189e";
    $metal = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fmetal.png?alt=media&token=aa7403f1-9503-4d2c-b2b9-2e1e0734c559";
    $pociones = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fpociones.png?alt=media&token=aedf5c4e-236b-4eda-8f02-80bc70e4791f";
    $corazones = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fcorazones.png?alt=media&token=0dd33f06-6a7d-493d-8c17-b7e7d0511220";
    $colmillos = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fcolmillo.png?alt=media&token=3184c449-6e68-4740-be06-c0178fc770c3";

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
    <div class="uk-child-width-1-1 uk-grid-small uk-background-fixed uk-background-center-center" uk-grid id="body_level">
        <div>
            <nav class="uk-navbar-container" id="nav_bar">
                <div class="uk-container">
                    <div uk-navbar>

                        <div class="uk-navbar-left">
                            <a class="uk-navbar-toggle" uk-navbar-toggle-icon href="#" uk-toggle="target: #offcanvas-reveal"></a>
                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a href="<?php echo($link)?>recursos/router/inicio.php">
                                    Adventure War
                                </a></li>
                            </ul>
                        </div>

                        <div class="uk-navbar-right">
                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a href="<?php echo($link)?>recursos/cerrar.php">Salir</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    
        <div id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
            <div class="uk-offcanvas-bar uk-flex uk-flex-column">
    
                <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical" id="info_pj"></ul>
    
            </div>
        </div>
    
        <div id="modal_dialog" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <h2 class="uk-modal-title">Información</h2>
                <p>la vida <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($vida)?>);"></span> 
                    al inicar el juego tiene 50 puntos y la defenza <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($defensa)?>);"></span> 
                    y el ataque <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($ataque)?>);"></span> 
                    tienen 10 puntos. <br> <br>
                    Cada nivel te dara recompenzas como por ejemplo: Metal para forjar <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($metal)?>);"></span>, 
                    pociones de vida <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($pociones)?>);"></span>, 
                    corazones de vitalidad <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($corazones)?>);"></span> y 
                    colmillos de dragon <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($colmillos)?>);"></span>. <br> <br>
                    puedes tener maximo 100 corazones de vida, 50 de defenza, 50 de ataque, 20 de metal para forjar, 20 pociones de vida, 5 colmillos de dragon y 5 corazones de vitalidad.
                    Recuerda que todos estos items te ayudan a aumentar tus stacks y lo puedes hacer en el menu.
                </p>
            </div>
        </div>

        <div>
            <div class="uk-child-width-1-1 uk-margin-large-top" uk-grid>
                <div>
                    <div class=" uk-child-width-1-3@s uk-flex uk-flex-middle uk-flex-center uk-text-center" uk-grid>
                        <div id="level_1"></div>

                        <div id="level_2"></div>
                    </div>
                </div>
        
                <div>
                    <div class="uk-child-width-1-3@s uk-flex uk-flex-middle uk-flex-center uk-text-center" uk-grid>
                        <div id="level_3"></div>

                        <div id="level_4"></div>
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

    <script src="<?php echo($link)?>script/niveles.js"></script>
    <?php include("../script.php")?>
</body>
</html>