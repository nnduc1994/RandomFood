using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RandomFood.Models
{
    public class RandomFoodContext: DbContext
    {
        public RandomFoodContext(DbContextOptions<RandomFoodContext> options)
           : base(options) { }


        public DbSet<Meal> Meals { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<History> Histories { get; set; }

    }
}
