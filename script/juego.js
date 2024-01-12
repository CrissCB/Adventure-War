var urlParams = new URLSearchParams(window.location.search)

const vida = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fvida.png?alt=media&token=eda57464-7d30-4bb7-ab09-5bceafcac834"
const defensa = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fdefensa.png?alt=media&token=8f504f29-2904-43c2-89c8-a44205939fa8"
const ataque = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fataque.png?alt=media&token=ff3ec0d1-17dd-4c65-ba17-c2591737189e"
const pociones = "https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/icons%2Fpociones.png?alt=media&token=aedf5c4e-236b-4eda-8f02-80bc70e4791f"

const ID = parseInt(urlParams.get('level'))
const NIVEL = parseInt(urlParams.get('pj'))

let bandera_btn = true

let VIDA = 0
let DEFENSA = 0

const a_nivel = document.querySelector("#ir_nivel")
const a_salir = document.querySelector("#ir_salir")

let lb_informacion = document.querySelector("#lb_informacion_juego")

let img_usuario = document.querySelector("#pj_usuario")
let img_enemigo = document.querySelector("#pj_enemigo")

let img_accion_personaje = document.querySelector("#img_accion_jugador")
let img_accion_enemigo = document.querySelector("#img_accion_enemigo")

let lb_vida_personaje = document.querySelector("#lb_vida")
let lb_vida_enemigo = document.querySelector("#lb_vida_enemigo")
let lb_ataque_enemigo = document.querySelector("#lb_ataque_enemigo")

let btn_ataque = document.querySelector("#btn_ataque")
let btn_defensa = document.querySelector("#btn_defensa")
let btn_curar = document.querySelector("#btn_curar")

let global_personaje = []
let global_enemigo = []

function init() {

    let data = [ID]
    let nivel = [NIVEL]

    fetch('http://localhost/AdventureWar/recursos/juego/getUsuario.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data:data })
    })
    .then(response => response.json())
    .then(parseData => {
        const personaje = parseData.resultado

        VIDA = personaje.vida
        DEFENSA = personaje.defensa

        global_personaje.push(personaje.nombre)
        global_personaje.push(personaje.vida)
        global_personaje.push(personaje.defensa)
        global_personaje.push(personaje.ataque)
        global_personaje.push(personaje.elixir)

        img_usuario.innerHTML = `<img src="${personaje.apariencia}" alt="">`

        lb_vida_personaje.innerHTML = `${personaje.vida} <span class="uk-icon uk-icon-image" style="background-image: url(${vida});"></span>`

        btn_ataque.innerHTML = `<a class="uk-link-reset" href="#">Atacar <span class="uk-icon uk-icon-image" style="background-image: url(${ataque});"></span> ${personaje.ataque}</a>`
        btn_defensa.innerHTML = `<a class="uk-link-reset" href="#">Defender <span class="uk-icon uk-icon-image" style="background-image: url(${defensa});"></span> ${personaje.defensa}</a>`
        btn_curar.innerHTML = `<a class="uk-link-reset" href="#">Curarse <span class="uk-icon uk-icon-image" style="background-image: url(${pociones});"></span> ${personaje.elixir}</a>`
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('http://localhost/AdventureWar/recursos/juego/getEnemigo.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data:nivel })
    })
    .then(response => response.json())
    .then(parseData => {
        const enemigo = parseData.resultado

        global_enemigo.push(enemigo.nombre)
        global_enemigo.push(enemigo.vida)
        global_enemigo.push(enemigo.ataque)

        img_enemigo.innerHTML = `<img src="${enemigo.apariencia}" alt="">`

        lb_vida_enemigo.innerHTML = `vida ${enemigo.vida} <span class="uk-icon uk-icon-image" style="background-image: url(${vida});"></span>`
        lb_ataque_enemigo.innerHTML = `Ataque ${enemigo.ataque} <span class="uk-icon uk-icon-image" style="background-image: url(${ataque});"></span>`
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function reset() {
    let data = []

    data.push(ID)
    data.push(VIDA)
    data.push(DEFENSA)

    fetch('http://localhost/AdventureWar/recursos/juego/reset_pj.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data:data })
    })
    .then(response => response.json())
    .then(parseData => {
        const msg = parseData.resultado

        console.log(msg.respuesta)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function accion_enemigo(opt) {
    const accion_aleatoria = Math.random() < 0.5;

    img_accion_enemigo.style.display = 'block'

    if (accion_aleatoria) {
        img_accion_enemigo.src = `https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/recursos%2Fespada.gif?alt=media&token=06f5379b-ec5b-4390-94aa-002556a3761e`
        lb_informacion.innerHTML = `<p>El ${global_enemigo[0]} esta atacando</p>`
    }else{
        img_accion_enemigo.src = `https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/recursos%2Fescudo.gif?alt=media&token=75636806-646d-45d6-91b0-b3bbd275e711`
        lb_informacion.innerHTML = `<p>El ${global_enemigo[0]} esta en modo defensa</p>`
    }
    
    let ubicacion = ""
    let data = []
    
    if (opt == 1) {
        if (accion_aleatoria) {
            if (global_personaje[1] - global_enemigo[2] <= 0) {

                UIkit.modal.alert('Upss... Te han matado, puedes seguir intentando.').then(function () {
                    reset()
                    setTimeout(function () {
                        window.location.href = `http://localhost/AdventureWar/recursos/router/niveles.php?level=${encodeURIComponent(ID)}`
                    }, 500)
                });

            }else{
                global_enemigo[1] = global_enemigo[1] - global_personaje[3]

                lb_vida_enemigo.innerHTML = `vida ${global_enemigo[1]} <span class="uk-icon uk-icon-image" style="background-image: url(${vida});"></span>`

                ubicacion = "http://localhost/AdventureWar/recursos/juego/vida_pj.php"
    
                data.push(ID)
                data.push(global_personaje[1])
                data.push(global_enemigo[2])
            }

        }else{
            global_enemigo[1] = global_enemigo[1] - parseInt(global_personaje[3]/2)

            lb_vida_enemigo.innerHTML = `vida ${global_enemigo[1]} <span class="uk-icon uk-icon-image" style="background-image: url(${vida});"></span>`

            setTimeout(function() {
                desactivar_accion(true)
                img_accion_enemigo.style.display = 'none'
                img_accion_personaje.style.display = 'none'
            }, 2000)
        }

    }else if (opt == 2) {
        if (accion_aleatoria) {
            data.push(ID)
            data.push(global_personaje[2])

            if (global_personaje[2] - parseInt(global_enemigo[2]/2) <= 0) {
                data.push(global_personaje[2])
            } else {
                data.push(parseInt(global_enemigo[2]/2))
            }

            ubicacion = "http://localhost/AdventureWar/recursos/juego/defensa_pj.php"

        }else{
            setTimeout(function() {
                desactivar_accion(true)
                img_accion_enemigo.style.display = 'none'
                img_accion_personaje.style.display = 'none'
            }, 2000)
        }
    } else {
        ubicacion = "http://localhost/AdventureWar/recursos/juego/pociones_pj.php"

        data.push(ID)
        data.push(global_personaje[4])
    }

    if (ubicacion.includes("http")) {

        fetch(ubicacion, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data:data })
        })
        .then(response => response.json())
        .then(parseData => {
            const personaje = parseData.resultado
            
            if (opt == 1) {
                global_personaje[1] = personaje.respuesta

                lb_vida_personaje.innerHTML = `${global_personaje[1]} <span class="uk-icon uk-icon-image" style="background-image: url(${vida});"></span>`

                setTimeout(function() {
                    desactivar_accion(true)
                    img_accion_enemigo.style.display = 'none'
                    img_accion_personaje.style.display = 'none'
                }, 2000)

            } else if(opt == 2) {
                global_personaje[2] = personaje.respuesta

                btn_defensa.innerHTML = `<a class="uk-link-reset" href="#">Defender <span class="uk-icon uk-icon-image" style="background-image: url(${defensa});"></span> ${global_personaje[2]}</a>`

                setTimeout(function() {
                    desactivar_accion(true)
                    img_accion_enemigo.style.display = 'none'
                    img_accion_personaje.style.display = 'none'
                }, 2000)
            } else{

                global_personaje[1] = global_personaje[1]+20
                global_personaje[4] = personaje.respuesta

                btn_curar.innerHTML = `<a class="uk-link-reset" href="#">Curarse <span class="uk-icon uk-icon-image" style="background-image: url(${pociones});"></span> ${global_personaje[4]}</a>`

                if (accion_aleatoria) {

                    if (global_personaje[1] - global_enemigo[2] <= 0) {
        
                        UIkit.modal.alert('Upss... Te han matado, puedes seguir intentando.').then(function () {
                            reset()
                            setTimeout(function () {
                                window.location.href = `http://localhost/AdventureWar/recursos/router/niveles.php?level=${encodeURIComponent(ID)}`
                            }, 500)
                        });
                    }else{
                        let data1 = [ID, global_personaje[1], global_enemigo[2]]
    
                        fetch('http://localhost/AdventureWar/recursos/juego/vida_pj.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ data:data1 })
                        })
                        .then(response => response.json())
                        .then(parseData => {
                            const personaje = parseData.resultado
                            
                            global_personaje[1] = personaje.respuesta

                            lb_vida_personaje.innerHTML = `${global_personaje[1]} <span class="uk-icon uk-icon-image" style="background-image: url(${vida});"></span>`
    
                            setTimeout(function() {
                                desactivar_accion(true)
                                img_accion_enemigo.style.display = 'none'
                                img_accion_personaje.style.display = 'none'
                            }, 2000)
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                    }

                }else{
                    setTimeout(function() {
                        desactivar_accion(true)
                        img_accion_enemigo.style.display = 'none'
                        img_accion_personaje.style.display = 'none'
                    }, 2000)
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

}

function atacar_personaje() {
    if (global_enemigo[1] - global_personaje[3] > 0 || global_enemigo[1] - (global_personaje[3]/2) > 0) {
        setTimeout(function() {
            accion_enemigo(1)
        }, 2000)
    }else{
        let data = [ID, NIVEL]

        fetch('http://localhost/AdventureWar/recursos/juego/sig_nivel.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data:data })
        })
        .then(response => response.json())
        .then(parseData => {

            fetch('http://localhost/AdventureWar/recursos/juego/recompensa.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data:data })
            })
            .then(response => response.json())
            .then(parseData => {
                
                UIkit.modal.alert('¡¡Haz matado al enemigo!! Ahora puedes equiparte mejor en el menu.').then(function () {
                    reset()
                    setTimeout(function () {
                        window.location.href = `http://localhost/AdventureWar/recursos/router/niveles.php?level=${encodeURIComponent(ID)}`
                    }, 500)
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });

    }
}

function defensa_personaje() {
    if (global_personaje[2] > 0) {
        setTimeout(function() {
            accion_enemigo(2)
        }, 2000)
    }else{
        lb_informacion.innerHTML = `<p>Tu escudo esta roto!!</p>`
        setTimeout(function () {
            desactivar_accion(true)
            img_accion_personaje.style.display = 'none'
        }, 2000)
    }
}

function vida_personaje() {
    if (global_personaje[4] > 0) {
        setTimeout(function() {
            accion_enemigo(3)
        }, 2000)
    }else{
        lb_informacion.innerHTML = `<p>No tienes más pociones!!</p>`
        setTimeout(function () {
            desactivar_accion(true)
            img_accion_personaje.style.display = 'none'
        }, 2000)
    }
}

function desactivar_accion(valor) {
    bandera_btn = valor
}

btn_ataque.addEventListener("click", function() {
    if (bandera_btn) {
        img_accion_personaje.style.display = 'block'
        img_accion_personaje.src = `https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/recursos%2Fespada.gif?alt=media&token=06f5379b-ec5b-4390-94aa-002556a3761e`
        lb_informacion.innerHTML = `<p>El ${global_personaje[0]} esta atacando</p>`

        desactivar_accion(false)
        atacar_personaje()
    }
})

btn_defensa.addEventListener("click", function() {
    if (bandera_btn) {
        img_accion_personaje.style.display = 'block'
        img_accion_personaje.src = `https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/recursos%2Fescudo.gif?alt=media&token=75636806-646d-45d6-91b0-b3bbd275e711`
        lb_informacion.innerHTML = `<p>El ${global_personaje[0]} esta en modo defensa</p>`

        desactivar_accion(false)
        defensa_personaje()
    }
})

btn_curar.addEventListener("click", function() {
    if (bandera_btn) {
        img_accion_personaje.style.display = 'block'
        img_accion_personaje.src = `https://firebasestorage.googleapis.com/v0/b/adventure-war.appspot.com/o/recursos%2Fposiones.gif?alt=media&token=56599ede-7fbb-44b8-a5a2-d9386c7eb593`
        lb_informacion.innerHTML = `<p>El ${global_personaje[0]} esta regenerando vida</p>`

        desactivar_accion(false)
        vida_personaje()
    }
})

a_nivel.addEventListener("click", function(evt) {
    evt.preventDefault();
    reset()
    setTimeout(function () {
        window.location.href = `http://localhost/AdventureWar/recursos/router/niveles.php?level=${encodeURIComponent(ID)}`
    }, 500)
})

a_salir.addEventListener("click", function(evt) {
    evt.preventDefault();
    reset()
    setTimeout(function () {
        window.location.href = `http://localhost/AdventureWar/recursos/cerrar.php`
    }, 500)
})

window.addEventListener('beforeunload', function() {
    reset()
})

init()