using DivPay.DTO.Request;
using DivPay.Entities;

namespace DivPay.Services
{
    public interface IUserService
    {
        Task<User> CreateUser(DtoUser user);
        Task DeleteUser(User user);
        Task<User> GetUser(int id);
        Task<List<User>> GetUsers();
        Task UpdateUser(int id,DtoUser user);

    }
}
