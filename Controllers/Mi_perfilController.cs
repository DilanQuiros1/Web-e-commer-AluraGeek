using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto_page.Controllers
{
    public class Mi_perfilController : Controller
    {
        [Authorize]
        public IActionResult mi_perfil()
        {
            return View();
        } 
        
        [Authorize]
        public IActionResult nuestra_pagina()
        {
            return View();
        }
    }
}
