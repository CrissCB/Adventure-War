var urlParams = new URLSearchParams(window.location.search)
const ID = parseInt(urlParams.get('level'))

let divInfo = document.querySelector("#info_pj")

let div_nivel1 = document.querySelector("#level_1")
let div_nivel2 = document.querySelector("#level_2")
let div_nivel3 = document.querySelector("#level_3")
let div_nivel4 = document.querySelector("#level_4")

let global_corazon = 0
let global_metal = 0
let global_colmillo = 0
let global_nivel = 0

function init() {
    let data = [ID]

    fetch('http://localhost/AdventureWar/recursos/cargarTarjeta.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data:data })
    })
    .then(response => response.json())
    .then(parseData => {
        const personaje = parseData.resultado
        
        const vida = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fvida.png?alt=media&token=eda57464-7d30-4bb7-ab09-5bceafcac834"
        const defensa = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fdefensa.png?alt=media&token=8f504f29-2904-43c2-89c8-a44205939fa8"
        const ataque = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fataque.png?alt=media&token=ff3ec0d1-17dd-4c65-ba17-c2591737189e"
        const metal = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fmetal.png?alt=media&token=aa7403f1-9503-4d2c-b2b9-2e1e0734c559"
        const pociones = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fpociones.png?alt=media&token=aedf5c4e-236b-4eda-8f02-80bc70e4791f"
        const corazones = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fcorazones.png?alt=media&token=0dd33f06-6a7d-493d-8c17-b7e7d0511220"
        const colmillos = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fcolmillo.png?alt=media&token=3184c449-6e68-4740-be06-c0178fc770c3"

        global_nivel = personaje.level

        for (var i = 1; i <= 4; i++) {
            if (i == 1) {
                div_nivel1.innerHTML = i <= personaje.level ? tarjeta_nivel(true, i): tarjeta_nivel(false, 0)
            } else if (i == 2) {
                div_nivel2.innerHTML = i <= personaje.level ? tarjeta_nivel(true, i): tarjeta_nivel(false, 0)
            } else if (i == 3) {
                div_nivel3.innerHTML = i <= personaje.level ? tarjeta_nivel(true, i): tarjeta_nivel(false, 0)
            }else{
                div_nivel4.innerHTML = i <= personaje.level ? tarjeta_nivel(true, i): tarjeta_nivel(false, 0)
            }
        }

        let codigo = `
            <li class="uk-active"><a href="#">${personaje.nickname}</a></li>
            <li class="uk-active"><a href="#">Nivel ${personaje.level}</a></li>
            <li class="uk-parent">
                <a href="#">Personaje</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">
                        <span class="uk-icon uk-icon-image" style="background-image: url('${vida}');"></span> <label class="lb_vida">${personaje.vida}</label>
                        <span class="uk-icon uk-icon-image" style="background-image: url('${defensa}');"></span> <label class="lb_defensa">${personaje.defensa}</label>
                        <span class="uk-icon uk-icon-image" style="background-image: url('${ataque}');"></span> <label class="lb_ataque">${personaje.ataque}</label>
                    </a></li>
                </ul>
            </li>
            <li class="uk-parent">
                <a href="#">Objetos</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">
                        <span class="uk-icon uk-icon-image" style="background-image: url('${metal}');"></span> <label class="lb_metal">${personaje.metal}</label>
                        <span class="uk-icon uk-icon-image" style="background-image: url('${pociones}');"></span> <label class="lb_elixir">${personaje.elixir}</label>
                        <span class="uk-icon uk-icon-image" style="background-image: url('${corazones}');"></span> <label class="lb_corazon">${personaje.corazon}</label>
                        <span class="uk-icon uk-icon-image" style="background-image: url('${colmillos}');"></span> <label class="lb_colmillo">${personaje.colmillo}</label>
                    </a></li>
                </ul>
            </li> 
            <li class="uk-nav-divider"></li>
            <li class="uk-nav-header">Forja</li>
            <li>
                <span class="uk-icon uk-icon-image" style="background-image: url('${defensa}');"></span>
                <label class="uk-text-small lb_defensa">${personaje.defensa}</label>
                <button class="uk-button uk-button-default uk-button-small btn_atributos" id="btn_metal"><</button>
                <span class="uk-icon uk-icon-image" style="background-image: url('${metal}');"></span>
                <label class="uk-text-small lb_metal">${personaje.metal}</label>
            </li>
            <li>
                <span class="uk-icon uk-icon-image" style="background-image: url('${ataque}');"></span>
                <label class="uk-text-small lb_ataque">${personaje.ataque}</label>
                <button class="uk-button uk-button-default uk-button-small btn_atributos" id="btn_ataque"><</button>
                <span class="uk-icon uk-icon-image" style="background-image: url('${colmillos}');"></span>
                <label class="uk-text-small lb_colmillo">${personaje.colmillo}</label>
            </li>
            <li class="uk-nav-header">Vitalidad</li>
            <li>
                <span class="uk-icon uk-icon-image" style="background-image: url('${vida}');"></span>
                <label class="uk-text-small lb_vida">${personaje.vida}</label>
                <button class="uk-button uk-button-default uk-button-small btn_atributos" id="btn_vida"><</button>
                <span class="uk-icon uk-icon-image" style="background-image: url('${corazones}');"></span>
                <label class="uk-text-small lb_corazon">${personaje.corazon}</label>
            </li>
            <li class="uk-nav-divider"></li>
            <li class="uk-text-small"><a href="#" uk-toggle="target: #modal_dialog"><span class="uk-margin-small-right" uk-icon="icon: question"></span>Informacion</a></li>
        `
        divInfo.innerHTML = codigo

        global_corazon = personaje.corazon
        global_metal = personaje.metal
        global_colmillo = personaje.colmillo

        botones_atributos()
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function botones_atributos() {
    const btn_metal = document.querySelector("#btn_metal")
    const btn_ataque = document.querySelector("#btn_ataque")
    const btn_vida = document.querySelector("#btn_vida")

    let lb_vida = Array.from(document.querySelectorAll(".lb_vida"))
    let lb_corazon = Array.from(document.querySelectorAll(".lb_corazon"))
    let lb_ataque = Array.from(document.querySelectorAll(".lb_ataque"))
    let lb_colmillo = Array.from(document.querySelectorAll(".lb_colmillo"))
    let lb_defensa = Array.from(document.querySelectorAll(".lb_defensa"))
    let lb_metal = Array.from(document.querySelectorAll(".lb_metal"))    

    btn_metal.addEventListener("click", function() {
        if (global_metal > 0 ) {
            btn_metal.disabled = true
    
            cambiar_stacks(2, lb_defensa, lb_metal, btn_metal)
        }else{
            alerta_recursos()
        }
    })

    btn_ataque.addEventListener("click", function() {
        if (global_colmillo > 0) {
            btn_ataque.disabled = true
    
            cambiar_stacks(3, lb_ataque, lb_colmillo, btn_ataque)
        } else {
            alerta_recursos()
        }
    })

    btn_vida.addEventListener("click", function() {
        if (global_corazon > 0) {
            btn_vida.disabled = true
    
            cambiar_stacks(1, lb_vida, lb_corazon, btn_vida)
        } else {
            alerta_recursos()            
        }
    })
}

function cambiar_stacks(opt, lb_atributo, lb_objeto, btn_accion) {
    let data = [ID]
    let ubicacion = ""

    if (opt == 1) {
        ubicacion = 'http://localhost/AdventureWar/recursos/juego/stack_vida.php'
    } else if(opt == 2) {
        ubicacion = 'http://localhost/AdventureWar/recursos/juego/stack_defensa.php'
    }else{
        ubicacion = 'http://localhost/AdventureWar/recursos/juego/stack_ataque.php'
    }

    fetch(ubicacion, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data:data })
    })
    .then(response => response.json())
    .then(parseData => {
        const stacks = parseData.resultado

        if (stacks.respuesta.includes("Si")) {
            if (opt == 1) {
                global_corazon = stacks.stack
            } else if(opt == 2) {
                global_metal = stacks.stack
            }else{
                global_colmillo = stacks.stack
            }

            lb_atributo.forEach(lb => {
                lb.textContent = stacks.atributo
            })

            lb_objeto.forEach(lb => {
                lb.textContent = stacks.stack
            })

            btn_accion.disabled = false
        }else{
            alerta_recursos()
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function tarjeta_nivel(tarjeta, nivel) {
    codigo = ''

    if (tarjeta) {
        codigo =  `<div class="uk-card uk-card-secondary uk-card-body">
                       <h2 class="uk-card-title">
                           ${nivel}
                       </h2>
                   </div>`
    }else{
        codigo =  `<div class="uk-card uk-card-secondary uk-card-body">
                       <h2 class="uk-card-title">
                            <img class="img_candado" src="https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fcandado.png?alt=media&token=cbc12ae9-40a3-4762-8957-4c1a2fa33def" alt="">
                       </h2>
                   </div>`
    }

    return codigo
}

function alerta_recursos() {
    UIkit.notification({
        message: 'No tienes recursos suficientes!!',
        status: 'danger',
        pos: 'top-center',
        timeout: 2000
    });
}

div_nivel1.addEventListener("click", function() {
    entrar_nivel(1);
});

div_nivel2.addEventListener("click", function() {
    entrar_nivel(2);
});

div_nivel3.addEventListener("click", function() {
    entrar_nivel(3);
});

div_nivel4.addEventListener("click", function() {
    entrar_nivel(4);
});

function entrar_nivel(opt) {
    if (global_nivel >= opt) {
        window.location.href = `http://localhost/AdventureWar/recursos/router/juego.php?level=${encodeURIComponent(ID)}&pj=${encodeURIComponent(opt)}`
    }else{
        UIkit.notification({
            message: 'Aun no tienes acceso a este nivel',
            status: 'warning',
            pos: 'top-center',
            timeout: 2300
        });
    }
}

init()