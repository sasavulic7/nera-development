using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class ContactRequest
{
    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [MaxLength(100)]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string ProjectType { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string Budget { get; set; } = string.Empty;

    [Required]
    [MaxLength(5000)]
    public string Message { get; set; } = string.Empty;
}