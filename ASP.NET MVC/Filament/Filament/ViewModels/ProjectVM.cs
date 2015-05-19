using Filament.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Filament.ViewModels
{
    public class ProjectVM
    {
        [Required]
        [DisplayName("Project ID")]
        public int ProjectId { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [Display(Name = "Project Title")]
        public string Project_Title { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [Display(Name = "Project Manager")]
        public string Project_Manager { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [Display(Name = "Project Type")]
        public string Project_Type { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [Display(Name = "Billing Type")]
        public string Billing_Type { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Start Date")]
        public string Start_Date { get; set; }
        public bool Active { get; set; }
        public Nullable<int> RateId { get; set; }
        public Nullable<int> ClientId { get; set; }

     
        public Client Client { get; set; }
        public IEnumerable<Project_Rate> Project_Rate { get; set; }
    }
}