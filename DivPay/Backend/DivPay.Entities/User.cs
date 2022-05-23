using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DivPay.Entities;

[Table("Usuarios")]
public class User: EntityBase
{
    [Required]
    public int UserId { get; set; }

    [Required]
    public int MyProperty { get; set; }

    [StringLength(30)]
    [Required]
    public string Username { get; set; }

    [StringLength(50)]
    [Required]
    public string Name { get; set; }

    [StringLength(50)]
    [Required]
    public string Email { get; set; }

    [Required]
    public int DNI { get; set; }

    [Required]
    public Int32 PhoneNumber { get; set; }

    [Required]
    public int Age { get; set; }

}
