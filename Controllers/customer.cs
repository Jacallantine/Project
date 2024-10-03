using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient; 
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using cs.CONNECTION; 

namespace cs.Controllers
{  

 [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // POST: api/user/createUser
        [HttpPost("createUser")]
        public async Task<IActionResult> CreateUser([FromBody] user newUser)
        {
            // Define the connection string
            var connectionString = new ConnectionString().cs;

            using (var connection = new MySqlConnection(connectionString))
            {
                await connection.OpenAsync();

                // Prepare the SQL command
                string query = "INSERT INTO users (first_name, last_name, email_address, address, zip, state, gender, password) VALUES (@FirstName, @LastName, @Email, @Address, @ZipCode, @State, @Gender, @Password)";

                using (var command = new MySqlCommand(query, connection))
                {
                    // Bind parameters
                    command.Parameters.AddWithValue("@FirstName", newUser.first_name);
                    command.Parameters.AddWithValue("@LastName", newUser.last_name);
                    command.Parameters.AddWithValue("@Email", newUser.email);
                    command.Parameters.AddWithValue("@Password", newUser.password);
                    command.Parameters.AddWithValue("@Address", newUser.address);
                    command.Parameters.AddWithValue("@ZipCode", newUser.zipcode);
                    command.Parameters.AddWithValue("@State", newUser.state);
                    command.Parameters.AddWithValue("@Gender", newUser.gender);

                    // Execute the command
                    await command.ExecuteNonQueryAsync();
                }
            }

            return Ok(new { message = "User created successfully!" });
        }





























    }
}



 