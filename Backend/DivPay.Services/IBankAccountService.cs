using DivPay.DTO.Request;
using DivPay.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.Services;

public interface IBankAccountService
{
    Task<BankAccount> CreateBankAccount(DtoBankAccount bankAccount);
    Task DeleteBankAccount(BankAccount bankAccount);
    Task<BankAccount> GetBankAccount(int id);
    Task<List<BankAccount>> GetBankAccounts();
    Task<List<BankAccount>> GetBankAccountsFromUser(int id);
    Task UpdateBankAccount(int id, DtoBankAccount bankAccount);
}
