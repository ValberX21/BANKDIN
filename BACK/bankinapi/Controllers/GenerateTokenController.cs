using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace bankinapi.GenerateTokenController
{
    [ApiController]
    [Route("api/[controller]")]
    public class GenerateTokenController : ControllerBase
    {
        // GET: api/sample
        [HttpGet("basicGet")]
        [Authorize]
        public string Get()
        {
            // Your logic here
            return "This is a GET request";
        }
    }
}

       
