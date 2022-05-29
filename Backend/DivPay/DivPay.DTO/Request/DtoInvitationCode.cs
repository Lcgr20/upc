using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.DTO.Request;

public class DtoInvitationCode
{
    public int NumInvitados { get; set; }
    public int UserId { get; set; }
    public string InviteCode { get; set; }
}
