import { producto_service } from "./producto_service.js";

const Read_producto = (id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor) => {//luego se agrega el div de section_princiopal_titulo
    const linea = document.createElement('div');

    const articulo = ` 
                  
                <div class="card-header">${nombre_producto}</div>
                <div class="card">
                    <img src="/imagenes/${url_producto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Precio: ${precio_producto}</h5>
                        <a class="ver_producto_busqueda" href="#" data-a id="${id_producto}">Ver producto</a>
                    </div>
                    
                </div>                    
        
    `;

   
    linea.innerHTML = articulo;
    linea.classList.add("col");

    const ver_one = linea.querySelector("[data-a]");

    ver_one.addEventListener('click', (evento) => {
        const id = ver_one.id;

        window.location.href = `/Ver_one_producto/Ver_one_producto?valor=${encodeURIComponent(id)}`;

    }) 

    return linea;
}


//Hola

const urlParams = new URLSearchParams(window.location.search);
const valor = urlParams.get('texto');

const table = document.querySelector("[data-list_producto]");

producto_service.lista_buscador_producto(valor).then((data) => {

    data.forEach(({ id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor }) => {
        const nuevalinea = Read_producto(id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor);//puedo hacer in if donde verifique el ID solo de cierto id_ven

        table.appendChild(nuevalinea);

    });

}).catch((error) => alert('alerta' + error));