using Microsoft.EntityFrameworkCore;
using RandomFood.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RandomFood.Repositories
{
	public class MealRepository : IDisposable
	{
		private RandomFoodContext _context;

		public MealRepository(RandomFoodContext context)
		{
			_context = context;
		}

		public async Task<Meal> CreateMealsAsync(Meal meal)
		{
			await _context.Meals.AddAsync(meal);
			var result = await _context.SaveChangesAsync();
			return (result) ? meal : null;
		}

        public

		public async Task<List<Meal>> GetMealsAsync()
		{
			try
			{
				return await _context.Meals.Include(x => x.Ingredients).ToListAsync();
			}
			catch (Exception e)
			{
				throw new Exception($"Error while getting a list of meals.Error = {e.ToString()}");
			}
		}

		public void Dispose()
		{
			if (_context != null)
				_context.Dispose();
		}
	}
}
