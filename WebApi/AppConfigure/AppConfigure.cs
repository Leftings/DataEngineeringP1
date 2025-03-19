namespace WebApi;

using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

public class AppConfigure
{
    public static WebApplication ConfigureApplication(string[] args)
    {
        WebApplicationBuilder builder = WebApplication.CreateBuilder();

        AddServices(builder);

        var cookiePolicyOptions = new CookiePolicyOptions
        {
            MinimumSameSitePolicy = SameSiteMode.Strict
        };
        
        var app = builder.Build();

        app.UseSwagger();
        app.UseSwaggerUI(c => {
            c.SwaggerEndpoint("swagger/v1/swagger.json", "Data Engineering P1");
            c.RoutePrefix = string.Empty;
        });

        app.UseCors("AllowSpecificOrigins");
        app.UseHttpsRedirection();
        app.MapControllers();
        app.UseAuthorization();
        app.UseAuthentication();
        app.UseCookiePolicy(cookiePolicyOptions);
        
        app.MapDefaultControllerRoute();

        return app;
    }

    private static void AddServices(WebApplicationBuilder builder)
    {
        builder.Services.AddCors(options => {
            options.AddPolicy("AllowSepcificOrigins", policy => 
            policy.WithOrigins("http://localhost:5173")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials()
            );
        });

        builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
            .AddCookie(options => {
                options.ExpireTimeSpan = TimeSpan.FromMinutes(30);
                options.SlidingExpiration = true;
                options.AccessDeniedPath ="/Forbidden/";
            });
        
        builder.Services.AddControllers()
            .AddJsonOptions(options => {
                options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
            });

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
    }
}