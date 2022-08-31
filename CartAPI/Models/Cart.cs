using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CartAPI.Models
{
    [BsonIgnoreExtraElements]
    public class Cart {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;
        
        [BsonElement("data")]
        public List<List<int>>? cartData {get; set;}
    }
}