using SendGrid.Helpers.Mail;
using SendGrid;
using System.Net.Mail;

namespace Proyecto_page.Models
{
    public class Mailer
    {

        public async System.Threading.Tasks.Task enviarEmailNuevoPasswd(string email, string nombre)
        {
            string plantillaPath = "../Modelos/Correo/plantilla.cshtml";
            string plantillaHtml = System.IO.File.ReadAllText(plantillaPath);

            nombre = "usuario de alura Store";
            plantillaHtml = plantillaHtml.Replace("#nombre#", nombre);
            plantillaHtml = plantillaHtml.Replace("#correo#", email);
            //plantillaHtml = plantillaHtml.Replace("#token#", tok_token);

            var apiKey = "your_apikey";
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("your_email", "Reset Password");
            var subject = "Solicitud de nueva clave";
            var to = new EmailAddress(email, nombre);
            var plainTextContent = "";
            var htmlContent = plantillaHtml;
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, "Correo de prueba");//htmlContent
            var response = await client.SendEmailAsync(msg);

        }

    }
}
