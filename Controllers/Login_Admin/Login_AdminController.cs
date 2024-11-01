using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Proyecto_page.Models;
using System.Net;
using System.Text;

namespace Proyecto_page.Controllers.Login_Admin
{
    public class Login_AdminController : Controller
    {   

        public IActionResult Login_Admin()
        {
            return View();
        }

        [HttpPost]
        public Mensaje validarVendedor(string vendedor, string password)//usuario y password tiene que llamarse igual en el .js
        {
            string url = "https://localhost:7262/Ven/validar_vendedor";

            try
            {
                using (WebClient client = new WebClient())
                {
                    client.QueryString.Add("idVendedor", vendedor);//idUsuario tiene que se el mismo nombre que esta en el metodo de httpPost de la API
                    client.QueryString.Add("contrasena", password);
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

        [HttpPost]

        public Mensaje cerrarSecion()
        {
            try
            {
                HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                Mensaje msj = new Mensaje();
                msj.msjCod = "1";
                msj.msj = "Sesicion cerrada de forma correcta";
                msj.tipo = "succ";
                return msj;
            }
            catch (Exception ex)
            {
                Mensaje msj = new Mensaje();
                msj.msjCod = "-1";
                msj.msj = ex.Message;
                msj.tipo = "error";
                return msj;
            }
        }

        

    }
}
