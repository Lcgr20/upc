using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("CuentasBancarias")]
public class BankAccount: EntityBase
{
    [Required]
    public int BankAccountId { get; set; }

    [StringLength(40)]
    [Required]
    public string Name { get; set; }

    [StringLength(25)]
    [Required]
    public string Moneda { get; set; }

    [StringLength(40)]
    [Required]
    public string TipoDeCuenta { get; set; }
}

