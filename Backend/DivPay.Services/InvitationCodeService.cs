using DivPay.DataAccess;
using DivPay.DTO.Request;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;

namespace DivPay.Services;

public class InvitationCodeService:IInvitationCodeService
{
    private readonly DivPayDBContext _context;

    public InvitationCodeService(DivPayDBContext context)
    {
        _context = context;
    }

    public async Task<InvitationCode> CreateInvitationCode(DtoInvitationCode request)
    {
        var invitationCode = new InvitationCode()
        {
            NumInvitados = request.NumInvitados,
            InviteCode = request.InviteCode,
            UserId = request.UserId,
            Status = true
        };
        await _context.InvitationCodes.AddAsync(invitationCode);
        await _context.SaveChangesAsync();

        return invitationCode;
    }

    public async Task<InvitationCode> GetInvitationCode(int id)
    {
        return await _context.InvitationCodes.Where(i => i.Id == id).FirstOrDefaultAsync();
    }

    public async Task<InvitationCode> GetInvitationCodeFromUser(int id)
    {
        return await _context.InvitationCodes.Where(i => i.UserId == id).FirstOrDefaultAsync();
    }

    public async Task<List<InvitationCode>> GetInvitationCodes()
    {
        return await _context.InvitationCodes.ToListAsync();
    }
    public async Task<string> confirrminvitcode(string invitecode)
    {
        InvitationCode inviteecode = await _context.InvitationCodes.Where(i => i.InviteCode == invitecode).FirstOrDefaultAsync();
        if (inviteecode == null)
        {
            return "No existe";
        }
        else
        {
            return inviteecode.UserId.ToString();
        }
    }
    public async Task aumentarnum(int userid)
    {
        var inviteecode = _context.InvitationCodes.Where(i => i.UserId == userid).FirstOrDefault();
        if (inviteecode == null)
        {
        }
        else
        {
            if (inviteecode.NumInvitados < 10)
            {
                inviteecode.NumInvitados +=1;
                _context.Entry(inviteecode).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
        }
    }
}
