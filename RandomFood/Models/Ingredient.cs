using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RandomFood.Models
{
    public class Ingredient
    {
		[Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Amount { get; set; }
        [ForeignKey("Meal")]
        public int MealId { get; set; }
        public Meal Meal { get; set; }
    }
}
