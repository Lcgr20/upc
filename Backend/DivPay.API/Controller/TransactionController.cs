using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class TransactionController : ControllerBase
{
    private readonly DivPayDBContext _context;

    public TransactionController(DivPayDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<ICollection<Transaction>>> Get()
    {
        ICollection<Transaction> response;

        response = await _context.Transactions.ToListAsync();


        return Ok(response);

    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Transaction>> Get(int id)
    {
        var entity = await _context.Transactions.FindAsync(id);
        if (entity == null)
        {
            return NotFound("No se encontró ningún resultado");
        }
        return Ok(entity);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoTransaction request)
    {
        var entity = new Transaction
        {
            SentQuantity = request.SentQuantity,
            ReceivedQuantity = request.ReceivedQuantity,
            PaymentRecordId = request.PaymentRecordId,
            ExchangeRateId = request.ExchangeRateId,    
            Status = true
        };

        _context.Transactions.Add(entity);
        await _context.SaveChangesAsync();

        HttpContext.Response.Headers.Add("location", $"/api/transaction/{entity.Id}");
        return Ok();
    }
}
