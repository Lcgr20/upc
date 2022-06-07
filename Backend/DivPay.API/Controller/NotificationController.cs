using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class NotificationController : ControllerBase
{
    private readonly DivPayDBContext _context;
    public NotificationController(DivPayDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<ICollection<Notification>>> Get()
    {
        ICollection<Notification> response;

        response = await _context.Notifications.ToListAsync();

        return Ok(response);

    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Notification>> Get(int id)
    {
        var entity = await _context.Notifications.FindAsync(id);
        if (entity == null)
        {
            return NotFound("No se encontró ningún resultado");
        }
        return Ok(entity);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoNotification request)
    {
        var entity = new Notification
        {
            Title = request.Title,
            Description = request.Description,
            NotificationStatus = request.NotificationStatus,
            Date = request.Date,
            NotificationType = request.NotificationType,
            UserId = request.UserId,
            Status = true
        };

        _context.Notifications.Add(entity);
        await _context.SaveChangesAsync();

        HttpContext.Response.Headers.Add("location", $"/api/notification/{entity.Id}");
        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult<Notification>> Delete(int id)
    {
        try
        {
            var entityToDelete = await _context.Notifications.FindAsync(id);
            if (entityToDelete == null) return NotFound();
            _context.Notifications.Remove(entityToDelete);
            await _context.SaveChangesAsync();
            return Ok();
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "Error deleting data");
        }
    }
}
