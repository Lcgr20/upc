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

public class ExchangeRateController : ControllerBase
{
    private readonly IExchangeRateService _exchangeRateService;

    public ExchangeRateController(IExchangeRateService exchangeRateService)
    {
        _exchangeRateService = exchangeRateService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ExchangeRate>>> Get()
    {
        return await _exchangeRateService.GetExchangeRates();
    }

    [HttpGet("{id}", Name = "GetExchangeRate")]
    public async Task<ActionResult<User>> Get(int id)
    {
        var exchangeRate = await _exchangeRateService.GetExchangeRate(id);

        if (exchangeRate == null)
        {
            return NotFound();
        }
        return Ok(exchangeRate);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoExchangeRate request)
    {
        await _exchangeRateService.CreateExchangeRate(request);
        return Ok();
    }
}
