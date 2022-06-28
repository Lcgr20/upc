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

public class PaymentRecordController : ControllerBase
{
    private readonly IPaymentRecordService _paymentRecordService;

    public PaymentRecordController(IPaymentRecordService paymentRecordService)
    {
        _paymentRecordService = paymentRecordService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<PaymentRecord>>> Get()
    {
        return await _paymentRecordService.GetPaymentRecords();

    }

    [HttpGet("{id:int}", Name ="GetPaymentRecord")]
    public async Task<ActionResult<PaymentRecord>> Get(int id)
    {
        var paymentRecord = await _paymentRecordService.GetPaymentRecord(id);

        if (paymentRecord == null)
        {
            return NotFound();
        }
        return Ok(paymentRecord);
    }

    [HttpGet("PaymentRecordsFromUser/{id:int}")]
    public async Task<ActionResult<IEnumerable<PaymentRecord>>> GetPaymentRecordsFromUser(int id)
    {
        return await _paymentRecordService.GetPaymentRecordsFromUser(id);
    }

    [HttpPost]
    public async Task<ActionResult<string>> Post(DtoPaymentRecord request)
    {
        var idddd = await _paymentRecordService.CreatePaymentRecord(request);
        return idddd;
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> UpdateStatus(int id, DtoPaymentRecord paymentRecord)
    {
        await _paymentRecordService.UpdateStatus(id, paymentRecord);
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult<PaymentRecord>> Delete(int id)
    {
        var paymentRecord = await _paymentRecordService.GetPaymentRecord(id);
        if (paymentRecord == null)
        {
            return NotFound();
        }
        await _paymentRecordService.DeletePaymentRecord(paymentRecord);
        return NoContent();
    }
}
