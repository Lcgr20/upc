using DivPay.DataAccess;
using DivPay.DTO.Request;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;

namespace DivPay.Services;

public class NotificationService:INotificationService
{
    private readonly DivPayDBContext _context;

    public NotificationService(DivPayDBContext context)
    {
        _context = context;
    }

    public async Task<Notification> CreateNotification(DtoNotification request)
    {
        var notification = new Notification()
        {
           Title = request.Title,
           Description = request.Description,
           NotificationStatus = request.NotificationStatus,
           Date = request.Date,
           NotificationType = request.NotificationType,
           UserId = request.UserId,
            Status = true
        };
        await _context.Notifications.AddAsync(notification);
        await _context.SaveChangesAsync();

        return notification;
    }

    public async Task DeleteNotification(Notification notification)
    {
        _context.Notifications.Remove(notification);
        await _context.SaveChangesAsync();
    }

    public async Task<Notification> GetNotification(int id)
    {
        return await _context.Notifications.Where(n => n.Id == id).FirstOrDefaultAsync();
    }

    public async Task<List<Notification>> GetNotifications()
    {
        return await _context.Notifications.ToListAsync();
    }
}
