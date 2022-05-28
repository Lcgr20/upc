using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.DTO.Request;

public class DtoUser
{
    public string Username { get; set; }
   
    public string Name { get; set; }

    public string Email { get; set; }

    public int Dni { get; set; }

    public int PhoneNumber { get; set; }

    public int Age { get; set; }
}

