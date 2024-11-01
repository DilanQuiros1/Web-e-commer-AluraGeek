$("#correo").submit(function (e) {
    e.preventDefault();
    const Nombre = document.querySelector("[data-nombreCorreo]").value;
    const mensaje = document.querySelector("[data-mensajeCorreo]").value;
    correo(Nombre, mensaje);
});

const correo=(Nombre, mensaje) =>{
   

    var url = "https://localhost:7262/Usuarios/envio_reporte_correo";//
    var datos = {
        nombre: Nombre,
        msj: mensaje,
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
                    text: 'Se envio de forma correcta',
                    type: 'succ',
                    styling: 'bootstrap3'
                });
                //dar_contra.innerText = "Se guardo el usuario de forma correcta, su password es: " + contrasena;

            } else {
                new PNotify({
                    title: 'Favor verifique',
                    text: 'Hubo un error envian el mensaje',
                    type: 'error',
                    styling: 'bootstrap3'
                });
            }
        })
        .catch(error => {
            new PNotify({
                title: 'Favor verifique',
                text: 'Hubo un error al enviar el correo',
                type: 'error',
                styling: 'bootstrap3'
            });
        });
}
