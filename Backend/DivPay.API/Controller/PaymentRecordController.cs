using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class PaymentRecordController : ControllerBase
{
    private readonly DivPayDBContext _context;

    public PaymentRecordController(DivPayDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<ICollection<PaymentRecord>>> Get()
    {
        ICollection<PaymentRecord> response;

        response = await _context.PaymentRecords.ToListAsync();


        return Ok(response);

    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<PaymentRecord>> Get(int id)
    {
        var entity = await _context.PaymentRecords.FindAsync(id);
        if (entity == null)
        {
            return NotFound("No se encontró ningún resultado");
        }
        return Ok(entity);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoPaymentRecord request)
    {
        var entity = new PaymentRecord
        {
            PaymentStatus = request.PaymentStatus,
            PaymentDate = request.PaymentDate,
            UserId = request.UserId,
            Status = true
        };

        _context.PaymentRecords.Add(entity);
        await _context.SaveChangesAsync();

        HttpContext.Response.Headers.Add("location", $"/api/paymentRecord/{entity.Id}");
        return Ok();
    }
}
