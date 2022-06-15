using DivPay.DTO.Request;
using DivPay.Entities;

namespace DivPay.Services;

public interface ICouponService
{
    Task<Coupon> CreateCoupon(DtoCoupon coupon);
    Task DeleteCoupon(Coupon coupon);
    Task<Coupon> GetCoupon(int id);
    Task<List<Coupon>> GetCoupons();
}
