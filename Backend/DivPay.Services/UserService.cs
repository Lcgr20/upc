﻿using DivPay.DataAccess;
using DivPay.DTO.Request;
using DivPay.Entities;
using Microsoft.EntityFrameworkCore;



namespace DivPay.Services
{
    public class UserService:IUserService
    {
        private readonly DivPayDBContext _context;

        public UserService(DivPayDBContext context)
        {
            this._context = context;
        }

        public async Task<String> CreateUser(DtoUser request)
        {
            User usercaso1 = await _context.Users.Where(u => u.Username == request.Username).FirstOrDefaultAsync();
            User usercaso2 = await _context.Users.Where(u => u.Dni == request.Dni).FirstOrDefaultAsync();
            if (usercaso1 == null&& usercaso2==null)
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
                return "registro correcto";
            }
            if(usercaso1 != null) { return "Este usuario ya se encuentra registrado"; }
            if (usercaso2 != null) { return "Este DNI ya se encuentra registrado a un usuario"; }
            return "a";
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

        public async Task<String> Login(String usuario, String contraseña)
        {
            User usercaso1 = await _context.Users.Where(u => u.Username == usuario).FirstOrDefaultAsync();
            if (usercaso1 == null)
            {
                return "El usuario no existe";
            }
            if (usercaso1.Password!= contraseña)
            {
                return "La contraseña es incorrecta";
            }
            else { return usercaso1.Id.ToString(); }
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
        public async Task<String> Recupcontraemail(String usuario, String email)
        {
            User usercaso1 = await _context.Users.Where(u => u.Username == usuario).FirstOrDefaultAsync();
            if (usercaso1 == null)
            {
                return "El usuario no existe";
            }
            if (usercaso1.Email != email)
            {
                return "Este email ingresado es incorrecto";
            }
            else { return "recuperacion exitosa"; }
        }
        public async Task<String> Recupcontracelu(String usuario, int numcelu)
        {
            User usercaso1 = await _context.Users.Where(u => u.Username == usuario).FirstOrDefaultAsync();
            if (usercaso1 == null)
            {
                return "El usuario no existe";
            }
            if (usercaso1.PhoneNumber!= numcelu)
            {
                return "Este número telefónico ingresado es incorrecto";
            }
            else { return "recuperacion exitosa"; }
        }

    }
}
