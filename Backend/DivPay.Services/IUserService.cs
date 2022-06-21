using DivPay.DTO.Request;
using DivPay.Entities;

namespace DivPay.Services
{
    public interface IUserService
    {
        Task<String> CreateUser(DtoUser user);
        Task DeleteUser(User user);
        Task<User> GetUser(int id);
        Task<List<User>> GetUsers();
        Task UpdateUser(int id,DtoUser user);
        Task<String> Login(String usuario,String contraseña);
        Task<String> Recupcontraemail(String usuario, String email);
        Task<String> Recupcontracelu(String usuario, int numcelu);

    }
}
