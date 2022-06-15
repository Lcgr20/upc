using DivPay.DTO.Request;
using DivPay.Entities;

namespace DivPay.Services;

public interface IInvitationCodeService
{
    Task<InvitationCode> CreateInvitationCode(DtoInvitationCode invitationCode);
    Task<InvitationCode> GetInvitationCode(int id);
    Task<List<InvitationCode>> GetInvitationCodes();
}
