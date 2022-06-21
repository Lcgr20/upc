using DivPay.DTO.Request;
using DivPay.Entities;

namespace DivPay.Services;

public interface IExchangeRateService
{
    Task<ExchangeRate> CreateExchangeRate(DtoExchangeRate exchangeRate);
    Task<ExchangeRate> GetExchangeRate(int id);
    Task<List<ExchangeRate>> GetExchangeRates();
}
