using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(aputravel.Startup))]
namespace aputravel
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
