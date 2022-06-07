using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.DTO.Request;

public class DtoPaymentRecord
{
    public string PaymentStatus { get; set; }
    public DateTime PaymentDate { get; set; }
    public int UserId { get; set; }
}
