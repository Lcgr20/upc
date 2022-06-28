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

    public async Task<String> CreateBankAccount(DtoBankAccount request)
    {
        List<BankAccount> ba_examples = await _context.BankAccounts.Where(b => b.AccountNumber == request.AccountNumber).ToListAsync();

        var create = false;

        foreach (var ba in ba_examples)
        {
            if (ba.BankName == request.BankName)
            {
                create = true;
                break;
            }
        }

        if (create == false)
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
            return "Cuenta creada exitosamente.";
        }
        else
        {
            return "Ya existe una cuenta con este número.";
        }
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

    public async Task<String> UpdateBankAccount(int id, DtoBankAccount bankAccount)
    {
        List<BankAccount> ba_examples = await _context.BankAccounts.Where(b => b.AccountNumber == bankAccount.AccountNumber).ToListAsync();

        var create = false;

        foreach (var ba in ba_examples)
        {
            if (ba.BankName == bankAccount.BankName && ba.Id != id)
            {
                create = true;
                break;
            }
        }
        if (create == false)
        {
            var entity = await _context.BankAccounts.FindAsync(id);
            entity.Name = bankAccount.Name;
            entity.AccountNumber = bankAccount.AccountNumber;
            entity.BankName = bankAccount.BankName;
            entity.Moneda = bankAccount.Moneda;
            entity.TipoDeCuenta = bankAccount.TipoDeCuenta;

            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return "Se realizaron los cambios de forma correcta.";
        }
        else
        {
            return "Ya existe una cuenta con este número.";
        }
    }
}
