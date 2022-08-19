using Microsoft.EntityFrameworkCore;
public class ItemDB : DbContext
{
    public ItemDB(DbContextOptions<ItemDB> options) : base(options) { }
    public DbSet<Item> item_table => Set<Item>();
    public DbSet<Company> supplier_table => Set<Company>();
    
    public ItemDB()
    {

    }
}