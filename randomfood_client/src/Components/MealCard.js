import React, { Component } from 'react';

class MealCard extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            isCardFront : true
        }
        this.flip = this.flip.bind(this);
        this.CreateIngredient = this.CreateIngredient.bind(this);
    }

    flip(e)
    {  
       this.setState((prevState) => {
           return {
               isCardFront: !prevState.isCardFront
           }
       })
    }

    CreateIngredient(ingredient)
    {
            return(
                <li className="list-group-item">{ingredient.Name} - {ingredient.Amount}</li>
            );
    }

   render()
   {
        let src = "https://www.metro.ca/userfiles/image/recipes/pizza-saucisse-piquante-2301.jpg";
        let ingredientImgSrc = "https://mazzainnovation.com/wp-content/uploads/2015/02/our-ingredients-side.jpg";
        let style = {visibility: 'hidden'}
        let ingridentsList = this.props.meal.Ingredients.map(x => this.CreateIngredient(x));
        return(
                <div>
                    <div className="card">
                        <img className="card-img-top img-responsive" src={src} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.meal.Name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="card-text">Cooking Duration: {this.props.meal.CookingDuration}</p>
                        </div>
                            <ul className="list-group list-group-flush">
                               {ingridentsList}
                            </ul>
                    </div>
                </div>
        );
   }
}

export default MealCard;