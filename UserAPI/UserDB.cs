using Microsoft.EntityFrameworkCore;
public class UserDB : DbContext
{
    public UserDB(DbContextOptions<UserDB> options) : base(options) { }
    public DbSet<User> user_table => Set<User>();
    
    public UserDB()
    {

    }
}