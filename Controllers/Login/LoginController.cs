using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Proyecto_page.Models;
using System.Net;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace Proyecto_page.Controllers.Login
{
    public class LoginController : Controller
    {

        
        public IActionResult LoginPrincipal()
        {
            return View();
        }

        [HttpPost]//este controller es como un puente al API

        public Mensaje validarUsuario(string usuario, string password)//usuario y password tiene que llamarse igual en el .js
        {
            string url = "https://localhost:7262/Usuarios/validar";// usu@admin1  6votiDUZxF

            try
            {
                using (WebClient client = new WebClient())
                {
                    client.QueryString.Add("idUsuario", usuario);//idUsuario tiene que se el mismo nombre que esta en el metodo de httpPost de la API
                    client.QueryString.Add("contrasena", password);
                    var data = client.UploadValues(url, "POST", client.QueryString);


                    Mensaje msj = new Mensaje();

                    string respuesta = UnicodeEncoding.UTF8.GetString(data);//revisar aqui 
                    JObject objeto = JObject.Parse(respuesta);

                    msj.msjCod = objeto.SelectToken("msj.id").ToString();
                    msj.msj = objeto.SelectToken("msj.mensaje").ToString();
                    msj.tipo = objeto.SelectToken("msj.tipo").ToString();

                    if (msj.msjCod == "1")
                    {
                        var claim = new List<Claim>
                        {
                            new Claim(ClaimTypes.Email, usuario)
                        };

                        var claimIdentity = new ClaimsIdentity(claim, CookieAuthenticationDefaults.AuthenticationScheme);
                        var authProperties = new AuthenticationProperties
                        {
                            AllowRefresh = true,
                            ExpiresUtc = DateTime.UtcNow.AddMinutes(10)
                        };

                        HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimIdentity), authProperties);
                    }


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
