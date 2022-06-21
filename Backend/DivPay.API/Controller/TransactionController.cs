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

public class TransactionController : ControllerBase
{
    private readonly ITransactionService _transactionService;

    public TransactionController(ITransactionService transactionService)
    {
        _transactionService = transactionService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Transaction>>> Get()
    {
        return await _transactionService.GetTransactions();
    }

    [HttpGet("{id:int}", Name = "GetTransaction")]
    public async Task<ActionResult<Transaction>> Get(int id)
    {
        var transaction = await _transactionService.GetTransaction(id);

        if (transaction == null)
        {
            return NotFound();
        }
        return Ok(transaction);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoTransaction request)
    {
        await _transactionService.CreateTransaction(request);
        return Ok();
    }
}
