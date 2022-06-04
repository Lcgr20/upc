
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("Notificaciones")]
public class Notification : EntityBase
{
    [StringLength(40)]
    [Required]
    public string Title { get; set; }

    [StringLength(100)]
    [Required]
    public string Description { get; set; }

    [StringLength(10)]
    [Required]
    public string NotificationStatus { get; set; }

    public DateTime Date { get; set; }

    [StringLength(20)]
    [Required]
    public string NotificationType { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }
}

