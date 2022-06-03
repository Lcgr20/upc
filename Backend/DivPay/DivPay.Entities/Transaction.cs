using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("Transacciones")]
public class Transaction: EntityBase
{
    public decimal SentQuantity { get; set; }

    public decimal ReceivedQuantity { get; set; }

    public int PaymentRecordId { get; set; }
    public PaymentRecord PaymentRecord { get; set; }

    public int ExchangeRateId { get; set; }
    public ExchangeRate ExchangeRate { get; set; }
}

