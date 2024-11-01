using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Proyecto_page.Models;
using System.Net;
using System.Text;

namespace Proyecto_page.Controllers
{
    public class insertar_usuarioController : Controller
    {
        
        public IActionResult insertar_user()
        {
            return View();
        }


        [HttpPost]
        public Mensaje agregar_user(string idPersona_foranea, string idUsuario)
        {
            string url = "https://localhost:7262/Usuarios/guardar";

            try
            {
                using (WebClient client = new WebClient())
                {
                    client.QueryString.Add("idPersona_foranea", idPersona_foranea);//idUsuario tiene que se el mismo nombre que esta en el metodo de httpPost de la API
                    client.QueryString.Add("idUsuario", idUsuario);
                    var data = client.UploadValues(url, "POST", client.QueryString);


                    Mensaje msj = new Mensaje();

                    string respuesta = UnicodeEncoding.UTF8.GetString(data);//revisar aqui 
                    JObject objeto = JObject.Parse(respuesta);

                    msj.msjCod = objeto.SelectToken("msj.id").ToString();
                    msj.msj = objeto.SelectToken("msj.mensaje").ToString();
                    msj.tipo = objeto.SelectToken("msj.tipo").ToString();

                    return msj;
                }
            }
            catch (Exception ex)
            {
                Mensaje msj = new Mensaje();
                msj.msjCod = "1";
                msj.msj = ex.Message;
                msj.tipo = "error";
                return msj;
            }
        }
    }
}
