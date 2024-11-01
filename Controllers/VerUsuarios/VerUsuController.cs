using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto_page.Controllers.VerUsuarios
{
    public class VerUsuController : Controller
    {
        [Authorize]
        public IActionResult VerUsuarios()
        {
            return View();
        }
    }
}
