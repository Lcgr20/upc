using DivPay.DTO.Request;
using DivPay.Entities;

namespace DivPay.Services;

public interface IPaymentRecordService
{
    Task<PaymentRecord> CreatePaymentRecord(DtoPaymentRecord paymentRecord);
    Task<PaymentRecord> GetPaymentRecord(int id);
    Task<List<PaymentRecord>> GetPaymentRecords();
}
