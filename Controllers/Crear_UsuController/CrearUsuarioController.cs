using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto_page.Controllers.Crear_UsuController
{
    public class CrearUsuarioController : Controller
    {
        // GET: CrearUsuarioController
        
        public ActionResult AgregarUsuario()
        {
            return View();
        }

        // GET: CrearUsuarioController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: CrearUsuarioController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: CrearUsuarioController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: CrearUsuarioController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: CrearUsuarioController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: CrearUsuarioController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: CrearUsuarioController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
