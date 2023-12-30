const btn1 = document.querySelector("#formReg")

btn1.addEventListener("submit", function(evt){
    
    evt.preventDefault();

    let div1 = document.querySelector("#alert_reg")

    div1.innerHTML = '<div uk-spinner="ratio: 3"></div>';
    //llamado asincrono

    fetch("http://localhost/AdventureWar/recursos/registrar.php",{
        method: 'post',
        body: new FormData(formReg)
    })
    .then(response => response.text())
    .then(data => {
        if ( data.includes("exito") ) {
            div1.innerHTML = `<div class="uk-alert-success" uk-alert>
                                <a href class="uk-alert-close" uk-close></a>
                                <p>${data}</p>
                             </div>`

                             window.location.href = "http://localhost/AdventureWar/index.php"
        }else{
            div1.innerHTML = `<div class="uk-alert-danger" uk-alert>
                                <a href class="uk-alert-close" uk-close></a>
                                <p>El email ya se encuentra registrado</p>
                             </div>`
        }
    })
    .catch(err => alert(err))
})