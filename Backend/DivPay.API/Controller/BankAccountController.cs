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

public class BankAccountController : ControllerBase
{
    private readonly IBankAccountService _bankAccountService;

    public BankAccountController(IBankAccountService bankService)
    {
        this._bankAccountService = bankService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<BankAccount>>> Get()
    {
        return await _bankAccountService.GetBankAccounts();
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<BankAccount>> Get(int id)
    {
        var bankAccount = await _bankAccountService.GetBankAccount(id);

        if (bankAccount == null)
        {
            return NotFound();
        }
        return Ok(bankAccount);
    }

    [HttpGet("BankAccountsFromUser/{id:int}")]
    public async Task<ActionResult<IEnumerable<BankAccount>>> GetBankAccountsFromUser(int id)
    {
        return await _bankAccountService.GetBankAccountsFromUser(id);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoBankAccount request)
    {
        await _bankAccountService.CreateBankAccount(request);
        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult<BankAccount>> Delete(int id)
    {
        var bankAccount = await _bankAccountService.GetBankAccount(id);
        if (bankAccount == null)
        {
            return NotFound();
        }
        await _bankAccountService.DeleteBankAccount(bankAccount);
        return NoContent();
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> Put(int id, DtoBankAccount request)
    {
        await _bankAccountService.UpdateBankAccount(id, request);
        return NoContent();
    }
}
