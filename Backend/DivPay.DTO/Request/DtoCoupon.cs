using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.DTO.Request;

public class DtoCoupon
{
    public string CouponCode { get; set; }
    public decimal Discount { get; set; }
    public int UserId { get; set; }
}
