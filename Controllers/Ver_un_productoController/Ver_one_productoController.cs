using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto_page.Controllers.Ver_un_productoController
{
    public class Ver_one_productoController : Controller
    {
        
        public IActionResult ver_one_producto()
        {
            return View();
        }
        
        public IActionResult ver_one_producto_sin_agregarCarrito()
        {
            return View();
        }
    }
}
