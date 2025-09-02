using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Models;

namespace PortfolioAPI.Data
{
    public class PortfolioDbContext : DbContext
    {
        public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options) : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Project entity
            modelBuilder.Entity<Project>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Title).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Description).IsRequired().HasMaxLength(500);
                entity.Property(e => e.ImageUrl).HasMaxLength(200);
                entity.Property(e => e.DemoUrl).HasMaxLength(200);
                entity.Property(e => e.SourceUrl).HasMaxLength(200);
                entity.Property(e => e.Technologies).IsRequired();
                entity.Property(e => e.CreatedAt).HasDefaultValueSql("GETUTCDATE()");
                entity.Property(e => e.UpdatedAt).HasDefaultValueSql("GETUTCDATE()");
                entity.Property(e => e.IsActive).HasDefaultValue(true);
            });

            // Seed data
            modelBuilder.Entity<Project>().HasData(
                new Project
                {
                    Id = 1,
                    Title = "E-Commerce Platform",
                    Description = "Full-stack e-commerce solution with Angular frontend and .NET backend",
                    ImageUrl = "https://via.placeholder.com/300x200",
                    DemoUrl = "https://demo.example.com",
                    SourceUrl = "https://github.com/example/ecommerce",
                    Technologies = "Angular,ASP.NET Core,Entity Framework,SQL Server",
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow,
                    IsActive = true
                },
                new Project
                {
                    Id = 2,
                    Title = "Task Management App",
                    Description = "Collaborative task management application with real-time updates",
                    ImageUrl = "https://via.placeholder.com/300x200",
                    DemoUrl = "https://tasks.example.com",
                    SourceUrl = "https://github.com/example/taskmanager",
                    Technologies = "Angular,SignalR,ASP.NET Core,MongoDB",
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow,
                    IsActive = true
                },
                new Project
                {
                    Id = 3,
                    Title = "Weather Dashboard",
                    Description = "Real-time weather monitoring dashboard with interactive charts",
                    ImageUrl = "https://via.placeholder.com/300x200",
                    DemoUrl = "https://weather.example.com",
                    SourceUrl = "https://github.com/example/weather",
                    Technologies = "Angular,Chart.js,Weather API,Tailwind CSS",
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow,
                    IsActive = true
                }
            );
        }
    }
}

