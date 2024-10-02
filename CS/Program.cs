using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(); // For API routes if any
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); // Optional if you are using Swagger

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Enable default files and static files
app.UseDefaultFiles(); 
app.UseStaticFiles(); 

app.UseRouting();
app.UseAuthorization();

app.MapControllers(); // Maps API routes if any

app.Run();