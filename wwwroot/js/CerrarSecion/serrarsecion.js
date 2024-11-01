

function cerrarSecion() {

    $.ajax({
        type: "POST",
        url: '../Login_Admin/cerrarSecion',//aqui va el metodo que esta en la carpeta controller

        success: function (response) {//en el response viene el mensaje de
            localStorage.removeItem("ID");
            window.location ="/VerProducto/VerProductos"
        },
        error: function (response) {
            alert("llamada incorrecta");
            console.log('entro al response');
        }
    })

}