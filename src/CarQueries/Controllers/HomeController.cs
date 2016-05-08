using Microsoft.AspNet.Mvc;

namespace CarQueries.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();

        public IActionResult Error() => View();
    }
}
