using System.Text;
using bankinapi.Models;
using bankinapi.Token;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace bankinapi.GenerateTokenController
{
    [ApiController]
    [Route("[controller]")]
    public class GenerateTokenController : ControllerBase
    {
        // GET: api/sample
        [HttpGet("geraToken")]
        //[Authorize]
        public string Get([FromBody] Usuario usu)
        {
            // var key = Encoding.UTF8.GetBytes("KJNQKDHB453Y35ˆˆ&(1@#%4Y5KJBDLJQH)");

            // GenerateToken gTk = new GenerateToken("","",10,10);

            // var r = gTk.GenerateTokens("key");
            // // Your logic here
            return "This is a GET request ";
        }
    }
}

       
