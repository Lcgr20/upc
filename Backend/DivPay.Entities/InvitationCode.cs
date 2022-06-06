using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("CodigosdeInvitacion")]
public class InvitationCode: EntityBase
{
    [Required]
    public int NumInvitados { get; set; }

    [Required]
    public int UserId { get; set; }

    [StringLength(10)]
    [Required]
    public string InviteCode { get; set; }
    public User User { get; set; }
}

