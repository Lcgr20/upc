using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("Transacciones")]
public class Transaction: EntityBase
{
    [Required]
    public decimal SentQuantity { get; set; }

    [Required]
    public decimal ReceivedQuantity { get; set; }

    [Required]
    public int PaymentRecordId { get; set; }
    public PaymentRecord PaymentRecord { get; set; }

    [Required]
    public int ExchangeRateId { get; set; }
    public ExchangeRate ExchangeRate { get; set; }
}

