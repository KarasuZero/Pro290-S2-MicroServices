using CartAPI.Models;

namespace CartAPI.Services {
    public interface ICartServices {
        List<Cart> Get();
        Cart Get(string Id);
        Cart Create(Cart cart);
        void Update(string Id, Cart cart);
        void Remove(string Id);
    }
}