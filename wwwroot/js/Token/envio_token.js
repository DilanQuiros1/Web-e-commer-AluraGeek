
const btn = document.getElementById("envio_token");


btn.addEventListener('click', (evento) => {
    evento.preventDefault();
    enviar();
});

const enviar = (evento) => {
    
    const mail = document.getElementById("correo").value;
    const _mail = document.getElementById("_correo").value;

    if (mail === _mail) {

        var url = "https://localhost:7262/Usuarios/guardar_token";//
        var datos = {
            correo: mail
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
                        title: 'Envio exitoso',
                        text: 'Se envio un correo electronico',
                        type: 'error',
                        styling: 'bootstrap3'
                    });
                } else {
                    new PNotify({
                        title: 'Favor verifique',
                        text: 'Hubo un error al enviar el corre',
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
    else {
        alert('Los correos no coninciden');
    }

    

};