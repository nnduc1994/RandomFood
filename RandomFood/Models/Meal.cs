using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RandomFood.Models
{
    public class Meal
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CookingDuration { get; set; }
        public List<Ingredient> Ingredients { get; set; }
    }

}
