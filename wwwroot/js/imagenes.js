$("#login").submit(function (evento) {
    evento.preventDefault();
   
    handleImageUpload();
});

function handleImageUpload() {
    const input = document.getElementById('imageInput').value;
    alert('mensaje');

    var url = "https://localhost:7242/controller/img";
    var datos = {
        modelo: input,
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
                // Procesar la respuesta si es exitosa
                // ...
                window.location.href = "/Home/Index"; // Redirigir a una página diferente
            } else {
                // Manejar el caso de error si la respuesta no es exitosa
                // ...
            }
        })
        .catch(error => {
            // Manejar errores de conexión u otros errores
            // ...
        });

    //console.log(input);
}
