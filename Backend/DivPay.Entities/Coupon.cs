
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("Cupones")]
public class Coupon : EntityBase
{
    [StringLength(10)]
    [Required]
    public string CouponCode { get; set; }

    public decimal Discount { get; set; }

    public int UserId { get; set; }

    public User User { get; set; }
}
