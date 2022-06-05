using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class CouponController : ControllerBase
{
    private readonly DivPayDBContext _context;

    public CouponController(DivPayDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<ICollection<Coupon>>> Get()
    {
        ICollection<Coupon> response;

        response = await _context.Coupons.ToListAsync();

        return Ok(response);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Coupon>> Get(int id)
    {
        var entity = await _context.Coupons.FindAsync(id);
        if (entity == null)
        {
            return NotFound("No se encontró ningún resultado");
        }
        return Ok(entity);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoCoupon request)
    {
        var entity = new Coupon
        {
            CouponCode = request.CouponCode,
            Discount = request.Discount,
            UserId = request.UserId,
            Status = true
        };

        _context.Coupons.Add(entity);
        await _context.SaveChangesAsync();

        HttpContext.Response.Headers.Add("location", $"/api/coupon/{entity.Id}");
        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult<Coupon>> Delete(int id)
    {
        try
        {
            var entityToDelete = await _context.Coupons.FindAsync(id);
            if (entityToDelete == null) return NotFound();
            _context.Coupons.Remove(entityToDelete);
            await _context.SaveChangesAsync();
            return Ok();
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "Error deleting data");
        }
    }
}
