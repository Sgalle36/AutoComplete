using Microsoft.AspNetCore.Mvc;

namespace AutoComplete.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AutoCompleteController : ControllerBase
    {
        [HttpGet(Name = "GetAutoComplete")]
        public String[] Get()
        {
            return System.IO.File.ReadAllLines("./Data/words.txt");
        }
    }
}
