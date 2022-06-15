using DivPay.DataAccess;
using DivPay.DTO.Request;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivPay.Services
{
    public class UserService:IUserService
    {
        private readonly DivPayDBContext _context;

        public UserService(DivPayDBContext context)
        {
            this._context = context;
        }

        public async Task<User> CreateUser(DtoUser request)
        {
            var user = new User()
            {
                Username = request.Username,
                Email = request.Email,
                Name = request.Name,
                Dni = request.Dni,
                PhoneNumber = request.PhoneNumber,
                Age = request.Age,
                Password = request.Password,
                Status = true
            };
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task DeleteUser(User user)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }

        public async Task<User> GetUser(int id)
        {
            return await _context.Users.Where(u => u.Id == id).FirstOrDefaultAsync();
        }

        public async Task<List<User>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }


        public async Task UpdateUser(int id,DtoUser request)
        {
            var entity = await _context.Users.FindAsync(id);

            entity.Username = request.Username;
            entity.Email = request.Email;
            entity.Name = request.Name;
            entity.Age = request.Age;
            entity.Dni = request.Dni;
            entity.PhoneNumber = request.PhoneNumber;
            entity.Password = request.Password;

            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
