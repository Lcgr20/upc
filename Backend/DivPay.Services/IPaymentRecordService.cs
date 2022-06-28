using DivPay.DTO.Request;
using DivPay.Entities;

namespace DivPay.Services;

public interface IPaymentRecordService
{
    Task<string> CreatePaymentRecord(DtoPaymentRecord paymentRecord);
    Task<PaymentRecord> GetPaymentRecord(int id);
    Task<List<PaymentRecord>> GetPaymentRecords();
    Task<List<PaymentRecord>> GetPaymentRecordsFromUser(int id);
    Task UpdateStatus(int id, DtoPaymentRecord paymentRecord);
    Task DeletePaymentRecord(PaymentRecord paymentRecord);
}
