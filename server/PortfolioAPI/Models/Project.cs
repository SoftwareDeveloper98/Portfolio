using System.ComponentModel.DataAnnotations;

namespace PortfolioAPI.Models
{
    public class Project
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        [StringLength(500)]
        public string Description { get; set; } = string.Empty;
        
        [StringLength(200)]
        public string? ImageUrl { get; set; }
        
        [StringLength(200)]
        public string? DemoUrl { get; set; }
        
        [StringLength(200)]
        public string? SourceUrl { get; set; }
        
        [Required]
        public string Technologies { get; set; } = string.Empty;
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        
        public bool IsActive { get; set; } = true;
    }
}

