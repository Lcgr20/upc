using Microsoft.AspNetCore.Mvc;
using DivPay.DataAccess;
using DivPay.DTO.Response;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using DivPay.DTO.Request;

namespace DivPay.API.Controller;

[ApiController]
[Route("api/[Controller]")]
public class UserController: ControllerBase
{
    private readonly DivPayDBContext _context;

    public UserController(DivPayDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<ICollection<User>>> Get()
    {
        ICollection<User> response;

        response = await _context.Users.ToListAsync();


        return Ok(response);

    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<User>> Get(int id)
    {
        var entity = await _context.Users.FindAsync(id);
        if (entity == null)
        {
            return NotFound("No se encontró ningún resultado");
        }
        return Ok(entity);
    }

    [HttpPost]
    public async Task<ActionResult> Post(DtoUser request)
    {
        var entity = new User
        {
            Username = request.Username,
            Email = request.Email,
            Name = request.Name,
            Dni = request.Dni,
            PhoneNumber = request.PhoneNumber,
            Age = request.Age,
            Status = true
        };

        _context.Users.Add(entity);
        await _context.SaveChangesAsync();

        HttpContext.Response.Headers.Add("location", $"/api/user/{entity.Id}");
        return Ok();
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> Put(int id, DtoUser request)
    {
        var entity = await _context.Users.FindAsync(id);

        if (entity == null) return NotFound();

        entity.Username = request.Username;
        entity.Email = request.Email;
        entity.Name = request.Name;
        entity.Age = request.Age;
        entity.Dni = request.Dni;
        entity.PhoneNumber = request.PhoneNumber;

        _context.Entry(entity).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return Ok(new { Id = id });
    }
}

