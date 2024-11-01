import { producto_service } from "../producto_controller/producto_service.js";
const Read_producto = (id_producto, nombre_producto, url_producto, precio_producto, categoria, telefono_persona, ven_telefono, cantidad) => {//luego se agrega el div de section_princiopal_titulo
    const linea = document.createElement('div');
    var total_precio = precio_producto * cantidad;
    console.log('precio total ',total_precio);
    const articulo = ` 
                  
                <div id="${nombre_producto}" data-nombre_pro class="card-header">${nombre_producto}  |  Categoria: ${categoria}</div> 
                <div class="producto">
                    <img src="/imagenes/${url_producto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Precio: ${precio_producto}</h5>
                        <a href="#" class="ver_producto_busqueda" data-a id="${id_producto}">Ver producto</a>
                        <h2 class="total_compra" >Cantidad Adquirida: ${cantidad} Total a pagar: ${total_precio}</h2>
                    </div>
                    <button class="btn_comprar" id="${telefono_persona}" data-comprar type="submit">Comprar</button>
                    <i id="${id_producto}" data-eliminar class="fa-solid fa-trash" style="color: #ff0000;"></i>
                    
                    <h3 id="${precio_producto}" data-precio_pro></h2>
                    <h3 id="${cantidad}" data-cantidad_pro></h2>
                </div>               
       
    `;


    linea.innerHTML = articulo;
    linea.classList.add("col");

    const ver_one = linea.querySelector("[data-a]");
    

    ver_one.addEventListener('click', (evento) => {
        const id = ver_one.id;
        window.location.href = `/Ver_one_producto/Ver_one_producto_sin_agregarCarrito?valor=${encodeURIComponent(id)}`;

    })

    const btn_comprar = linea.querySelector("[data-comprar]");
    

    btn_comprar.addEventListener('click', (evento) => {
        const email = btn_comprar.id;
        const precio = linea.querySelector("[data-precio_pro]").id;
        const nombre = linea.querySelector("[data-nombre_pro]").id;
        const cantidad = linea.querySelector("[data-cantidad_pro]").id;

        correo(email, nombre,precio, cantidad);
        console.log(email, nombre, precio, cantidad, nombre); 
    })

    const eliminar = linea.querySelector("[data-eliminar]");

    eliminar.addEventListener('click', () => {
        const id_pro = eliminar.id;
        var id_per = localStorage.getItem("ID");
        producto_service.delete_eliminarProducto_carrito(id_pro, id_per).then(() => {
            new PNotify({
                title: 'Listo',
                text: 'Se elimino de forma correcta',
                type: 'succ',
                styling: 'bootstrap3'
            });
        }).catch(error => alert('error'))
        
    })

    return linea;
}


const table = document.querySelector("[data-list_producto]");


document.addEventListener("DOMContentLoaded", function () {
    var id = localStorage.getItem("ID");
    
    producto_service.lista_productos_mi_carrito(id).then((data) => {

        data.forEach(({ id_producto, nombre_producto, url_producto, precio_producto, categoria, telefono_persona, ven_telefono, cantidad }) => {
            const nuevalinea = Read_producto(id_producto, nombre_producto, url_producto, precio_producto, categoria, telefono_persona, ven_telefono, cantidad);//puedo hacer in if donde verifique el ID solo de cierto id_ven

            table.appendChild(nuevalinea);

        });

    }).catch((error) => alert('alerta' + error));

});


const eliminar = document.querySelector("[data-btn_vaciar_carrito]");

eliminar.addEventListener('click', () => {
    var id = localStorage.getItem("ID");
    producto_service.delete_vaciar_carrito(id).then(() => {
        new PNotify({
            title: 'Listo',
            text: 'Se vacio el carrito',
            type: 'succ',
            styling: 'bootstrap3'
        });
    }).catch(error => alert('error'))

    console.log('eliminar');
})

function correo  (Email, Nombre_pro, precio_pro, cantidad_pro) {


    var url = "https://localhost:7262/Usuarios/envio_compra_correo";//
    var datos = {
        email: Email,
        nombre_pro: Nombre_pro,
        precio: precio_pro,
        cantidad: cantidad_pro
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
                    text: 'Se envio un correo para procesar tu compra',
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