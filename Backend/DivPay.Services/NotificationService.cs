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

    public async Task<List<Notification>> GetNotificationsFromUser(int id)
    {
        return await _context.Notifications.Where(n => n.UserId == id).ToListAsync();
    }

    public async Task UpdateStatus(int id, DtoNotification notification)
    {
        var entity = await _context.Notifications.FindAsync(id);
        entity.Title = notification.Title;
        entity.NotificationStatus = notification.NotificationStatus;
        entity.Date = notification.Date;
        entity.Description = notification.Description;
        entity.NotificationType = notification.NotificationType;

        _context.Entry(entity).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }
}
