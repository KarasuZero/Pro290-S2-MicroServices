public class Company {
    public long Id { get; set; }
    public string? Title { get; set; }

    List<Item> Inventory = new List<Item>();
}