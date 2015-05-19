using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimpleSite.Helpers
{
    public class Bootstrap
    {
        public const string BundleBase = "~/Content/css/";

        public class Theme
        {
            public const string Stock = "Stock";
            public const string Sandstone = "Sandstone";
            public const string Superhero = "Superhero";
        }

        public static HashSet<string> Themes = new HashSet<string>
    {
        Theme.Stock,
        Theme.Sandstone,
        Theme.Superhero
    };

        public static string Bundle(string themename)
        {
            return BundleBase + themename;
        }
    }
}