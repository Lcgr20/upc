using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.DTO.Request;

public class DtoNotification
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string NotificationStatus { get; set; }
    public DateTime Date { get; set; }
    public string NotificationType { get; set; }
    public int UserId { get; set; }
}
