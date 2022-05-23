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
}
