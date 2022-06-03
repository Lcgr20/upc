using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class BankAccountController : ControllerBase
{
    private readonly DivPayDBContext _context;

    public BankAccountController(DivPayDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<BaseResponseGeneric<ICollection<BankAccount>>>> Get()
    {
        var response = new BaseResponseGeneric<ICollection<BankAccount>>();

        try
        {
            response.Result = await _context.BankAccounts.ToListAsync();
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
    public async Task<ActionResult> Post(DtoBankAccount request)
    {
        var entity = new BankAccount
        {
            Name = request.Name,
            Moneda = request.Moneda,
            TipoDeCuenta = request.TipoDeCuenta,
            UserId = request.UserId,
            Status = true
        };

        _context.BankAccounts.Add(entity);
        await _context.SaveChangesAsync();

        HttpContext.Response.Headers.Add("location", $"/api/bankAccount/{entity.Id}");
        return Ok();
    }
}
