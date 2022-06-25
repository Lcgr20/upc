using DivPay.DTO.Request;
using DivPay.Entities;

namespace DivPay.Services;

public interface IInvitationCodeService
{
    Task<InvitationCode> CreateInvitationCode(DtoInvitationCode invitationCode);
    Task<InvitationCode> GetInvitationCode(int id);
    Task<List<InvitationCode>> GetInvitationCodes();
    Task<InvitationCode> GetInvitationCodeFromUser(int id);
    Task<string> confirrminvitcode(string invitecode);
    Task aumentarnum(int userid);
}
