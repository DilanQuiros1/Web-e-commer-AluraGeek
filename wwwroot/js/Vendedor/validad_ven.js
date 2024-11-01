
$("#login_ven").submit(function (e) {
    e.preventDefault();
    iniciarSecion();
    //alert('entro');
});

function iniciarSecion() {

    var correo_ven = document.getElementById("correo").value;
    var contra_ven = document.getElementById("clave").value;


    var dataEnviar = {
        vendedor: correo_ven,
        password: contra_ven
    };
    //callbacks
    $.ajax({
        type: "POST",
        url: '../Login_Admin/validarVendedor',
        data: dataEnviar,
        dataType: "json",
        success: function (response) {
            if (response.msjCod=="1") {
                window.location.href = "/CraerProducto/Craer_producto";
                localStorage.removeItem("ID_Ven");
                localStorage.setItem("ID_Ven", correo_ven);
            }
            else {
                new PNotify({
                    title: 'Favor verifique',
                    text: 'Hubo un error al validar el vendedor',
                    type: 'error',
                    styling: 'bootstrap3'
                });
            }
                      
        },
        error: function (response) {
            //alert("llamada incorrecta");
            new PNotify({
                title: 'Favor verifique',
                text: 'Hubo un error al validar el vendedor',
                type: 'error',
                styling: 'bootstrap3'
            });
            console.log('entro al response');
        }
    })


}
