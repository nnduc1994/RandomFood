using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using RandomFood.Models;
using RandomFood.Repositories;

namespace RandomFood.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class FoodController : Controller
    {
        IngredientRepository _ingredientRepo;
        MealRepository _mealRepository;

        public FoodController(RandomFoodContext context)
        {
            _ingredientRepo = new IngredientRepository(context);
            _mealRepository = new MealRepository(context);
        }


        [HttpGet]
        [Route("Meals")]
        public async Task<ActionResult> GetMealsAsync()
        {
            var result = await _mealRepository.GetMealsAsync();
            return Ok(result);
        }

        [HttpPost]
        [Route("create")]
		public async Task<IActionResult> CreateMeal([FromBody]Meal meal)
        {
			if (meal != null)
            {
				var result = await _mealRepository.CreateMealsAsync(meal);
                if (result != null)
                {
                    return  Created("",result);
                }
                return BadRequest("Cannot create meal");
            }
            return BadRequest("No meal found");
        }
    }
}