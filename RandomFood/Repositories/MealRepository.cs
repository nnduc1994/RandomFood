using Microsoft.EntityFrameworkCore;
using RandomFood.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RandomFood.Repositories
{
    public class MealRepository:IDisposable
    {
        private RandomFoodContext _context;

        public MealRepository(RandomFoodContext context)
        {
            _context = context;
        }
        
        public async Task<List<Meal>> GetMealsAsync()
        {
            try
            {
                return await _context.Meals.Include(x => x.Ingredients).ToListAsync();
            }
            catch (Exception e)
            {
                return await Task.FromResult<List<Meal>>(null);
            }
        } 

        public void Dispose()
        {
            if (_context != null)
                _context.Dispose();
        }
    }
}
