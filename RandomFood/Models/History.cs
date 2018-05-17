using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RandomFood.Models
{
    public class History
    {
        public int Id { get; set; }
        public DateTime date { get; set; }
        public MealTimeFrame MealTimeFrame { get; set; }
        [ForeignKey("Meal")]
        public int MealId { get; set; }
        public Meal Meal { get; set; }
    }
    public enum MealTimeFrame : int
    {
         Breakfast = 1,
         Lunch = 2,
         Brunch = 3,
         Dinner = 4,
         Night = 5
    }
}
