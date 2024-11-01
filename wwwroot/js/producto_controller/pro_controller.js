import { producto_service } from "./producto_service.js";

let inicio = true;

const Read_producto = (id_producto, nombre_producto, url_producto, precio_producto, descri_producto, id_vendedor, categoria, stock) => {//luego se agrega el div de section_princiopal_titulo
    const linea = document.createElement('li');

    const articulo = `  
      <h1 class="titulo_li_articulo">Nombre</h1>
      <h2>${nombre_producto}</h2>
      <img src="/imagenes/${url_producto}" alt="" data-img_articulo>
      <h1 class="titulo_li_articulo">Precio</h1>
      <h2>$ ${precio_producto}</h2>
       <h1 class="titulo_li_articulo">En stock: ${stock}</h1>
      <a href="#" data-a id="${id_producto}" >Ver producto</a> `;///controlerJS.js/ver_articulo.html?id=${id}

    linea.innerHTML = articulo;
    linea.classList.add("articulo");

    const ver_one = linea.querySelector("[data-a]");

    ver_one.addEventListener('click', (evento) => {
        const id = ver_one.id;

        window.location.href = `/Ver_one_producto/Ver_one_producto?valor=${encodeURIComponent(id)}`;

    })

    return linea;
}

const table = document.querySelector("[data-list_producto]");
const table2 = document.querySelector("[data-list_producto_ropa]");
const table3 = document.querySelector("[data-list_producto_otros]");

producto_service.lista_productos().then((data) => {

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




const btn = document.getElementById("btn_busqueda");

btn.addEventListener("click", () => {
    const valor = document.getElementById("nombre_busqueda").value;
    window.location.href = `/Vre_producto_buscado/ver_producto_busqueda?texto=${encodeURIComponent(valor)}`;

});


const btn_secion = document.querySelector("[data-validar_inicioSecion]");

btn_secion.addEventListener("click", () => {
    var id = localStorage.getItem("ID");
    if (id == null) {
        window.location.href = "/Login/LoginPrincipal";
    }
    else {
        window.location.href = "/Login_Admin/Login_Admin";
    }
});


