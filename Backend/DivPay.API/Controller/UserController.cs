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
    public async Task<ActionResult<string>> Post(DtoUser request)
    {
        string respuesta= await _userService.CreateUser(request);
        return Ok(respuesta);
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


    [HttpGet("login/{usuario}/{contraseña}")]
    public async Task<ActionResult<string>> login(string usuario,string contraseña)
    {
        string respuesta = await _userService.Login(usuario, contraseña);
        return Ok(respuesta);
    }

    [HttpGet("recupcontraemail/{usuario}/{email}")]
    public async Task<ActionResult<string>> recupcontraemail(string usuario, string email)
    {
        string respuesta = await _userService.Recupcontraemail(usuario, email);
        return Ok(respuesta);
    }

    [HttpGet("recupcontracelu/{usuario}/{numcelu}")]
    public async Task<ActionResult<string>> recupcontracelu(string usuario, int numcelu)
    {
        string respuesta = await _userService.Recupcontracelu(usuario, numcelu);
        return Ok(respuesta);
    }
}

