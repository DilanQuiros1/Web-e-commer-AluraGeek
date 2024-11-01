import { usuariosPerfil_service } from "./perfil_service.js";

const MiPerfil = (count, idPersona_foranea, idUsuario, password, sal) => {//luego se agrega el div de section_princiopal_titulo
    const linea = document.createElement('tr');

    const perfil = ` 
                  
            <td>${count}</td>
            <td>${idUsuario}</td>
            <td> <button class="btn_style eliminar" id="${idUsuario}" type="button" data-delete >Eliminar</button></td>
        
    `;


    linea.innerHTML = perfil;


    const btn_delete = linea.querySelector("[data-delete]");

    btn_delete.addEventListener('click', () => {
        const correo = btn_delete.id;
        usuariosPerfil_service.delete_usuario(correo).then(() => {
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

const table = document.querySelector("[data-table_misUsuarios]");


document.addEventListener("DOMContentLoaded", function () {
    var id = localStorage.getItem("ID");
    //alert("ID recuperado: " + id);
    usuariosPerfil_service.lista_mis_usuarios(id).then((data) => {

        data.forEach(({ idPersona_foranea, idUsuario, password, sal }) => {
            count++;
            const nuevalinea = MiPerfil(count, idPersona_foranea, idUsuario, password, sal);//puedo hacer in if donde verifique el ID solo de cierto id_ven

            table.appendChild(nuevalinea);
            
        });
        console.log(count);
        localStorage.setItem("cantidad_usu", count);
    }).catch((error) => alert('alerta' + error));//https://localhost:7262/Persona/modificar_persona
   
});