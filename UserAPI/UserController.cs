using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Controllers
{
    [ApiController]
    [Route("userAPI")]
    public class MyController : ControllerBase
    {
        private readonly UserDB _db;

        public MyController(ILogger<MyController> logger, UserDB db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("test")]
        public ActionResult<string> test()
        {
            return "Hello netizen! The inventory is on-line!";
        }
    }
}