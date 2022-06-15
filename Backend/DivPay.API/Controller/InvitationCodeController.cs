using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;
using DivPay.Services;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class InvitationCodeController : ControllerBase
{
    private readonly IInvitationCodeService _invitationCodeService;

    public InvitationCodeController(IInvitationCodeService invitationCodeService)
    {
        _invitationCodeService = invitationCodeService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<InvitationCode>>> Get()
    {
        return await _invitationCodeService.GetInvitationCodes();
    }

    [HttpGet("{id:int}", Name = "GetInvitationCode")]
    public async Task<ActionResult<InvitationCode>> Get(int id)
    {
        var invitationCode = await _invitationCodeService.GetInvitationCode(id);

        if (invitationCode == null)
        {
            return NotFound();
        }
        return Ok(invitationCode);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoInvitationCode request)
    {
        await _invitationCodeService.CreateInvitationCode(request);
        return Ok();
    }
}
