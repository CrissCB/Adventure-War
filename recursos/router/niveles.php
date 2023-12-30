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
</head>
<body>
    <div>
        <nav class="uk-navbar-container">
            <div class="uk-container">
                <div uk-navbar>

                    <div class="uk-navbar-left">
                        <a class="uk-navbar-toggle" uk-navbar-toggle-icon href="#" uk-toggle="target: #offcanvas-reveal"></a>
                        <ul class="uk-navbar-nav">
                            <li>
                            </li>
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

            <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                <li class="uk-active"><a href="#">Crissis</a></li>
                <li class="uk-active"><a href="#">Nivel 1</a></li>
                <li class="uk-parent">
                    <a href="#">Personaje</a>
                    <ul class="uk-nav-sub">
                        <li><a href="#">
                            <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($vida)?>);"></span> 100
                            <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($defensa)?>);"></span> 50
                            <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($ataque)?>);"></span> 50
                        </a></li>
                    </ul>
                </li>
                <li class="uk-parent">
                    <a href="#">Objetos</a>
                    <ul class="uk-nav-sub">
                        <li><a href="#">
                            <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($metal)?>);"></span> 20
                            <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($pociones)?>);"></span> 20
                            <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($corazones)?>);"></span> 5
                            <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($colmillos)?>);"></span> 5
                        </a></li>
                    </ul>
                </li>
                <li class="uk-nav-divider"></li>
                <li class="uk-nav-header">Forja</li>
                <li>
                    <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($defensa)?>);"></span>
                    <label class="uk-text-small">50</label>
                    <button class="uk-button uk-button-default uk-button-small"><</button>
                    <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($metal)?>);"></span>
                    <label class="uk-text-small">20</label>
                </li>
                <li>
                    <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($ataque)?>);"></span>
                    <label class="uk-text-small">50</label>
                    <button class="uk-button uk-button-default uk-button-small"><</button>
                    <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($colmillos)?>);"></span>
                    <label class="uk-text-small">5</label>
                </li>
                <li class="uk-nav-header">Vitalidad</li>
                <li>
                    <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($vida)?>);"></span>
                    <label class="uk-text-small">100</label>
                    <button class="uk-button uk-button-default uk-button-small"><</button>
                    <span class="uk-icon uk-icon-image" style="background-image: url(<?php echo($corazones)?>);"></span>
                    <label class="uk-text-small">5</label>
                </li>
                <li class="uk-nav-divider"></li>
                <li class="uk-text-small"><a href="#" uk-toggle="target: #modal_dialog"><span class="uk-margin-small-right" uk-icon="icon: question"></span>Informacion</a></li>
            </ul>

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

    <div class="uk-child-width-1-1 uk-grid-small" uk-grid>
    </div>

    <?php include("../script.php")?>
</body>
</html>