

const btn = document.getElementById("reset_password");

btn.addEventListener('click', (evento) => {
    
    evento.preventDefault();
    const clave = document.getElementById("password").value;
    const clave_copy = document.getElementById("_password").value;

    const urlParams = new URLSearchParams(window.location.search);
    const correo = urlParams.get('correo');
    const token = urlParams.get('token');

    if (clave === clave_copy) {

        var url = "https://localhost:7262/Token_password/modificar_password";
        var datos = {
            usu_correo: correo,
            newPassword: clave,
            tok_token: token
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
                        text: 'Se edito tu password',
                        type: 'succ',
                        styling: 'bootstrap3'
                    });

                } else {
                    new PNotify({
                        title: 'Error',
                        text: 'Token no valido',
                        type: 'error',
                        styling: 'bootstrap3'
                    });
                }
            })
            .catch(error => {
                new PNotify({
                    title: 'Error',
                    text: 'Token no valido',
                    type: 'error',
                    styling: 'bootstrap3'
                });
            });
    }
    else
    {
        new PNotify({
            title: 'Error',
            text: 'Credenciales no coinciden',
            type: 'error',
            styling: 'bootstrap3'
        });
    }
});

