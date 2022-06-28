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

    public async Task<string> CreatePaymentRecord(DtoPaymentRecord request)
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

        return paymentRecord.Id.ToString();
    }

    public async Task DeletePaymentRecord(PaymentRecord paymentRecord)
    {
        _context.PaymentRecords.Remove(paymentRecord);
        await _context.SaveChangesAsync();
    }

    public async Task<PaymentRecord> GetPaymentRecord(int id)
    {
        return await _context.PaymentRecords.Where(p => p.Id == id).FirstOrDefaultAsync();
    }

    public async Task<List<PaymentRecord>> GetPaymentRecords()
    {
        return await _context.PaymentRecords.ToListAsync();
    }

    public async Task<List<PaymentRecord>> GetPaymentRecordsFromUser(int id)
    {
        return await _context.PaymentRecords.Where(p => p.UserId == id).ToListAsync();
    }

    public async Task UpdateStatus(int id, DtoPaymentRecord paymentRecord)
    {
        var entity = await _context.PaymentRecords.FindAsync(id);
        entity.PaymentStatus = paymentRecord.PaymentStatus;

        _context.Entry(entity).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }
}
