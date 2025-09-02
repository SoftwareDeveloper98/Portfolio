using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Data;
using PortfolioAPI.Models;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly PortfolioDbContext _context;
        private readonly ILogger<ProjectsController> _logger;

        public ProjectsController(PortfolioDbContext context, ILogger<ProjectsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            try
            {
                var projects = await _context.Projects
                    .Where(p => p.IsActive)
                    .OrderByDescending(p => p.CreatedAt)
                    .ToListAsync();

                return Ok(projects);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving projects");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/Projects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
            try
            {
                var project = await _context.Projects
                    .FirstOrDefaultAsync(p => p.Id == id && p.IsActive);

                if (project == null)
                {
                    return NotFound($"Project with ID {id} not found");
                }

                return Ok(project);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving project with ID {ProjectId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/Projects/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProject(int id, Project project)
        {
            if (id != project.Id)
            {
                return BadRequest("Project ID mismatch");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var existingProject = await _context.Projects.FindAsync(id);
                if (existingProject == null)
                {
                    return NotFound($"Project with ID {id} not found");
                }

                // Update properties
                existingProject.Title = project.Title;
                existingProject.Description = project.Description;
                existingProject.ImageUrl = project.ImageUrl;
                existingProject.DemoUrl = project.DemoUrl;
                existingProject.SourceUrl = project.SourceUrl;
                existingProject.Technologies = project.Technologies;
                existingProject.IsActive = project.IsActive;
                existingProject.UpdatedAt = DateTime.UtcNow;

                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(id))
                {
                    return NotFound();
                }
                throw;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating project with ID {ProjectId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/Projects
        [HttpPost]
        public async Task<ActionResult<Project>> PostProject(Project project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                project.CreatedAt = DateTime.UtcNow;
                project.UpdatedAt = DateTime.UtcNow;

                _context.Projects.Add(project);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetProject), new { id = project.Id }, project);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating new project");
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/Projects/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(int id)
        {
            try
            {
                var project = await _context.Projects.FindAsync(id);
                if (project == null)
                {
                    return NotFound($"Project with ID {id} not found");
                }

                // Soft delete - set IsActive to false
                project.IsActive = false;
                project.UpdatedAt = DateTime.UtcNow;

                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting project with ID {ProjectId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private bool ProjectExists(int id)
        {
            return _context.Projects.Any(e => e.Id == id);
        }
    }
}

