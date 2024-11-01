using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto_page.Controllers.VerProductos
{
    public class VerProductoController : Controller
    {
        
        public IActionResult VerProductos()
        {
            return View();
        }
    }
}
