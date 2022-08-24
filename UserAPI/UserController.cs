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

        [HttpPut]
        [Route("updateItem/")]
        public async Task<IResult> updateQuest(User user)
        {
            var currItem = await _db.user_table.FindAsync(user.Id);
            if (currItem != null) {
                currItem.Title = item.Title;
                currItem.unit_price = item.unit_price;
                currItem.Description = item.Description;
                await _db.SaveChangesAsync();
                return Results.Created($"/{item.Id}", item);
            }
            return Results.NoContent();
        }

        [HttpDelete]
        [Route("deleteQuest/{id}")]
        public async Task<IResult> deleteQuest(long id) {
            if (await _db.item_table.FindAsync(id) is Item quest) {
                _db.item_table.Remove(quest);
                await _db.SaveChangesAsync();
                return Results.Ok(quest);
            }
            return Results.NotFound();
        }
    }
}