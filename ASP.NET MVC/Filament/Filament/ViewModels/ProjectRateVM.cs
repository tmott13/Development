using Filament.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Filament.ViewModels
{
    public class ProjectRateVM
    {
        public int ProjectRateId { get; set; }
        public string Project_Title { get; set; }
        public decimal Hourly_Rate { get; set; }
        public int ProjectId { get; set; }
        public int RateId { get; set; }

        public virtual Project Project { get; set; }
     
    }
}