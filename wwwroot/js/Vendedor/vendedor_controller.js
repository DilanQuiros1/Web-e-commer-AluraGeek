$("#login").submit(function (evento) {
    evento.preventDefault();
    enviarDatos();
});


function enviarDatos() {
    var id_vendedor = document.getElementById("id_ven").value;
    var nomber_ven = document.getElementById("nombre_ven").value;
    var contrasena = document.getElementById("ven_password").value;
    var tel_ven = document.getElementById("tel_ven").value;
    var id_persona = localStorage.getItem("ID");
    var dar_contra = document.getElementById("dar_contra_ven");
    console.log(id_persona);
    var url = "https://localhost:7262/Ven/insertar_vendedor";
    var datos = {
        id_ven: id_vendedor,
        ven_nombre: nomber_ven,
        ven_password: contrasena,
        persona_id: id_persona,
        ven_telefono: tel_ven
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
                //dar_contra.innerText = "Se agregro el vendedor de forma correcta, su password es: "+ contrasena;
               
            } else {
                new PNotify({
                    title: 'Favor verifique',
                    text: 'Hubo un error al registrar el vendedor',
                    type: 'error',
                    styling: 'bootstrap3'
                });
            }
        })
        .catch(error => {
            new PNotify({
                title: 'Favor verifique',
                text: 'Hubo un error al registrar el vendedor',
                type: 'error',
                styling: 'bootstrap3'
            });
        });
}