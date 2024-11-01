import { usuariosPerfil_service } from "./perfil_service.js";

const MiPerfil_vendedor = (count, id_ven, ven_nombre, ven_password, ven_sal, persona_id, ven_telefono) => {//luego se agrega el div de section_princiopal_titulo
    const linea = document.createElement('tr');

    const perfil = ` 
                  
            <td>${count}</td>
            <td>${id_ven}</td>
            <td> <input class="${id_ven} inputs_style" type="text" value="${ven_nombre}" disabled id="${id_ven}" data-nombre_${id_ven}> </td>
            <td> <input class="${id_ven} inputs_style" type="text" value="${ven_telefono}" disabled id="${id_ven}" data-telefono_${id_ven}> </td>
            <td> <button class="btn_style select" id="${id_ven}" data-seleccionar type="button">Seleccionar</button></td>
            <td> <button class="${id_ven} btn_style editar" id="${id_ven}" type="button" data-editar disabled >Editar</button></td>
            <td> <button class="${id_ven} btn_style eliminar" id="${id_ven}" type="button" data-delete disabled>Eliminar</button></td>
    `;


    linea.innerHTML = perfil;

    const btn_disable = linea.querySelector("[data-seleccionar]");

    btn_disable.addEventListener('click', (evento) => {
        const habilitar_con_id = btn_disable.id;
        enableInputs(habilitar_con_id);
        
        //window.location.href = `/Ver_one_producto/Ver_one_producto?valor=${encodeURIComponent(id)}`;
    })

    const btn_editar = linea.querySelector("[data-editar]");

    btn_editar.addEventListener('click', () => {
        const id = btn_editar.id;
        const nombre_editado = linea.querySelector(`[data-nombre_${id}]`).value;
        const telefono_editado = linea.querySelector(`[data-telefono_${id}]`).value;
        console.log(telefono_editado);
        usuariosPerfil_service.update_mi_vendedor(id, nombre_editado, telefono_editado).then(() => {
            
            enableInputs(id);
        });
    });

    const btn_eliminar = linea.querySelector("[data-delete]");

    btn_eliminar.addEventListener('click', () => {
        const id = btn_eliminar.id;
        console.log(id);
        usuariosPerfil_service.delete_vendedor(id).then(() => {
            new PNotify({
                title: 'Listo',
                text: 'Se elimino de forma correcta',
                type: 'succ',
                styling: 'bootstrap3'
            });
        }).catch(err => alert('alerta en delete'))

    });


    return linea;
}


let count = 0;

const table = document.querySelector("[data-table_vendedores]");


document.addEventListener("DOMContentLoaded", function () {
    var id = localStorage.getItem("ID");
    //alert("ID recuperado: " + id);
    usuariosPerfil_service.lista_MiPerfil_vendedores(id).then((data) => {
        console.log('entro', data);
        data.forEach(({ id_ven, ven_nombre, ven_password, ven_sal, persona_id, ven_telefono }) => {
            count++;
            const nuevalinea = MiPerfil_vendedor(count, id_ven, ven_nombre, ven_password, ven_sal, persona_id, ven_telefono);//puedo hacer in if donde verifique el ID solo de cierto id_ven
           
            table.appendChild(nuevalinea);

        });
        console.log('cantidad ',count);
        localStorage.setItem("cantidad_ven", count);
    }).catch((error) => alert('alerta' + error));//https://localhost:7262/Persona/modificar_persona

});


function enableInputs(clase) {
    const inputs = document.getElementsByClassName(`${clase}`);//mandar esa clase por parametro, sera el ID de cada usuario
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].disabled) {
            inputs[i].removeAttribute('disabled');
        }
        else {
            inputs[i].setAttribute('disabled', true);
        }

    }

}