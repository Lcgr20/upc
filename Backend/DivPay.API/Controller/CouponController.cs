using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;
using DivPay.Services;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class CouponController : ControllerBase
{
    private readonly ICouponService _couponService;

    public CouponController(ICouponService couponService)
    {
        this._couponService = couponService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Coupon>>> Get()
    {
        return await _couponService.GetCoupons(); ;
    }

    [HttpGet("{id:int}", Name ="GetCoupon")]
    public async Task<ActionResult<Coupon>> Get(int id)
    {
        var coupon = await _couponService.GetCoupon(id);

        if (coupon == null)
        {
            return NotFound();
        }
        return Ok(coupon);
    }

    [HttpGet("CouponFromUser/{id:int}")]
    public async Task<ActionResult<Coupon>> GetCouponFromUser(int id)
    {
        return await _couponService.GetCouponFromUser(id);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoCoupon request)
    {
        await _couponService.CreateCoupon(request);
        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult<Coupon>> Delete(int id)
    {
        var coupon = await _couponService.GetCoupon(id);
        if (coupon == null)
        {
            return NotFound();
        }
        await _couponService.DeleteCoupon(coupon);
        return NoContent();
    }
}
