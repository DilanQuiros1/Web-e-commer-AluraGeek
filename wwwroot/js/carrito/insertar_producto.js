
const enviarDatos_carrito= (id_usu,id_ven,id_pro,cantidad_pro)=> {

    var url = "https://localhost:7262/Carrito/insertar_produto-carrito";
    var datos = {
        id_persona: id_usu,
        id_vendedor: id_ven,
        id_producto: id_pro,
        cantidad_producto: cantidad_pro
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                
                new PNotify({
                    title: 'Listo',
                    text: 'Se agrego de forma correcta',
                    type: 'succ',
                    styling: 'bootstrap3'
                });
                
            } else {
                new PNotify({
                    title: 'Error',
                    text: 'Ya esta existe en el carrito',
                    type: 'error',
                    styling: 'bootstrap3'
                });
            }
        })
        .catch(error => {
            alert('No se inserto', error);
        });
}

export const insert_producto_carrito = {
    enviarDatos_carrito
}