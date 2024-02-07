using Microsoft.AspNetCore.Mvc;

namespace AutoComplete.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AutoCompleteController : ControllerBase
    {
        [HttpGet]
        public String[] Index()
        {
            string[] words = System.IO.File.ReadAllLines("./Data/words.txt");
            return words;
        }
    }
}
