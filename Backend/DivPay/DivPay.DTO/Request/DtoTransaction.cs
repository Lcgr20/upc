using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.DTO.Request;

public class DtoTransaction
{
    public decimal SentQuantity { get; set; }

    public decimal ReceivedQuantity { get; set; }

    public int PaymentRecordId { get; set; }

    public int ExchangeRateId { get; set; }

}
