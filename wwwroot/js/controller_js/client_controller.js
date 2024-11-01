import { clientservices } from "./client_service.js";

const crear_usu_linea = (per_id,per_nombre,per_apellidos,per_correo,per_direccion,per_telefono) => {

    const linea = document.createElement('tr');

    const content = `     
                <td>${per_id}</td>
                <td>${per_nombre}</td>
                <td>${per_apellidos}</td>
                <td>${per_correo}</td>
                <td>${per_direccion}</td>
                <td>${per_telefono}</td>  `

    linea.innerHTML = content;
    return linea;
}

const table = document.querySelector('[data-table]');

clientservices.lista_clients().then((data) => {

    data.forEach(({ per_id, per_nombre, per_apellidos,per_correo,per_direccion,per_telefono}) => {
        const nuevalinea = crear_usu_linea(per_id, per_nombre, per_apellidos, per_correo, per_direccion,per_telefono);
        table.appendChild(nuevalinea);
    });

}).catch((error) => alert('alerta'))

