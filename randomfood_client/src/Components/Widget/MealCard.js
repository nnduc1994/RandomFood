import React, { Component } from 'react';

class MealCard extends Component 
{
    constructor(props)
    {
        super(props);
      
        this.CreateIngredient = this.CreateIngredient.bind(this);
    }

    CreateIngredient(ingredient)
    {
            return(
                <li className="list-group-item">{ingredient.Name} - {ingredient.Amount}</li>
            );
    }

   render()
   {
        let ingridentsList = this.props.meal.Ingredients.map(x => this.CreateIngredient(x));
        return(
                <div>
                    <div className="card h-100">
                        <img className="card-img-top img-responsive" src={this.props.meal.PictureUrl} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.meal.Name}</h5>
                            <p className="card-text">{this.props.meal.Description}</p>
                            <p className="card-text">Cooking Duration: {this.props.meal.CookingDuration}</p>
                            <br/>
                            <ul className="list-group list-group-flush">
                               {ingridentsList}
                            </ul>
                        </div>
                           
                    </div>
                </div>
        );
   }
}

export default MealCard;