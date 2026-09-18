using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly EmailService _emailService;

    public ContactController(EmailService emailService)
    {
        _emailService = emailService;
    }

    [HttpPost]
    public async Task<IActionResult> SendContactRequest(ContactRequest request)
    {
        try
        {
            await _emailService.SendEmailAsync(request);

            return Ok(new
            {
                message = "Email sent successfully."
            });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Email error: {ex.Message}");
            return StatusCode(500, new
            {
                message = "An error occurred while sending the email.",
                error = ex.Message
            });
        }
    }
}