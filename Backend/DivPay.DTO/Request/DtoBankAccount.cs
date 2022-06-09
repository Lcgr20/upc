using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.DTO.Request;

public class DtoBankAccount
{
    public string Name { get; set; }
    public string AccountNumber { get; set; }
    public string BankName { get; set; }
    public string Moneda { get; set; }
    public string TipoDeCuenta { get; set; }
    public int UserId { get; set; }
}
