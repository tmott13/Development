using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Filament.Models;

namespace Filament.Controllers
{
    public class Project_RateController : Controller
    {
        private FilamentEntities1 db = new FilamentEntities1();

        // GET: Project_Rate
        public ActionResult Index()
        {
            var project_Rates = db.Project_Rates.Include(p => p.Project).Include(p => p.Hourly_Rate);
           
            return View(project_Rates.ToList());
        }
        public ActionResult _ProjectRate(int ProjectId)
        {
            var project_Rates = db.Project_Rates.Include(p => p.Project).Include(p => p.Hourly_Rate);
            var filter = project_Rates.Where(p => p.ProjectId == ProjectId);
            return View("~/Views/Project_Rate/_ProjectRate.cshtml", filter.ToList());
        }
       
        // GET: Project_Rate/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Project_Rate project_Rate = db.Project_Rates.Find(id);
            if (project_Rate == null)
            {
                return HttpNotFound();
            }
            return View(project_Rate);
        }

        // GET: Project_Rate/Create
        public ActionResult Create()
        {
            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "Project_Title");
      
            return View();
        }

        // POST: Project_Rate/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ProjectRateId,Project_Title,Hourly_Rate,ProjectId")] Project_Rate project_Rate)
        {
            if (ModelState.IsValid)
            {
                db.Project_Rates.Add(project_Rate);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            
            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "Project_Title", project_Rate.ProjectId);
            return View("~/Views/Project_Rate/_ProjectRate.cshtml");
            //return View(project_Rate);
        }

        // GET: Project_Rate/Edit/5
      
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Project_Rate project_Rate = db.Project_Rates.Find(id);
            if (project_Rate == null)
            {
                return HttpNotFound();
            }
            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "Project_Title", project_Rate.ProjectId);
         
            return View(project_Rate);
        }

        // POST: Project_Rate/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ProjectRateId,Project_Title,Hourly_Rate,ProjectId,RateId")] Project_Rate project_Rate)
        {
            if (ModelState.IsValid)
            {
                db.Entry(project_Rate).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.ProjectId = new SelectList(db.Projects, "ProjectId", "Project_Title", project_Rate.ProjectId);
      
            return View(project_Rate);
        }

        // GET: Project_Rate/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Project_Rate project_Rate = db.Project_Rates.Find(id);
            if (project_Rate == null)
            {
                return HttpNotFound();
            }
            return View(project_Rate);
        }

        // POST: Project_Rate/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Project_Rate project_Rate = db.Project_Rates.Find(id);
            db.Project_Rates.Remove(project_Rate);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
