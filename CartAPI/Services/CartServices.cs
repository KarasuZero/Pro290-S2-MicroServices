using CartAPI.Models;
using MongoDB.Driver;

namespace CartAPI.Services {
    public class CartServices : ICartServices {

        private readonly IMongoCollection<Cart> _carts;

        public CartServices(ICartDBSettings settings, IMongoClient mongoClient) {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _carts = database.GetCollection<Cart>(settings.CollectionName);
        }

        public Cart Create(Cart cart) {
            _carts.InsertOne(cart);
            return cart;
        }

        public List<Cart> Get() {
            return  _carts.Find(cart => true).ToList();
        }

        public Cart Get(string Id) {
            return _carts.Find(cart => cart.Id == Id).FirstOrDefault();
        }
        
        public void Remove (string Id) {
            _carts.DeleteOne(cart => cart.Id == Id);
        }

        public void Update (string Id, Cart cart) {
            _carts.ReplaceOne(cart => cart.Id == Id, cart);
        }
    }
}