using DivPay.DataAccess;
using DivPay.DTO.Request;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.Services;

public class BankAccountService:IBankAccountService
{
    private readonly DivPayDBContext _context;

    public BankAccountService(DivPayDBContext context)
    {
        this._context = context;
    }

    public async Task<BankAccount> CreateBankAccount(DtoBankAccount request)
    {
        var bankAccount = new BankAccount()
        {
            Name = request.Name,
            AccountNumber = request.AccountNumber,
            BankName = request.BankName,
            Moneda = request.Moneda,
            TipoDeCuenta = request.TipoDeCuenta,
            UserId = request.UserId,
            Status = true
        };
        await _context.BankAccounts.AddAsync(bankAccount);
        await _context.SaveChangesAsync();

        return bankAccount;
    }

    public async Task DeleteBankAccount(BankAccount bankAccount)
    {
        _context.BankAccounts.Remove(bankAccount);
        await _context.SaveChangesAsync();
    }

    public async Task<BankAccount> GetBankAccount(int id)
    {
        return await _context.BankAccounts.Where(b => b.Id == id).FirstOrDefaultAsync();
    }

    public async Task<List<BankAccount>> GetBankAccounts()
    {
        return await _context.BankAccounts.ToListAsync();
    }

    public async Task<List<BankAccount>> GetBankAccountsFromUser(int id)
    {
        return await _context.BankAccounts.Where(b => b.UserId == id).ToListAsync();
    }

    public async Task UpdateBankAccount(int id, DtoBankAccount bankAccount)
    {
        var entity = await _context.BankAccounts.FindAsync(id);
        entity.Name = bankAccount.Name;
        entity.AccountNumber = bankAccount.AccountNumber;
        entity.BankName = bankAccount.BankName;
        entity.Moneda = bankAccount.Moneda;
        entity.TipoDeCuenta = bankAccount.TipoDeCuenta;

        _context.Entry(entity).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }
}
