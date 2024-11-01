using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto_page.Controllers.VerProductos
{
    public class Mi_Carrito_ProductosController : Controller
    {
        [Authorize]
        public IActionResult mi_carrito()
        {
            return View();
        }
    }
}
