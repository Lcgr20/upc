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
    public async Task<ActionResult<BaseResponseGeneric<ICollection<Transaction>>>> Get()
    {
        var response = new BaseResponseGeneric<ICollection<Transaction>>();

        try
        {
            response.Result = await _context.Transactions.ToListAsync();
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
