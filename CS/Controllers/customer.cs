using Microsoft.AspNetCore.Mvc;

namespace cs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        // Add your methods here (e.g., GET, POST, etc.)

        [HttpGet]
        public IActionResult GetCustomers()
        {
            // Example: return a list of customers or just a placeholder
            return Ok(new { message = "Customers retrieved successfully" });
        }
    }
}
