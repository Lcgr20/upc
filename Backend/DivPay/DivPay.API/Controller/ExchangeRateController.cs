﻿using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class ExchangeRateController : ControllerBase
{
    private readonly DivPayDBContext _context;

    public ExchangeRateController(DivPayDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<BaseResponseGeneric<ICollection<ExchangeRate>>>> Get()
    {
        var response = new BaseResponseGeneric<ICollection<ExchangeRate>>();

        try
        {
            response.Result = await _context.ExchangeRates.ToListAsync();
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
    public async Task<ActionResult> Post(DtoExchangeRate request)
    {
        var entity = new ExchangeRate
        {
            CurrencyA = request.CurrencyA,
            CurrencyB = request.CurrencyB,
            ExchangeRateAB = request.ExchangeRateAB,
            Status = true
        };

        _context.ExchangeRates.Add(entity);
        await _context.SaveChangesAsync();

        HttpContext.Response.Headers.Add("location", $"/api/exchangeRate/{entity.Id}");
        return Ok();
    }
}