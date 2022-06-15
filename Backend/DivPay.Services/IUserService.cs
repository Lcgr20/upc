using DivPay.DTO.Request;
using DivPay.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.Services
{
    public interface IUserService
    {
        Task<User> CreateUser(DtoUser userdto);
        Task DeleteUser(User user);
        Task<User> GetUser(int id);
        Task<List<User>> GetUsers();
        Task UpdateUser(int id,DtoUser user);

    }
}
