using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RandomFood.Models
{
    public class Meal
    {
		[Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }
        public int CookingDuration { get; set; }
        public List<Ingredient> Ingredients { get; set; }
    }

}
