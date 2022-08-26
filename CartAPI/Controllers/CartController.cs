using Microsoft.AspNetCore.Mvc;
using CartAPI.Services;
using CartAPI.Models;

namespace CartAPI.Controllers
{
    [ApiController]
    [Route("cartAPI")]
    public class CartController : ControllerBase
    {
        private readonly ICartServices cartServices;

        public CartController (ICartServices cartServices) {
            this.cartServices = cartServices;
        }

        [HttpGet]
        public ActionResult<List<Cart>> Get() {
            return cartServices.Get();
        }

        [HttpGet]
        [Route("test")]
        public ActionResult<string> test()
        {
            return "Hello netizen! The cart is on-line!";
        }
        
        [HttpGet("{id}")]
        public ActionResult<Cart> Get(string id) {
            var cart = cartServices.Get(id);

            if (cart == null) {
                return NotFound($"Cart with Id = {id} not found");
            }

            return cart;
        }

        [HttpPost]
        public ActionResult<Cart> Post([FromBody] Cart cart) {
            cartServices.Create(cart);
            return CreatedAtAction(nameof(Get), new {id = cart.Id}, cart);
        }

        [HttpPut("{id}")]
        public ActionResult<Cart> Put(string id,[FromBody] Cart cartIn) {
            var cart = cartServices.Get(id);
            if (cart == null) {
                return NotFound($"Cart with Id = {id} not found");
            }

            cartServices.Update(id, cartIn);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<Cart> Delete(string id) {
            var cart = cartServices.Get(id);
            if (cart == null) {
                return NotFound($"Cart with Id = {id} not found");
            }

            cartServices.Remove(id);

            return NoContent();
        }
    }
}