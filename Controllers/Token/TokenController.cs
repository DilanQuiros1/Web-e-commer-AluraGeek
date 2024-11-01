using Microsoft.AspNetCore.Mvc;

namespace Proyecto_page.Controllers.Token
{
    public class TokenController : Controller
    {
        public IActionResult token()
        {
            return View();
        }
        
        public IActionResult correo_token()
        {
            return View();
        }
    }
}
