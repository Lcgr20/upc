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
    public async Task<ActionResult<BaseResponseGeneric<ICollection<User>>>> Get()
    {
        var response = new BaseResponseGeneric<ICollection<User>>();

        try
        {
            response.Result = await _context.Users.ToListAsync();
            response.Success = true;
            return Ok(response);
        }
        catch (Exception ex)
        {
            response.Errors.Add(ex.Message);
            return response;
        }
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
}

