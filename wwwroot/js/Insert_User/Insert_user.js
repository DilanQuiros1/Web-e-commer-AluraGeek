$("#login").submit(function (e) {
    e.preventDefault();
    //alert('alertaa');
    insert_user();
});


function insert_user() {

    var per_id = document.getElementById("idpersona").value;//esta adentro del metodo porque sino no se lee
    var correo = document.getElementById("correo").value;



    var dataEnviar = {
        idPersona_foranea: per_id,
        idUsuario: correo,
    };
    //callbacks
    $.ajax({
        type: "POST",
        url: 'insertar_usuario/agregar_user',//aqui va el metodo que esta en la carpeta controller
        data: dataEnviar,
        dataType: "json",
        success: function (response) {//en el response viene el mensaje de
            alert(response.msj)//se puede acceder a msjCod, msj, tipo de AuthController
            //window.location.href = "/Home/Index";
        },
        error: function (response) {
            alert("llamada incorrecta10 " + response.ajax + response.msj + " response " + response);
            console.log('entro al response');
        }
    })


}
