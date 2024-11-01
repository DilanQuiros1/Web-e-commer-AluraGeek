import { usuariosPerfil_service } from "./perfil_service.js";

const nombre = document.querySelector("[data-mi_nombre]");
const correo = document.querySelector("[data-mi_correo]");

document.addEventListener("DOMContentLoaded", function () {
    var id = localStorage.getItem("ID");
    //alert("ID recuperado: " + id);
    console.log(id);
    usuariosPerfil_service.lista_mi_nombre_perfil(id).then((data) => {

        data.forEach(({ per_nombre, per_correo }) => {

            nombre.innerHTML = `<i class="fa-solid fa-user"></i>`+per_nombre;
            correo.innerHTML = per_correo;
        });

    }).catch((error) => alert('alerta' + error));

});