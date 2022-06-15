using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;
using DivPay.Services;


namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class NotificationController : ControllerBase
{
    private readonly INotificationService _notificationService;
    public NotificationController(INotificationService notificationService)
    {
        _notificationService = notificationService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Notification>>> Get()
    {
        return await _notificationService.GetNotifications();

    }

    [HttpGet("{id:int}", Name = "GetNotification")]
    public async Task<ActionResult<Notification>> Get(int id)
    {
        var notification = await _notificationService.GetNotification(id);

        if (notification == null)
        {
            return NotFound();
        }
        return Ok(notification);
    }

    [HttpGet("NotificationsFromUser/{id:int}")]
    public async Task<ActionResult<IEnumerable<Notification>>> GetNotificationsFromUser(int id)
    {
        return await _notificationService.GetNotificationsFromUser(id);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoNotification request)
    {
        await _notificationService.CreateNotification(request);
        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult<Notification>> Delete(int id)
    {
        var notification = await _notificationService.GetNotification(id);
        if (notification == null)
        {
            return NotFound();
        }
        await _notificationService.DeleteNotification(notification);
        return NoContent();
    }
}
