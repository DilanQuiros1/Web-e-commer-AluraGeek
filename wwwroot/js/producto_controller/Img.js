$("#login").submit(function (e) {
    e.preventDefault();
    guardarImagen();
});

let file1 = "";
const guardarImagen = () => {
    var idpro = document.getElementById("idproducto").value;
    var nombre_pro = document.getElementById("nombre").value;
    var fileInput = document.getElementById('archivo');
    var precio_pro = document.getElementById("precio").value;
    var des_pro = document.getElementById("descripcion").value;
    var idVen_pro = localStorage.getItem("ID_Ven");
    var categoria = document.getElementById("categoria").value;
    var stock_pro = document.getElementById("stock").value;
    var respuesta_msj = document.getElementById("respuesta");

    
    var file = fileInput.files[0]; 

   
    if (file) {
        var formData = new FormData(); 

        formData.append('archivo', file); 

        
        fetch('../CraerProducto/GuardarImagen', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text()) 
            .then(data => {
               
                if (categoria != 0) {
                    enviarDatos_producto(idpro, nombre_pro, data, precio_pro, des_pro, idVen_pro, categoria, stock_pro);
                    
                }
                else {
                    new PNotify({
                        title: 'Listo',
                        text: 'Hubo en error al agregar producto',
                        type: 'error',
                        styling: 'bootstrap3'
                    });
                }
                
            })
            .catch(error => {
                new PNotify({
                    title: 'Error',
                    text: 'Hubo un error en la ejecucion',
                    type: 'error',
                    styling: 'bootstrap3'
                });
                console.error('Error de red:', error);
            });
    }
 
}


const pruebaimg=(nombre) => {
    console.log('nombre ',nombre)
};


function enviarDatos_producto(idpro, nombre_pro, url_pro,precio_pro,des_pro,idVen_pro, categoria_pro, stock_pro) {

    console.log('url ',url_pro);
    var url = "https://localhost:7262/Producto/insertar_produto";//para persona
    var datos = {
        id_producto: idpro,//
        nombre_producto: nombre_pro,
        url_producto: url_pro,
        precio_producto: precio_pro,
        descri_producto: des_pro,
        id_vendedor: idVen_pro,
        categoria: categoria_pro,
        stock: stock_pro
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
            } else {
                new PNotify({
                    title: 'Error',
                    text: 'Hubo un error',
                    type: 'error',
                    styling: 'bootstrap3'
                });
            }
        })
        .catch(error => {
            alert(error);
        });
}