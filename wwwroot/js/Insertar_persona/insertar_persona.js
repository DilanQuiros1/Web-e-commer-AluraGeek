$("#login").submit(function (evento) {
    evento.preventDefault();
    enviarDatos_per();
});


function enviarDatos_per() {
    var idper = document.getElementById("idpersona").value;
    var nombre_per = document.getElementById("nombre").value;
    var ape_per = document.getElementById("apellidos").value;
    var correoUsuario = document.getElementById("correo").value;
    var contrasena = document.getElementById("usu_password").value;
    var per_dire = document.getElementById("direccion").value;
    var per_tel = document.getElementById("telefono").value;
    var sexo = document.getElementById("sexo").value;
    enviarDatos_usuario(idper, correoUsuario, contrasena);
    //localStorage.setItem("ID", idper);//para guardar el IDPERSONA y luego usarlo en la pagina Mi_Perfil

    var url = "https://localhost:7262/Persona/insertar_per";//para persona 
    var datos = {
        per_id: idper,//
        per_nombre: nombre_per,
        per_apellidos: ape_per,
        per_correo: correoUsuario,
        per_direccion: per_dire,
        per_telefono: per_tel,
        per_sexo: sexo
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
                console.log('se inserto persona');

            } else {

            }
        })
        .catch(error => {
            // Manejar errores de conexión u otros errores
            // ...
        });
}

function enviarDatos_usuario(idper, correoUsuario, contrasena) {

   
    var url = "https://localhost:7262/Usuarios/guardar";//
    var datos = {
        idPersona_foranea: idper,
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