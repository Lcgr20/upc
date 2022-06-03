using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.DTO.Request;

public class DtoExchangeRate
{
    public string CurrencyA { get; set; }
    public string CurrencyB { get; set; }
    public decimal ExchangeRateAB { get; set; }
}
