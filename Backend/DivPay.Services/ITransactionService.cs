using DivPay.DTO.Request;
using DivPay.Entities;

namespace DivPay.Services;

public interface ITransactionService
{
    Task<Transaction> CreateTransaction(DtoTransaction transaction);
    Task<Transaction> GetTransaction(int id);
    Task<List<Transaction>> GetTransactions();
}
