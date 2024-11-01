import { producto_service } from "./producto_service.js";
import { insert_producto_carrito } from "../carrito/insertar_producto.js";

const Read_producto = (id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor,categoria) => {//luego se agrega el div de section_princiopal_titulo
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

           <ul class="agregar_carrito">
                <li>
                    <h1 class="titulo_li_articulo" id="${id_producto}" data-id_pro >ID Producto: <h2>${id_producto}</h2></h1>
                    <h1 class="titulo_li_articulo" id="${id_vendedor}" data-id_ven >ID Vendedor: <h2>${id_vendedor}</h2></h1>
                    <h1 class="titulo_li_articulo" id="${categoria}" data-id_categoria >Categoria: <h2>${categoria}</h2></h1>
                </li>

                <ul class="li_agregar_carrito">
                    <li class="items_cantidad">
                               <select class="cantidad1" name="cantidad" id="cantidad">
                                                <option value="1" selected disabled >Selecciona la cantidad</option>
                                                <option value="1">1 producto</option>
                                                <option value="2">2 productos</option>
                                                <option value="3">3 productos</option>
                                                <option value="4">4 productos</option>
                                                <option value="5">5 productos</option>
                               </select>                                           
                     </li>

                     <li >
                       <form action="submit">
                          <a href="#" id="agregar_pro" data-agregar>agregar al carrito</a>
                        </form>
                                            
                      </li>

                </ul>
           </ul>

           
           </div>
      </li>
    `;

    linea.classList.add("articulo_pro");
    linea.innerHTML = articulo;

    
    const ver_one_idPro = linea.querySelector("[data-id_pro]");
    const ver_one_idVen = linea.querySelector("[data-id_ven]");
    const ver_one_agregar = linea.querySelector("[data-agregar]");
 

    ver_one_agregar.addEventListener('click', (evento) => {
        evento.preventDefault();
        var id = localStorage.getItem("ID");
        if (id == null)
        {
            window.location.href = "/Login/LoginPrincipal";
        }
        else
        {

            const id_pro = ver_one_idPro.id;
            const id_ven = ver_one_idVen.id;
            const selectElement = document.getElementById('cantidad');
            //const idpersona = linea.querySelector("[data-usu_id]").value;
            var idPersona = localStorage.getItem("ID");
            const selectedValue = selectElement.value;

           

            if (idPersona == "" || selectedValue == null) {
                alert('Revisa que selecciones bien tus datos');
            }
            else {
                var id = localStorage.getItem("ID");
                if (id == null) {
                    window.location.href = "/Login/LoginPrincipal";
                }
                else {
                    //validar_carrito(id_pro, idPersona, id_ven, selectedValue);
                    
                   insert_producto_carrito.enviarDatos_carrito(idPersona, id_ven, id_pro, selectedValue);

                }
                
            }
        }

        
       
    })

    return linea;
}


const urlParams = new URLSearchParams(window.location.search);
const valor = urlParams.get('valor');


const table = document.querySelector("[data-list_producto1]");

producto_service.lista_one_producto(valor).then((data) => {
    //console.log('valor',valor);
    data.forEach(({ id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor,categoria }) => {
        const nuevalinea = Read_producto(id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor, categoria);

        table.appendChild(nuevalinea);
        

    });

}).catch((error) => alert('alerta' + error))




