import { producto_service } from "./producto_service.js";
import { insert_producto_carrito } from "../carrito/insertar_producto.js";

const Read_producto = (id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor, categoria) => {//luego se agrega el div de section_princiopal_titulo
    const linea = document.createElement('li');

    const articulo = ` 
      <li class="style_img">
          <h1 class="titulo_li_articulo">Nombre</h1>
           <h2>${nombre_producto}</h2>
           <img id="img_producto" src="/imagenes/${url_producto}" alt="" data-img_articulo>
           <h1 class="titulo_li_articulo">Precio</h1>
          <h2>$ ${precio_producto}</h2>
         
      </li>

      <li class="Descripcion">
          <h1 class="titulo_li_articulo">Descripcion:</h1>
            <h2>${descri_producto}</h2>
           <div class="ids">

                      
           
           </div>
      </li>
    `;

    linea.classList.add("articulo_pro");
    linea.innerHTML = articulo;


    return linea;
}


const urlParams = new URLSearchParams(window.location.search);
const valor = urlParams.get('valor');


const table = document.querySelector("[data-list_producto1]");

producto_service.lista_one_producto(valor).then((data) => {
   
    data.forEach(({ id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor, categoria }) => {
        const nuevalinea = Read_producto(id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor, categoria);

        table.appendChild(nuevalinea);


    });

}).catch((error) => alert('alerta' + error))







