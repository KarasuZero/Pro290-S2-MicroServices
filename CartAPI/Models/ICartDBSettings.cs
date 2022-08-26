namespace CartAPI.Models
{
    public interface ICartDBSettings {
        string CollectionName {get; set;}
        string ConnectionString {get; set;}
        string DatabaseName {get; set;}
    }
}