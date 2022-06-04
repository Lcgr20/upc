using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("RegistrosdePago")]
public class PaymentRecord: EntityBase
{
    [StringLength(25)]
    [Required]
    public string PaymentStatus { get; set; }
    public DateTime PaymentDate { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }

    public Transaction Transaction { get; set; }
}

