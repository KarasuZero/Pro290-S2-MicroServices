using Microsoft.Extensions.Options;
using Steeltoe.Discovery.Client;
using Steeltoe.Common.Discovery;
using Steeltoe.Discovery.Eureka;
using Steeltoe.Discovery;
using CartAPI.Models;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

builder.Services.Configure<CartDBSettings>(builder.Configuration.GetSection(nameof(CartDBSettings)));
builder.Services.AddSingleton<ICartDBSettings>(sp =>sp.GetRequiredService<IOptions<CartDBSettings>>().Value);
builder.Services.AddSingleton<IMongoClient>(s =>new MongoClient(builder.Configuration.GetValue<string>("CartDBSettings:ConnectionString")));
builder.Services.AddScoped<ICartDBSettings, CartDBSettings>();

//builder.Services.AddDbContext<QuestDB>(opt => opt.UseInMemoryDatabase("QuestBoard"));
//docker run --name eureka -d --net netSEN300 -p 8761:8761 steeltoeoss/eureka-server eureka registry run command
builder.Services.AddDiscoveryClient(builder.Configuration);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>

        {
            policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
            policy.WithHeaders("Access-Control-Allow-Origin","origin-list");
        });
});

var app = builder.Build();
app.MapControllers();
app.UseCors();

app.MapGet("/", () => "Hello World!");

app.Run();
