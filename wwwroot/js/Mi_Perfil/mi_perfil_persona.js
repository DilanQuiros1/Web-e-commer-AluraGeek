import { usuariosPerfil_service } from "./perfil_service.js";

const MiPerfil = (per_id, per_nombre, per_apellidos, per_correo, per_direccion, per_telefono, sexo) => {//luego se agrega el div de section_princiopal_titulo
    const linea = document.createElement('tr');
    
    
    const perfil = ` 
                  
                        
                        <td><input class="inputs_style" type="text" value="${per_id}" disabled id="${per_id}" data-id></td>
                        <td><input class="${per_id} inputs_style" type="text" value="${per_nombre}"disabled id="${per_nombre}" data-nombre></td>
                        <td><input class="${per_id} inputs_style" type="text" value="${[per_apellidos]}" disabled id="${per_apellidos}" data-apellidos></td>
                        <td><input class="${per_id} inputs_style" type="text" value="${per_correo}" disabled id="${per_correo}" data-correo></td>
                        <td><input class="${per_id} inputs_style" type="text" value="${per_direccion}" disabled id="${per_direccion}" data-direccion></td>
                        <td><input class="${per_id} inputs_style" type="text" value="${per_telefono}" disabled id="${per_telefono}" data-telefono></td>
                        <td><input class="${per_id} inputs_style" type="text" value="${sexo}" disabled id="${sexo}" data-sexo></td>

                        <td> <button class="btn_style select" id="${per_id}" data-seleccionar type="button">Seleccionar</button></td>
                        <td> <button class="btn_style editar ${per_id}" id="${per_id}" data-editar type="button" disabled>Editar</button></td>
                                    
        
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
        var id = localStorage.getItem("ID");
        //const id = linea.querySelector("[data-id]").value;
        const nombre = linea.querySelector("[data-nombre]").value;
        const apellidos = linea.querySelector("[data-apellidos]").value;
        const correo = linea.querySelector("[data-correo]").value;
        const direccion = linea.querySelector("[data-direccion]").value;
        const telefono = linea.querySelector("[data-telefono]").value;
        const per_sexo = linea.querySelector("[data-sexo]").value;
       
        usuariosPerfil_service.update_mi_persona(id, nombre, apellidos, correo, direccion, telefono, per_sexo).then(() => {
            const habilitar_con_id = btn_editar.id;
            enableInputs(habilitar_con_id);
        });

    });


    return linea;
}





const div_btn = (per_id) => {
    const linea = document.createElement('div');

    const btns = `
                <td> <button class="btn_style" id="${per_id}" data-seleccionar type="button">Seleccionar</button></td>
                <td> <button class="btn_style ${per_id}" id="${per_id}" data-editar type="button" disabled>Editar</button></td>
                <td> <button class="btn_style ${per_id}" id="inputs" type="button" data-delete disabled>Eliminar</button></td>
                
    `;

    linea.innerHTML = btns;

    const btn_disable = linea.querySelector("[data-seleccionar]");


    btn_disable.addEventListener('click', (evento) => {
        const habilitar_con_id = btn_disable.id;
        enableInputs(habilitar_con_id);
        //window.location.href = `/Ver_one_producto/Ver_one_producto?valor=${encodeURIComponent(id)}`;
        
    })


    const btn_editar = linea.querySelector("[data-editar]");

    btn_editar.addEventListener('click', () => {
        var id = localStorage.getItem("ID");
             
        
        /*usuariosPerfil_service.update_mi_persona(id, nombre, apellidos, correo, direccion, telefono, per_sexo).then(() => {
            alert('se EDITO de forma correcta');
            const habilitar_con_id = btn_editar.id;
            enableInputs(habilitar_con_id);
        });*/

    });

    return linea;
}


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

const table = document.querySelector("[data-table_persona]");
//const mi_perfil_section = document.querySelector("[data-table_mi_perfil]");


document.addEventListener("DOMContentLoaded", function () {
    var id = localStorage.getItem("ID");
    
    usuariosPerfil_service.lista_mi_perfil(id).then((data) => {
        
        data.forEach(({ per_id, per_nombre, per_apellidos, per_correo, per_direccion, per_telefono, per_sexo }) => {
            const nuevalinea = MiPerfil(per_id, per_nombre, per_apellidos, per_correo, per_direccion, per_telefono, per_sexo);//puedo hacer in if donde verifique el ID solo de cierto id_ven
            
            table.appendChild(nuevalinea);
            
        });

    }).catch((error) => alert('alerta' + error));//

    //const buttos = div_btn(id);
    //mi_perfil_section.appendChild(buttos);

});



//CONATDOR DE PERFILES


const usuarios = document.querySelector("[data-number_usuarios]");
const vendedores = document.querySelector("[data-number_vendedores]");

document.addEventListener("DOMContentLoaded", function () {
    var id = localStorage.getItem("ID");
    
    usuariosPerfil_service.lista_count_usuarios(id).then((data) => {

        data.forEach(({ cantidad }) => {
            usuarios.innerHTML = cantidad;
        });

    }).catch((error) => alert('alerta' + error))

    usuariosPerfil_service.lista_count_vendedores(id).then((data) => {

        data.forEach(({ cantidad }) => {
            vendedores.innerHTML = cantidad;
        });

    }).catch((error) => alert('alerta' + error))
});



