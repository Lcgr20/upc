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
public class UserController: ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        this._userService = userService;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> Get()
    {
        return await _userService.GetUsers();
    }

    [HttpGet("{id}", Name = "GetUser")]
    public async Task<ActionResult<User>> Get(int id)
    {
        var user = await _userService.GetUser(id);

        if(user == null)
        {
            return NotFound();
        }
        return Ok(user);
    }

    [HttpPost]
    public async Task<ActionResult<User>> Post(DtoUser request)
    {
        string respuesta= await _userService.CreateUser(request); 
        if(respuesta== "correcto") { return Ok(); }
        if(respuesta== "existe-mismo-username") { return BadRequest("existe un usuario con el mismo Username"); }
        if (respuesta == "existe-mismo-dni") { return BadRequest("existe un usuario con el mismo DNI"); }
        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult<User>> Delete(int id)
    {
        var user=await _userService.GetUser(id);
        if (user == null)
        {
            return NotFound();
        }
        await _userService.DeleteUser(user);
        return NoContent();
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<User>> Put(int id, DtoUser request)
    {
        await _userService.UpdateUser(id, request);
        return NoContent();
    }


    [HttpGet("signup/{usuario}/{contraseña}")]
    public async Task<ActionResult<string>> signup(string usuario,string contraseña)
    {
        string respuesta = await _userService.Sigunp(usuario, contraseña);
        return Ok(respuesta);
    }
}

