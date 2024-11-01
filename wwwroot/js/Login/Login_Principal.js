

$("#login").submit(function (e) {
    e.preventDefault();
    iniciarSecion();
});


function iniciarSecion() {

    var usuario = document.getElementById("email").value;
    var contra = document.getElementById("password").value;

    get_id(usuario);

    var dataEnviar = {
        usuario: usuario,
        password: contra
    };
    
    $.ajax({
        type: "POST",
        url: '../Login/validarUsuario',
        data: dataEnviar,
        dataType: "json",
        success: function (response) {
            
            if (response.msjCod=="1") {
                window.location.href = "/Login_Admin/Login_Admin";
            }
            else {
                new PNotify({
                    title: 'Favor verifique',
                    text: 'Hubo un error al credenciales de usuario',
                    type: 'error',
                    styling: 'bootstrap3'
                });
            }
            
        },
        error: function (response) {
            new PNotify({
                title: 'Favor verifique',
                text: 'Hubo un error al validar el usuario',
                type: 'error',
                styling: 'bootstrap3'
            });
        }
    })


}


const get_id_usuario_persona = (usu_correo) => {
    return fetch(`https://localhost:7262/controller/get_persona_id?usu_correo=${usu_correo}`).then((respuesta => {
        return respuesta.json();
    }));
}

function get_id(correo) {
    get_id_usuario_persona(correo).then((data) => {

        data.forEach(({ idPersona_foranea, idUsuario, password, sal }) => {
            localStorage.removeItem("ID");//lo elimina por si cambia de persona
            localStorage.setItem("ID", idPersona_foranea);
        });

    }).catch((error) => console.log('alerta500', error))
};
