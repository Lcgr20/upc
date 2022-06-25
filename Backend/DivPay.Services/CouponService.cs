using DivPay.DataAccess;
using DivPay.DTO.Request;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;

namespace DivPay.Services;

public class CouponService:ICouponService
{
    private readonly DivPayDBContext _context;

    public CouponService(DivPayDBContext context)
    {
        _context = context;
    }

    public async Task<Coupon> CreateCoupon(DtoCoupon request)
    {
        var coupon = new Coupon()
        {
            CouponCode = request.CouponCode,
            Discount = request.Discount,
            UserId = request.UserId,
            Status = true
        };
        await _context.Coupons.AddAsync(coupon);
        await _context.SaveChangesAsync();

        return coupon;
    }

    public async Task DeleteCoupon(Coupon coupon)
    {
        _context.Coupons.Remove(coupon);
        await _context.SaveChangesAsync();
    }

    public async Task<Coupon> GetCoupon(int id)
    {
        return await _context.Coupons.Where(c => c.Id == id).FirstOrDefaultAsync();
    }

    public async Task<List<Coupon>> GetCoupons()
    {
        return await _context.Coupons.ToListAsync();
    }

    public async Task<Coupon> GetCouponFromUser(int id)
    {
        return await _context.Coupons.Where(c => c.UserId == id).FirstOrDefaultAsync();
    }

    public async Task<string> confirrmcoupon(string copuncodde)
    {
        Coupon couponnn = await _context.Coupons.Where(c => c.CouponCode == copuncodde).FirstOrDefaultAsync();
        if (couponnn == null)
        {
            return "No existe";
        }
        else
        {
            return "existe";
        }
    }
}
