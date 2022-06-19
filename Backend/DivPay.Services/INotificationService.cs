using DivPay.DTO.Request;
using DivPay.Entities;

namespace DivPay.Services;

public interface INotificationService
{
    Task<Notification> CreateNotification(DtoNotification notification);
    Task DeleteNotification(Notification notification);
    Task<Notification> GetNotification(int id);
    Task<List<Notification>> GetNotifications();
    Task<List<Notification>> GetNotificationsFromUser(int id);
    Task UpdateStatus(int id, DtoNotification notification);
}
