using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Filament.Models;
using Filament.ViewModels;

namespace Filament.Controllers
{
    public class ProjectsController : Controller
    {
        private FilamentEntities1 db = new FilamentEntities1();

        // GET: Projects
        public ViewResult Index(string searchString)
        {
            var projects = from p in db.Projects
                           select p;
            if (!String.IsNullOrEmpty(searchString))
            {
                projects = projects.Where(p => p.Project_Title.Contains(searchString));
            }
            return View(projects);
        }

        // GET: Projects/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Project project = db.Projects.Find(id);
      
            if (project == null)
            {
                return HttpNotFound();
            }
            var model = new ProjectVM();
            model.ProjectId = project.ProjectId;
            model.Project_Title = project.Project_Title;
            model.Project_Manager = project.Project_Manager;
            model.Project_Type = project.Project_Type;
            model.Billing_Type = project.Billing_Type;
            model.Start_Date = project.Start_Date;
            model.Active = project.Active;

            model.Project_Rate = project.Project_Rate.Where(p => p.ProjectId == id.Value);
            return View(model);
        }

        // GET: Projects/Create
        public ActionResult Create()
        {
            var model = new ProjectVM();
            return View(model);
        }

        // POST: Projects/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ProjectId,Project_Title,Project_Manager,Project_Type,Billing_Type,Start_Date,Active")] Project project)
        {
            if (ModelState.IsValid)
            {
                db.Projects.Add(project);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(project);
        }

        // GET: Projects/Edit/5
         
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Project project = db.Projects.Find(id);
            if (project == null)
            {
                return HttpNotFound();
            }
            return View(project);
        }

        // POST: Projects/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ProjectId,Project_Title,Project_Manager,Project_Type,Billing_Type,Start_Date,Active")] Project project)
        {
            if (ModelState.IsValid)
            {
                db.Entry(project).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(project);
        }

        // GET: Projects/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Project project = db.Projects.Find(id);
            if (project == null)
            {
                return HttpNotFound();
            }
            return View(project);
        }

        // POST: Projects/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Project project = db.Projects.Find(id);
            db.Projects.Remove(project);
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
