using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Proyecto_page.Models;

namespace Proyecto_page.Controllers.CrearProducto
{
    public class CraerProductoController : Controller
    {

        private readonly IWebHostEnvironment _hostingEnvironment;

        public CraerProductoController(IWebHostEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }


        [HttpPost]
        public IActionResult GuardarImagen([FromForm] ImagenModel modelo)
        {
            try
            {
                if (modelo.Archivo != null && modelo.Archivo.Length > 0)
                {
                    // Generar un nombre de archivo único para evitar conflictos
                    string nombreArchivo = $"{Guid.NewGuid().ToString()}{Path.GetExtension(modelo.Archivo.FileName)}";

                    // Obtener la ruta de la carpeta dentro de wwwroot donde se guardarán las imágenes
                    string carpetaImagenes = Path.Combine(_hostingEnvironment.WebRootPath, "imagenes");

                    // Crear la carpeta si no existe
                    if (!Directory.Exists(carpetaImagenes))
                    {
                        Directory.CreateDirectory(carpetaImagenes);
                    }

                    // Guardar la imagen en la carpeta
                    string rutaImagen = Path.Combine(carpetaImagenes, nombreArchivo);
                    using (var fileStream = new FileStream(rutaImagen, FileMode.Create))
                    {
                        modelo.Archivo.CopyTo(fileStream);
                    }

                    // Opcional: Guardar la ruta de la imagen en la base de datos u otro almacenamiento según tus necesidades
                    // ...

                    return Ok(nombreArchivo);
                }

                return BadRequest("No se proporcionó ninguna imagen.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al guardar la imagen: {ex.Message}");
            }
        }

        [Authorize]
        public IActionResult Craer_producto()
        {
            return View();
        }
    }

    
}
