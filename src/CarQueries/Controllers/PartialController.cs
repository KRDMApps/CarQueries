using Microsoft.AspNet.Mvc;

namespace CarQueries.Controllers
{
    public class PartialController : Controller
    {
        public IActionResult Vehicles() => PartialView();

        public IActionResult Dealers() => PartialView();

        public IActionResult Inventory() => PartialView();

        public IActionResult Editorials() => PartialView();

        public IActionResult Media() => PartialView();
    }
}