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

    public UserController(IUserService userservice)
    {
        this._userService = userservice;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> Get()
    {
        return await _userService.GetUsers();
    }

    [HttpGet("{id}", Name ="GetUser")]
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
        await _userService.CreateUser(request); 
        return Ok();
    }

    [HttpDelete]
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
    public async Task<ActionResult<User>> Put(int id,DtoUser request)
    {

        await _userService.UpdateUser(id, request);
        return NoContent();
    }
}

