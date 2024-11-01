
const lista_clients = () => {
    return fetch("https://localhost:7262/controller/get_clients").then((respuesta => {
        return respuesta.json();
    }));
}



export const clientservices = {
    lista_clients
};