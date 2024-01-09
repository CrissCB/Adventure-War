<?php
    session_start();
    $link = "http://localhost/AdventureWar/";

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
    <div class="uk-child-width-1-1 uk-grid-small uk-background-fixed uk-background-center-center" uk-grid id="body">
        <div>
            <nav class="uk-navbar-container" id="nav_bar">
                <div class="uk-container">
                    <div uk-navbar>

                        <div class="uk-navbar-left">
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

        <div>
            <div class="uk-flex uk-flex-center">
                <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                    
                    <legend class="uk-legend uk-text-center">Partidas</legend>
                    <hr>

                    <div class="uk-child-width-1-1 uk-grid-small" uk-grid>
                        <div class="uk-flex uk-flex-center" id="par_uno">
                            <div class="uk-inline" id="p_uno"></div>
                        </div>
                        <div><hr></div>
                        <div class="uk-flex uk-flex-center" id="par_dos">
                            <div class="uk-inline" id="p_dos"></div>
                        </div>
                        <div><hr></div>   
                        <div class="uk-flex uk-flex-center" id="par_tres">
                            <div class="uk-inline" id="p_tres"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="modal-center" class="uk-flex-top" uk-modal>
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" id="div_modal"></div>
        </div>

        <footer class="uk-margin-medium-top" id="prueba">
            <div class="uk-text-center">
                <div class="uk-margin-right@m uk-flex-bottom uk-text-right@m">
                    <p>&copy; 2023 Por Cristian Burgos y Gabriel Peña. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    </div>

    <script type="module" src="<?php echo($link)?>script/tarjetas.js"></script>
    <?php include("../script.php")?>
</body>
</html>