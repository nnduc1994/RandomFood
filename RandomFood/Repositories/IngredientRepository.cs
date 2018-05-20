using Microsoft.EntityFrameworkCore;
using RandomFood.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RandomFood.Repositories
{
    public class IngredientRepository : IDisposable
    {
        private RandomFoodContext _context;

        public IngredientRepository(RandomFoodContext context)
        {
            _context = context;
        }

        public async Task<bool> CreateIngredientAsync(Ingredient input)
        {
            try
            {
                _context.Ingredients.Add(input);
                return await _context.SaveChangesAsync() > 0;
            }
			catch(Exception e)
            {
				throw new Exception($"Error while Create new ingredient. Error = {e.ToString()}");
			}
        }

        public void Dispose()
        {
            if (_context != null)
                _context.Dispose();
        }
    }
}
