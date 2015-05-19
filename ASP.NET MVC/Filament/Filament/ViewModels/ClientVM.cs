using Filament.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Filament.ViewModels
{
    public class ClientVM
    {
        [Required]
        [DisplayName("Client ID")]
        public int ClientId { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [Display(Name = "Client Name")]
        public string Client_Name { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [Display(Name = "Client Description")]
        public string Client_Description { get; set; }
        [Required]
        public string Status { get; set; }
    
        public virtual ICollection<Project> Projects { get; set; }
    
    }
}