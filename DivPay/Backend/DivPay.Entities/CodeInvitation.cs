using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("CodigosdeInvitacion")]
 public class CodeInvitation: EntityBase
 {
    [Required]
    public int CodeInvitationId { get; set; }

    [Required]
    public int NumInvitados { get; set; }
}

