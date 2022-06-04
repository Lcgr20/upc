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
    public async Task<ActionResult<ICollection<InvitationCode>>> Get()
    {
        ICollection<InvitationCode> response;

        response = await _context.InvitationCodes.ToListAsync();


        return Ok(response);

    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<InvitationCode>> Get(int id)
    {
        var entity = await _context.InvitationCodes.FindAsync(id);
        if (entity == null)
        {
            return NotFound("No se encontró ningún resultado");
        }
        return Ok(entity);
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
