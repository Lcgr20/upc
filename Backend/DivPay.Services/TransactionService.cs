using DivPay.DataAccess;
using DivPay.DTO.Request;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;

namespace DivPay.Services;

public class TransactionService:ITransactionService
{
    private readonly DivPayDBContext _context;

    public TransactionService(DivPayDBContext context)
    {
        this._context = context;
    }

    public async Task<Transaction> CreateTransaction(DtoTransaction request)
    {
        var transaction = new Transaction()
        {
            SentQuantity = request.SentQuantity,
            ReceivedQuantity = request.ReceivedQuantity,
            PaymentRecordId = request.PaymentRecordId,
            ExchangeRateId = request.ExchangeRateId,
            Status = true
        };
        await _context.Transactions.AddAsync(transaction);
        await _context.SaveChangesAsync();

        return transaction;
    }

    public async Task<Transaction> GetTransaction(int id)
    {
        return await _context.Transactions.Where(t => t.Id == id).FirstOrDefaultAsync();
    }

    public async Task<List<Transaction>> GetTransactions()
    {
        return await _context.Transactions.ToListAsync();
    }
}
