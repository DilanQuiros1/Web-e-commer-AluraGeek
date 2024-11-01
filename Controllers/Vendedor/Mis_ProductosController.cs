using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto_page.Controllers.Vendedor
{
    public class Mis_ProductosController : Controller
    {
        [Authorize]
        public IActionResult mis_productos()
        {
            return View();
        }
    }
}
