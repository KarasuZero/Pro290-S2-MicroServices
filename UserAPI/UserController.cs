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

        [HttpGet]
        [Route("getAllUsers")]
        public async Task<ActionResult<List<User>>> getAllQuests()
        {
            return await _db.user_table.ToListAsync();
        }

        [HttpGet]
        [Route("getUser/{id}")]
        public async Task<ActionResult<User>> getQuest(long id)
        {
            var quest = await _db.user_table.FindAsync(id);
            if (quest == null) {
                return NotFound();
            }
            return Ok(quest);
        }

        [HttpPost]
        [Route("addUser")]
        public async Task<IResult> createQuest(User user)
        {
            _db.user_table.Add(user);
            await _db.SaveChangesAsync();
            return Results.Created($"/{user.Id}", user);
        }

        [HttpPost]
        [Route("loginUser/")]
        public async Task<IResult> loginUser(string Password, string Username) {
            var currUser = await _db.user_table.FindAsync(Username);
            if (currUser != null) {
                if (currUser.Password == Password) {
                    return Results.Accepted("Login!");
                }
                return Results.NoContent();
            }
            return Results.NoContent();
        }

        [HttpPut]
        [Route("updateUser/")]
        public async Task<IResult> updateQuest(User user)
        {
            var currUser = await _db.user_table.FindAsync(user.Id);
            if (currUser != null) {
                currUser.FName = user.FName;
                currUser.LName = user.LName;
                currUser.Email = user.Email;
                await _db.SaveChangesAsync();
                return Results.Created($"/{user.Id}", user);
            }
            return Results.NoContent();
        }

        [HttpDelete]
        [Route("deleteUser/{id}")]
        public async Task<IResult> deleteQuest(long id) {
            if (await _db.user_table.FindAsync(id) is User user) {
                _db.user_table.Remove(user);
                await _db.SaveChangesAsync();
                return Results.Ok(user);
            }
            return Results.NotFound();
        }
    }
}