<?php
    $link = "http://localhost/AdventureWar/"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include("../header.php"); ?>
    <link rel="stylesheet" href="<?php echo($link);?>css/login.css">
</head>
<body>
    <div class="uk-child-width-1-1 uk-background-fixed uk-background-center-center" uk-grid id="body">
        <div class="uk-flex uk-flex-center uk-flex-middle uk-margin-large-top">
            <div class="h1_title">
                <h1><a href="<?php echo($link);?>index.php" class="uk-text-decoration-none">
                    Adventure war
                </a></h1>
            </div>
        </div>

        <div class="uk-margin-large-top">
            <div class="uk-flex uk-flex-center">
                <div class="uk-card uk-card-default uk-card-body uk-width-2-5@s" id="div_form">
                    <form class="uk-grid-small uk-child-width-1-1" uk-grid method="post" action="<?php echo($link);?>recursos/registrar.php" id="formReg">

                        <div class="uk-text-center">
                            <div>
                                <legend class="uk-legend">Registrate</legend>
                            </div>
                        </div>
                        
                        <div class="uk-width-1-4@s uk-text-center@s">
                            <label class="uk-form-label" for="inp_email">Correo</label>
                        </div>
                        <div class="uk-width-3-4@s">
                            <input class="uk-input uk-form-blank" id="inp_email" type="email" placeholder="example@example.com" required maxlength="100" name="txt_email">
                        </div>

                        <div class="uk-width-1-4@s uk-text-center@s">
                            <label class="uk-form-label" for="inp_password">Contraseña</label>
                        </div>
                        <div class="uk-width-3-4@s">
                            <input class="uk-input uk-form-blank" id="inp_password" type="password" required maxlength="20" name="txt_password">
                        </div>

                        <div class="uk-width-1-4@s uk-text-center@s">
                            <label class="uk-form-label" for="inp_nickname" uk-tooltip="title: maximo 20 caracteres; pos: left">
                                Nick-name
                            </label>
                        </div>
                        <div class="uk-width-3-4@s">
                            <input class="uk-input uk-form-blank" id="inp_nickname" type="text" required maxlength="20" uk-tooltip="title: maximo 20 caracteres;" name="txt_nickname">
                        </div>

                        <div>
                            <div class="uk-flex uk-flex-center">
                                <button class="uk-button uk-button-default" type="submit" id="btn_ok">Registrarse</button>
                            </div>
                        </div>

                        <div>
                            <div class="uk-text-center" id="alert_reg">
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <footer id="p_copy">
            <div class="uk-text-center">
                <div class="uk-margin-right@s uk-flex-bottom uk-text-right@s">
                    <p>&copy; 2023 Por Cristian Burgos y Gabriel Peña. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    </div>

    <script src="<?php echo($link);?>script/registro.js"></script>

    <?php include("../script.php"); ?>
</body>
</html>