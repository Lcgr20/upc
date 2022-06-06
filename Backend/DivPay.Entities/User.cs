using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("Usuarios")]
public class User: EntityBase
{
    [StringLength(30)]
    [Required]
    public string Username { get; set; }

    [StringLength(50)]
    [Required]
    public string Name { get; set; }

    [StringLength(50)]
    [Required]
    public string Email { get; set; }

    [Required]
    public int Dni { get; set; }

    [Required]
    public int PhoneNumber { get; set; }

    public int Age { get; set; }

    [StringLength(25)]
    [Required]
    public string Password { get; set; }

    public InvitationCode InvitationCode { get; set; }

    public Coupon Coupon { get; set; }
}
