using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto_page.Controllers.Vendedor
{
    public class VendedorController : Controller
    {
        [Authorize]
        public IActionResult vendedor_prodctos()
        {
            return View();
        }
    }
}
