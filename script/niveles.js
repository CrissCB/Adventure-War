var urlParams = new URLSearchParams(window.location.search)
const id = parseInt(urlParams.get('level'))

let divInfo = document.querySelector("#info_pj")
let divNiveles = document.querySelector("#niveles_pj")

function init() {
    let data = [id]

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

        let codigo = `
            <li class="uk-active"><a href="#">${personaje.nickname}</a></li>
            <li class="uk-active"><a href="#">Nivel 1</a></li>
            <li class="uk-parent">
                <a href="#">Personaje</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">
                        <span class="uk-icon uk-icon-image" style="background-image: url('${vida}'));"></span> ${personaje.vida}
                        <span class="uk-icon uk-icon-image" style="background-image: url('${defensa}');"></span> ${personaje.defensa}
                        <span class="uk-icon uk-icon-image" style="background-image: url('${ataque}');"></span> ${personaje.ataque}
                    </a></li>
                </ul>
            </li>
            <li class="uk-parent">
                <a href="#">Objetos</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">
                        <span class="uk-icon uk-icon-image" style="background-image: url('${metal}');"></span> ${personaje.metal}
                        <span class="uk-icon uk-icon-image" style="background-image: url('${pociones}');"></span> ${personaje.elixir}
                        <span class="uk-icon uk-icon-image" style="background-image: url('${corazones}');"></span> ${personaje.corazon}
                        <span class="uk-icon uk-icon-image" style="background-image: url('${colmillos}');"></span> ${personaje.colmillo}
                    </a></li>
                </ul>
            </li>
            <li class="uk-nav-divider"></li>
            <li class="uk-nav-header">Forja</li>
            <li>
                <span class="uk-icon uk-icon-image" style="background-image: url('${defensa}');"></span>
                <label class="uk-text-small">${personaje.defensa}</label>
                <button class="uk-button uk-button-default uk-button-small"><</button>
                <span class="uk-icon uk-icon-image" style="background-image: url('${metal}');"></span>
                <label class="uk-text-small">${personaje.metal}</label>
            </li>
            <li>
                <span class="uk-icon uk-icon-image" style="background-image: url('${ataque}');"></span>
                <label class="uk-text-small">${personaje.ataque}</label>
                <button class="uk-button uk-button-default uk-button-small"><</button>
                <span class="uk-icon uk-icon-image" style="background-image: url('${colmillos}');"></span>
                <label class="uk-text-small">${personaje.colmillo}</label>
            </li>
            <li class="uk-nav-header">Vitalidad</li>
            <li>
                <span class="uk-icon uk-icon-image" style="background-image: url('${vida}');"></span>
                <label class="uk-text-small">${personaje.vida}</label>
                <button class="uk-button uk-button-default uk-button-small"><</button>
                <span class="uk-icon uk-icon-image" style="background-image: url('${corazones}');"></span>
                <label class="uk-text-small">${personaje.corazon}</label>
            </li>
            <li class="uk-nav-divider"></li>
            <li class="uk-text-small"><a href="#" uk-toggle="target: #modal_dialog"><span class="uk-margin-small-right" uk-icon="icon: question"></span>Informacion</a></li>
        `
        divInfo.innerHTML = codigo

    })
    .catch(error => {
        console.error('Error:', error);
    });
}

init()