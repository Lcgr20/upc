using DivPay.Entities;
using Microsoft.EntityFrameworkCore;

namespace DivPay.DataAccess;

public class DivPayDBContext: DbContext
{
    public DivPayDBContext()
    {

    }

    public DivPayDBContext(DbContextOptions<DivPayDBContext> options)
        : base(options)
    {

    }

    public DbSet<User> Users { get; set; }
    public DbSet<BankAccount> BankAccounts { get; set; }
    public DbSet<PaymentRecord> PaymentRecords { get; set; }
    public DbSet<InvitationCode> InvitationCodes { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
    public DbSet<ExchangeRate> ExchangeRates { get; set; }

}
