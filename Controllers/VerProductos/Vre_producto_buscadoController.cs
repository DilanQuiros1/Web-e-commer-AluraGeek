using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto_page.Controllers.VerProductos
{
    public class Vre_producto_buscadoController : Controller
    {
        //[Authorize]
        public IActionResult ver_producto_busqueda()
        {
            return View();
        }


    }
}
