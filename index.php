<?php
    $link = "http://localhost/AdventureWar/"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include("recursos/header.php"); ?>
    <link rel="stylesheet" href="<?php echo($link);?>css/login.css">
</head>
<body>
    <div class="uk-text-center uk-child-width-1-1 uk-background-fixed uk-background-center-center" uk-grid id="body">
        <div class="uk-flex uk-flex-center uk-flex-middle uk-margin-large-top">
            <div class="h1_title">
                <h1>Adventure war</h1>
            </div>
        </div>

        <div class="uk-margin-large-top">
            <div class="uk-flex uk-flex-center">
                <div class="uk-card uk-card-default uk-card-body uk-width-2-5@s" id="div_form">
                    <form action="<?php echo($link);?>recursos/validar.php" method="post">
                        <fieldset class="uk-fieldset">
                    
                            <legend class="uk-legend">Login</legend>
                    
                            <div class="uk-margin">
                                <div class="uk-inline">
                                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                                    <input class="uk-input uk-form-blank" type="email" aria-label="Not clickable icon" required maxlength="100" name="txt_email" id="email">
                                </div>
                            </div>
                        
                            <div class="uk-margin">
                                <div class="uk-inline">
                                    <span class="uk-form-icon" uk-icon="icon: lock"></span>
                                    <input class="uk-input uk-form-blank" type="password" aria-label="Not clickable icon" required maxlength="20" name="txt_password" id="password">
                                </div>
                            </div>
                            
                            <div class="uk-margin">
                                <div class="uk-inline">
                                    <button class="uk-button uk-button-default" type="submit" id="btn_ok">Ingresar</button>
                                </div>
                            </div>

                            <p class="uk-text-meta" id="p_form">¿No estas registrado? 
                                <a href="<?php echo($link);?>recursos/router/registro.php" class="uk-button-text">ingrese aqui.</a>
                            </p>

                            <div>
                                <div class="uk-text-center" id="alert_reg">
                                    <?php
                                        if (isset($_REQUEST["msg"])){
                                            $x = $_REQUEST["msg"];
                                            if ($x==1) echo "<div class='uk-alert-danger' uk-alert>
                                                                <a href class='uk-alert-close' uk-close></a>
                                                                <p>El usuario no existe</p>
                                                            </div>";
                                            else echo "<div class='uk-alert-danger' uk-alert>
                                                            <a href class='uk-alert-close' uk-close></a>
                                                            <p>Acceso no autorizado</p>
                                                        </div>";
                                        }
                                    ?>
                                </div>
                            </div>
                    
                        </fieldset>
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

    <?php include("recursos/script.php")?>
</body>
</html>