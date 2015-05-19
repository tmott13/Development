using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SimpleSite.Filters;
using SimpleSite.Models;
using System.Data.Entity.SqlServer;

namespace SimpleSite.Controllers
{
    
    public class HomeController : Controller
    {
        //[NotificationFilter]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}