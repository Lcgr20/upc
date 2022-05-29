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
    public async Task<ActionResult<BaseResponseGeneric<ICollection<PaymentRecord>>>> Get()
    {
        var response = new BaseResponseGeneric<ICollection<PaymentRecord>>();

        try
        {
            response.Result = await _context.PaymentRecords.ToListAsync();
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
