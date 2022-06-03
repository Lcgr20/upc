using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("CuentasBancarias")]
public class BankAccount: EntityBase
{

    [StringLength(40)]
    [Required]
    public string Name { get; set; }

    [StringLength(25)]
    [Required]
    public string Moneda { get; set; }

    [StringLength(40)]
    [Required]
    public string TipoDeCuenta { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }
}

    