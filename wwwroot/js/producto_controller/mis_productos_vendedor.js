import { producto_service } from "./producto_service.js";


const Read_producto = (id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor, categoria, stock) => {//luego se agrega el div de section_princiopal_titulo
    const linea = document.createElement('li');

    const articulo = `  
      <h1 class="titulo_li_articulo">Nombre</h1>
      <h2>${nombre_producto}</h2>
      <img src="/imagenes/${url_producto}" alt="" data-img_articulo>
      <h1 class="titulo_li_articulo">Precio</h1>
      <h2>$ ${precio_producto}  En Stock: ${stock}</h2>
      <a href="#" data-a id="${id_producto}" >Ver producto</a>
      <div id="div_eliminar">
       <i id="${id_producto}" data-eliminar class="fa-solid fa-trash" style="color: #ff0000;"></i>
      </div> `;

    linea.innerHTML = articulo;
    linea.classList.add("articulo");

    const ver_one = linea.querySelector("[data-a]");

    ver_one.addEventListener('click', (evento) => {
        const id = ver_one.id;

        window.location.href = `/Ver_one_producto/Ver_one_producto_sin_agregarCarrito?valor=${encodeURIComponent(id)}`;

    })

    const eliminar_producto = linea.querySelector("[data-eliminar]");

    eliminar_producto.addEventListener('click', (evento) => {
        const id_producto = eliminar_producto.id;
        console.log(id_producto);
        producto_service.delete_mi_producto_vendedor(id_producto).then(() => {
            new PNotify({
                title: 'Listo',
                text: 'Se elimino de forma correcta',
                type: 'succ',
                styling: 'bootstrap3'
            });
        }).catch(err => alert('alerta en delete'))

    })


    return linea;
}

var id_ven = localStorage.getItem("ID_Ven");
console.log('id_ven ',id_ven);
const table = document.querySelector("[data-list_producto]");
const table2 = document.querySelector("[data-list_producto_ropa]");
const table3 = document.querySelector("[data-list_producto_otros]");

producto_service.lista_productos_vendedor(id_ven).then((data) => {

    data.forEach(({ id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor, categoria, stock }) => {
        const nuevalinea = Read_producto(id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor, categoria, stock);//puedo hacer in if donde verifique el ID solo de cierto id_ven 

        if (categoria == "Tecnologia") {
            table.appendChild(nuevalinea);
        } if (categoria == "Ropa") {
            table2.appendChild(nuevalinea);
        } if (categoria == "Otra Categoria") {
            table3.appendChild(nuevalinea);
        }
    });

}).catch((error) => alert('alerta1 ' + error));



