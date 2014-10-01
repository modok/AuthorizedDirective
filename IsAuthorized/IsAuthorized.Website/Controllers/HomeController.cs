using System.Web.Mvc;

namespace IsAuthorized.Website.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}
	}
}