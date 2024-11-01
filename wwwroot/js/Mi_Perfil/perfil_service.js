
const lista_mi_perfil = (id_persona) => {
    return fetch(`https://localhost:7262/controller/get_clients_one?id_persona=${id_persona}`).then((respuesta => {
        return respuesta.json();
    }));
}

const lista_mi_nombre_perfil = (id_persona) => {
    return fetch(`https://localhost:7262/controller/get_mi_nombre?id_persona=${id_persona}`).then((respuesta => {
        return respuesta.json();
    }));
}


const lista_mis_usuarios = (texto) => {
    return fetch(`https://localhost:7262/controller/get_usuarios_persona?id_persona=${texto}`).then((respuesta => {
        return respuesta.json();
    }));
}

const lista_MiPerfil_vendedores = (texto) => {
    return fetch(`https://localhost:7262/controller/get_vendedores_de_persona?id_persona=${texto}`).then((respuesta => {
        return respuesta.json();
    }));
}

const update_mi_persona = (per_id, per_nombre, per_apellidos, per_correo, per_direccion, per_telefono, per_sexo) => {
    return fetch("https://localhost:7262/Persona/modificar_persona", {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ per_id, per_nombre, per_apellidos, per_correo, per_direccion, per_telefono, per_sexo })
    }).then(respuesta => respuesta)
        .catch(err => console.log('error'));
}

const update_mi_vendedor = (id_ven, ven_nombre, telefono ) => {
    return fetch("https://localhost:7262/Vendedor/modificar_vendor", {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ id_ven, ven_nombre, telefono })
    }).then(respuesta => respuesta)
        .catch(err => console.log('error'));
}


const delete_vendedor = (id) => {
    
    return fetch(`https://localhost:7262/Ven/eliminar_Vendedor_productos?id=${id}`, {
        method: "DELETE"
    })
}

const delete_usuario = (correo) => {
    
    return fetch(`https://localhost:7262/Usuarios/eliminar_Usuarios?correo=${correo}`, {
        method: "DELETE"
    })
}


const lista_count_usuarios = (id_persona) => {
    return fetch(`https://localhost:7262/controller/get_users_count?id_persona=${id_persona}`).then((respuesta => {
        return respuesta.json();
    }));
}

const lista_count_vendedores = (id_persona) => {
    return fetch(`https://localhost:7262/controller/get_vendedores_count?id_persona=${id_persona}`).then((respuesta => {
        return respuesta.json();
    }));
}






export const usuariosPerfil_service = {
        lista_mi_perfil,
        lista_mis_usuarios,
        lista_MiPerfil_vendedores,
        update_mi_persona,
        update_mi_vendedor,
        delete_vendedor,
        delete_usuario,
        lista_mi_nombre_perfil,
        lista_count_usuarios,
        lista_count_vendedores
};