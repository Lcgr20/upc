using DivPay.DataAccess;
using DivPay.DTO.Request;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;

namespace DivPay.Services;

public class ExchangeRateService:IExchangeRateService
{
    private readonly DivPayDBContext _context;

    public ExchangeRateService(DivPayDBContext context)
    {
        this._context = context;
    }

    public async Task<ExchangeRate> CreateExchangeRate(DtoExchangeRate request)
    {
        var exchangeRate = new ExchangeRate()
        {
            CurrencyA = request.CurrencyA,
            CurrencyB = request.CurrencyB,
            ExchangeRateAB = request.ExchangeRateAB,
            Status = true
        };
        await _context.ExchangeRates.AddAsync(exchangeRate);
        await _context.SaveChangesAsync();

        return exchangeRate;
    }

    public async Task<ExchangeRate> GetExchangeRate(int id)
    {
        return await _context.ExchangeRates.Where(e => e.Id == id).FirstOrDefaultAsync();
    }

    public async Task<List<ExchangeRate>> GetExchangeRates()
    {
        return await _context.ExchangeRates.ToListAsync();
    }
}
