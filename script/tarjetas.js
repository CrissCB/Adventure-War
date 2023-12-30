const modal = UIkit.modal("#modal-center");
let divM = document.querySelector("#div_modal")

const partida1 = document.querySelector("#par_uno")
const partida2 = document.querySelector("#par_dos")
const partida3 = document.querySelector("#par_tres")

let parrafo1 = document.querySelector("#p_uno")
let parrafo2 = document.querySelector("#p_dos")
let parrafo3 = document.querySelector("#p_tres")

let opt = []

partida1.addEventListener("click", function() {partidaSelect(0)})
partida2.addEventListener("click", function() {partidaSelect(1)})
partida3.addEventListener("click", function() {partidaSelect(2)})

function init() {
    let inner = '<div uk-spinner="ratio: 3"></div>'

    parrafo1.innerHTML = inner;
    parrafo2.innerHTML = inner;
    parrafo3.innerHTML = inner;

    fetch("http://localhost/AdventureWar/recursos/validaInicio.php", {})
    .then(response => response.text())
    .then(data => {
        
        opt.push(data.charAt(0))
        opt.push(data.charAt(1))
        opt.push(data.charAt(2))
    
        paintTarget()
    })
    .catch(err => alert(err))
}

function paintTarget() {
    let codigo = ""
    
    if (opt[0].includes("0")) {
        codigo = `
                <img src="https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/tarjetas%2Ftarjeta.png?alt=media&token=e5ea400a-f88a-41d9-b6a3-1931b1e1447d" alt="tarjeta" class="tarjetaF">
                <div class="uk-overlay uk-light uk-position-cover uk-padding-small uk-text-right uk-text-small">
                </div>
            `
        parrafo1.innerHTML = codigo;
    }else{
        
    }

    if (opt[1].includes("0")) {
        codigo = `
                <img src="https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/tarjetas%2Ftarjeta.png?alt=media&token=e5ea400a-f88a-41d9-b6a3-1931b1e1447d" alt="tarjeta" class="tarjetaF">
                <div class="uk-overlay uk-light uk-position-cover uk-padding-small uk-text-right uk-text-small">
                </div>
            `
        parrafo2.innerHTML = codigo;
    }else{

    }
    if (opt[2].includes("0")) {
        codigo = `
                <img src="https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/tarjetas%2Ftarjeta.png?alt=media&token=e5ea400a-f88a-41d9-b6a3-1931b1e1447d" alt="tarjeta" class="tarjetaF">
                <div class="uk-overlay uk-light uk-position-cover uk-padding-small uk-text-right uk-text-small">
                </div>
            `
        parrafo3.innerHTML = codigo;
    }else{

    }
}

function partidaSelect(id) {
    let txt = ""

    if ( parseInt(opt[parseInt(id)]) == 0 ) {
        txt = `
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <div class="uk-modal-header">
                    <h2 class="uk-modal-title">Partida ${id+1}</h2>
                </div>
                <div class="uk-modal-body">
                    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true; draggable: false;">

                        <ul class="uk-slider-items uk-grid">
                            <li class="uk-width-3-4">
                                <div class="uk-panel">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/personajes%2Fcaballero.png?alt=media&token=9ad32b81-6cc6-48e5-86fa-a1318789f50e" width="512" height="512" alt="">
                                    <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                        <h3 class="uk-margin-remove">Caballero</h3>
                                        <p class="uk-margin-remove">Honor, Lealtad y Valentia</p>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-width-3-4">
                                <div class="uk-panel">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/personajes%2Fmartillo.png?alt=media&token=f5ea5a0a-cd1c-42fe-b916-05f269a885c8" width="512" height="512" alt="">
                                    <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                        <h3 class="uk-margin-remove">Vikingo</h3>
                                        <p class="uk-margin-remove">Temerario, Arriesgado y Luchador</p>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-width-3-4">
                                <div class="uk-panel">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/personajes%2Farquero.png?alt=media&token=3eef482b-e3eb-41d4-a9e2-8021513eb015" width="512" height="512" alt="">
                                    <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                        <h3 class="uk-margin-remove">Arquero</h3>
                                        <p class="uk-margin-remove">Firmeza, Agilidad y Certero</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slider-item="previous" id="ant_img"></a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slider-item="next" id="sig_img"></a>

                    </div>
                </div>
                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-primary" type="button" id="btnCrear">Crear</button>
                </div>
            `

            divM.innerHTML = txt
            modal.show()

            let focus = 0

            const crearbtn = document.querySelector("#btnCrear")
            const antbtn = document.querySelector("#ant_img")
            const sigbtn = document.querySelector("#sig_img")

            antbtn.addEventListener("click", function() {
                focus -= 1
                console.log(focus)
            })

            sigbtn.addEventListener("click", function() {
                focus += 1
                console.log(focus)
            })

            crearbtn.addEventListener("click", function() {
                let data = [id, focus]

                fetch('http://localhost/AdventureWar/recursos/crearNivel.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ data:data })
                })
                .then(response => response.text())
                .then(text => {
                    if (text.includes("exito")) {

                        window.location.href = `http://localhost/AdventureWar/recursos/router/niveles.php`

                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            })
    }else{
        txt = `
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <div class="uk-modal-header">
                    <h2 class="uk-modal-title">Partida</h2>
                </div>
                <div class="uk-modal-body">
                    <p class="uk-margin-small-right" >
                        Vida
                        <span class="uk-icon uk-icon-image" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fvida.png?alt=media&token=eda57464-7d30-4bb7-ab09-5bceafcac834);"></span>
                        100 - Defensa
                        <span class="uk-icon uk-icon-image" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fdefensa.png?alt=media&token=8f504f29-2904-43c2-89c8-a44205939fa8);"></span>
                        50 - Ataque
                        <span class="uk-icon uk-icon-image" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fataque.png?alt=media&token=ff3ec0d1-17dd-4c65-ba17-c2591737189e);"></span>
                        50 <br> Metal para forjar
                        <span class="uk-icon uk-icon-image" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fmetal.png?alt=media&token=aa7403f1-9503-4d2c-b2b9-2e1e0734c559);"></span>
                        20 - Pociones de vida
                        <span class="uk-icon uk-icon-image" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fpociones.png?alt=media&token=aedf5c4e-236b-4eda-8f02-80bc70e4791f);"></span>
                        20 <br> Corazones de vitalidad
                        <span class="uk-icon uk-icon-image" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fcorazones.png?alt=media&token=0dd33f06-6a7d-493d-8c17-b7e7d0511220);"></span>
                        5 - Colmillos de dragon
                        <span class="uk-icon uk-icon-image" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fcolmillo.png?alt=media&token=3184c449-6e68-4740-be06-c0178fc770c3);"></span>
                        5
                    </p> 
                </div>
                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-default" type="button" id="btnBorrar">Borrar</button>
                    <button class="uk-button uk-button-primary" type="button" id="btnEntrar">Entrar</button>
                </div>
            `

            divM.innerHTML = txt
            modal.show()
    }
}

init()