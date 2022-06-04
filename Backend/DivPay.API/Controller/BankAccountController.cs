using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]

public class BankAccountController : ControllerBase
{
    private readonly DivPayDBContext _context;

    public BankAccountController(DivPayDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<ICollection<BankAccount>>> Get()
    {
        ICollection<BankAccount> response;

        response = await _context.BankAccounts.ToListAsync();

        return Ok(response);

    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<BankAccount>> Get(int id)
    {
        var entity = await _context.BankAccounts.FindAsync(id);
        if (entity == null)
        {
            return NotFound("No se encontró ningún resultado");
        }
        return Ok(entity);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoBankAccount request)
    {
        var entity = new BankAccount
        {
            Name = request.Name,
            Moneda = request.Moneda,
            TipoDeCuenta = request.TipoDeCuenta,
            UserId = request.UserId,
            Status = true
        };

        _context.BankAccounts.Add(entity);
        await _context.SaveChangesAsync();

        HttpContext.Response.Headers.Add("location", $"/api/bankAccount/{entity.Id}");
        return Ok();
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> Put(int id, DtoBankAccount request)
    {
        var entity = await _context.BankAccounts.FindAsync(id);

        if (entity == null) return NotFound();

        entity.Name = request.Name;
        entity.Moneda = request.Moneda;
        entity.TipoDeCuenta = request.TipoDeCuenta;

        _context.Entry(entity).State = EntityState.Modified;    
        await _context.SaveChangesAsync();

        return Ok(new { Id = id });
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult<BankAccount>> Delete(int id)
    {
        try
        {
            var entityToDelete = await _context.BankAccounts.FindAsync(id);
            if (entityToDelete == null) return NotFound();
            _context.BankAccounts.Remove(entityToDelete);
            await _context.SaveChangesAsync();
            return Ok();
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "Error deleting data");
        }
    }
}
