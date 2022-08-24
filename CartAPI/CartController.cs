using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Controllers
{
    [ApiController]
    [Route("cartAPI")]
    public class MyController : ControllerBase
    {
        private readonly ItemDB _db;

        public MyController(ILogger<MyController> logger, CartDB db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("test")]
        public ActionResult<string> test()
        {
            return "Shopping cart test....";
        }

        [HttpGet]
        [Route("getCartTotalItem")]
        public async Task<ActionResult<List<Cart>>> getAllQuests()
        {
            return await _db.cart_table.ToListAsync();
        }
        
        [HttpGet]
        [Route("getCart/{id}")]
        public async Task<ActionResult<Item>> getQuest(long id)
        {
            var quest = await _db.cart_table.FindAsync(id);
            if (quest == null) {
                return NotFound();
            }
            return Ok(quest);
        }

        [HttpPost]
        public async Task<IResult> createQuest(Cart quest)
        {
            _db.cart_table.Add(quest);
            await _db.SaveChangesAsync();
            return Results.Created($"/{quest.Id}", quest);
        }

        [HttpPut]
        [Route("updateCart/")]
        public async Task<IResult> updateQuest(Cart cart)
        {
            //TODO
        }

        [HttpDelete]
        [Route("deleteQuest/{id}")]
        public async Task<IResult> deleteQuest(long id) {
            if (await _db.cart_table.FindAsync(id) is Cart quest) {
                _db.cart_table.Remove(quest);
                await _db.SaveChangesAsync();
                return Results.Ok(quest);
            }
            return Results.NotFound();
        }
    }
}