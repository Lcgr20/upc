using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class InvitationCodeController : ControllerBase
{
    private readonly DivPayDBContext _context;

    public InvitationCodeController(DivPayDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<BaseResponseGeneric<ICollection<InvitationCode>>>> Get()
    {
        var response = new BaseResponseGeneric<ICollection<InvitationCode>>();

        try
        {
            response.Result = await _context.InvitationCodes.ToListAsync();
            response.Success = true;
            return Ok(response);
        }
        catch (Exception ex)
        {
            response.Errors.Add(ex.Message);
            return response;
        }
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoInvitationCode request)
    {
        var entity = new InvitationCode
        {
            NumInvitados = request.NumInvitados,
            UserId = request.UserId,
            InviteCode = request.InviteCode,
            Status = true
        };

        _context.InvitationCodes.Add(entity);
        await _context.SaveChangesAsync();

        HttpContext.Response.Headers.Add("location", $"/api/invitationCode/{entity.Id}");
        return Ok();
    }
}
