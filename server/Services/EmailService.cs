using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using server.Models;

namespace server.Services
{
    
    public class EmailService
    {
        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendEmailAsync(ContactRequest request)
        {
            var email = new MimeMessage();

            email.From.Add(
                new MailboxAddress(
                    "Nera Development",
                    _configuration["EmailSettings:Username"]
                )
            );
            email.To.Add(
                new MailboxAddress(
                    "Nera Development",
                    _configuration["EmailSettings:Receiver"]
                )
            );

            email.ReplyTo.Add(
                new MailboxAddress(
                    request.Name,
                    request.Email
                )
            );

            email.Subject = $"Nova poruka sa sajta - {request.Name}";

            email.Body = new TextPart("plain")
            {
                Text = $"""
                Nova poruka sa Nera Development sajta:
                
                Ime: {request.Name}
                Email: {request.Email}
                Tip projekta: {request.Message}
                Budzet: {request.Budget}

                Poruka: {request.Message}
                {request.Message}
                """
            };

            using var smtp = new SmtpClient();

            await smtp.ConnectAsync(
                "smtp.gmail.com",
                587,
                SecureSocketOptions.StartTls
            );

            await smtp.AuthenticateAsync(
                _configuration["EmailSettings:Username"],
                _configuration["EmailSettings:AppPassword"]
            );

            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);
        }
    }
}