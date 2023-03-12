using contents_limit_insurance.Repositories;
using contents_limit_insurance.Services;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.OpenApi.Models;
using Redis;

namespace InsuranceManager
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}
		public IConfiguration Configuration
		{
			get;
		}
		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddControllers();
			services.AddSingleton<ICacheService, CacheService>();
			services.AddScoped<IContentsLimitInsuranceService, ContentsLimitInsuranceService>();
			services.AddScoped<IContentsLimitInsuranceRepo, ContentsLimitInsuranceRepo>();
			services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", new OpenApiInfo
				{
					Title = "ContentsLimitInsurance",
					Version = "v1"
				});
  				c.CustomOperationIds(api => ((ControllerActionDescriptor)api.ActionDescriptor).MethodInfo.Name);
			});
			services.AddCors(options =>
			{
				options.AddPolicy("DevCorsPolicy", builder =>
				{
					builder.WithOrigins("https://localhost:44451")
						.AllowAnyHeader()
						.AllowAnyMethod();
				});
			});
		}
		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseSwagger();
				app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ContentsLimitInsurance v1"));
				app.UseCors("DevCorsPolicy");
			}
			app.UseHttpsRedirection();
			app.UseRouting();
			app.UseAuthorization();
			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}