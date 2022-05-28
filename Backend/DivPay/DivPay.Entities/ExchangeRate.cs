using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("TasasdeCambio")]
public class ExchangeRate: EntityBase
{
    [StringLength(15)]
    [Required]
    public string CurrencyA { get; set; }

    [StringLength(15)]
    [Required]
    public string CurrencyB { get; set; }

    public decimal ExchangeRateAB { get; set; }
}

