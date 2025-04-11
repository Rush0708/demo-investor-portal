using Carling_ClaimYourShirt.Repository.Interface;
using Carling_ClaimYourShirt.Repository.Repository;
using Carling_ClaimYourShirt.Services;
using Carling_ClaimYourShirt.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Repository;
using Repository.Interface;
using Repository.Repository;
using Services;
using Services.Interfaces;

namespace Carling_ClaimYourShirt
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
            services.AddDbContext<CompetitionDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("molsoncoorsDB"));
            });
            services.AddTransient<ICompetitionService, CompetitionService>();
            services.AddTransient<ICompetitionRepository, CompetitionRepository>();
            services.AddTransient<IShirtSizeService, ShirtSizeService>();
            services.AddTransient<IShirtSizeRepository, ShirtSizeRepository>();
            services.AddTransient<ICountryService, CountryService>();
            services.AddTransient<ICountryRepository, CountryRepository>();
            services.AddTransient<IRetailerService, RetailerService>();
            services.AddTransient<IRetailerRepository, RetailerRepository>();
            services.AddTransient<ICustomerRepository, CustomerRepository>();
            services.AddTransient<ICustomerService, CustomerService>();
            services.AddTransient<IQuestionAnswerService, QuestionAnswerService>();
            services.AddTransient<IQuestionAnswerRepository, QuestionAnswerRepository>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    //spa.UseAngularCliServer(npmScript: "start");
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                }
            });
        }
    }
}
