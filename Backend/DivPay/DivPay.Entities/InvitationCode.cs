using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("CodigosdeInvitacion")]
public class InvitationCode: EntityBase
{
    public int NumInvitados { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }
}

