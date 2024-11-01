$("#login").submit(function (evento) {
    evento.preventDefault();
    enviarDatos();
});


function enviarDatos() {
    var nombreper = document.getElementById("idpersona").value;
    var correoUsuario = document.getElementById("correo").value;
    var contrasena = document.getElementById("usu_password").value;
    console.log(nombreper, correoUsuario, contrasena);
    var url = "https://localhost:7262/Usuarios/guardar";//
    var datos = {
        idPersona_foranea: nombreper,
        idUsuario: correoUsuario,
        password: contrasena,
        sal: "",
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(datos)
    })
        .then(response => {
           
            if (response.ok) {
              
                new PNotify({
                    title: 'Listo',
                    text: 'Se agrego de forma correcta',
                    type: 'succ',
                    styling: 'bootstrap3'
                });
                //dar_contra.innerText = "Se guardo el usuario de forma correcta, su password es: " + contrasena;

            } else {
                new PNotify({
                    title: 'Favor verifique',
                    text: 'Hubo un error al registrar el usuario',
                    type: 'error',
                    styling: 'bootstrap3'
                });
            }
        })
        .catch(error => {
            new PNotify({
                title: 'Favor verifique',
                text: 'Hubo un error al registrar el usuario',
                type: 'error',
                styling: 'bootstrap3'
            });
        });
}