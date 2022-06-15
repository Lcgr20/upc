using DivPay.DataAccess;
using DivPay.DTO.Request;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;

namespace DivPay.Services;

public class PaymentRecordService:IPaymentRecordService
{
    private readonly DivPayDBContext _context;

    public PaymentRecordService(DivPayDBContext context)
    {
        this._context = context;
    }

    public async Task<PaymentRecord> CreatePaymentRecord(DtoPaymentRecord request)
    {
        var paymentRecord = new PaymentRecord()
        {
            PaymentStatus = request.PaymentStatus,
            PaymentDate = request.PaymentDate,
            UserId = request.UserId,
            Status = true
        };
        await _context.PaymentRecords.AddAsync(paymentRecord);
        await _context.SaveChangesAsync();

        return paymentRecord;
    }

    public async Task<PaymentRecord> GetPaymentRecord(int id)
    {
        return await _context.PaymentRecords.Where(p => p.Id == id).FirstOrDefaultAsync();
    }

    public async Task<List<PaymentRecord>> GetPaymentRecords()
    {
        return await _context.PaymentRecords.ToListAsync();
    }
}
