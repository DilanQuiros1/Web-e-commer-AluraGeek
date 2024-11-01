const lista_productos = () => {
    return fetch("https://localhost:7262/Producto/get_productos").then((respuesta => {
        return respuesta.json();
    }));
}

const lista_productos_mi_carrito = (idPersona) => {
    return fetch(`https://localhost:7262/controller/get_productos_carrito_idPersona?id_persona=${idPersona}`).then((respuesta => {
        return respuesta.json();
    }));
}

const lista_one_producto = (id_producto) => {
    return fetch(`https://localhost:7262/Producto/get_one_producto?id_producto=${id_producto}`).then((respuesta => {
        return respuesta.json();
    }));
}


const lista_buscador_producto = (texto) => {
    return fetch(`https://localhost:7262/Producto/buscador_productos?texto=${texto}`).then((respuesta => {
        return respuesta.json();
    }));
}

const lista_productos_vendedor = (id_ven) => {
    return fetch(`https://localhost:7262/Producto/get_productos_vendedor?id_vendedor=${id_ven}`).then((respuesta => {
        return respuesta.json();
    }));
}

const delete_mi_producto_vendedor = (id_producto) => {

    return fetch(`https://localhost:7262/Producto/eliminar_producto?id=${id_producto}`, {
        method: "DELETE"
    })
}

const delete_vaciar_carrito = (per) => {

    return fetch(`https://localhost:7262/Carrito/vaciar_carrito?per=${per}`, {
        method: "DELETE"
    })
}

const delete_eliminarProducto_carrito = (prod, per) => {

    return fetch(`https://localhost:7262/Carrito/eliminar_produto-carrito?prod=${prod}&per=${per}`, {
        method: "DELETE"
    })
}

export const producto_service = {
    lista_productos,
    lista_one_producto,
    lista_buscador_producto,
    lista_productos_mi_carrito,
    lista_productos_vendedor,
    delete_mi_producto_vendedor,
    delete_vaciar_carrito,
    delete_eliminarProducto_carrito
};