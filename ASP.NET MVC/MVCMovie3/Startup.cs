﻿using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCMovie3.Startup))]
namespace MVCMovie3
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
