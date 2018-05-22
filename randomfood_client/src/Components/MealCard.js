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

    flip()
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
        let style = 
        {
            width:'18rem'
        }
        let src = "https://www.metro.ca/userfiles/image/recipes/pizza-saucisse-piquante-2301.jpg";
        let ingredientImgSrc = "https://mazzainnovation.com/wp-content/uploads/2015/02/our-ingredients-side.jpg";

        let ingridentsList = this.props.meal.Ingredients.map(x => this.CreateIngredient(x));

        return(
                <div className="card-flip">
                        <div className={(this.state.isCardFront) ? "un-flip" : "flip"}>
                            <div className="front">
                                <div className="card" style={style}>
                                    <img className="card-img-top" src={src} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{this.props.meal.Name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cooking Duration: {this.props.meal.CookingDuration}</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="#" className="card-link" onClick={this.flip}>Ingredients</a>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                            <div className="card" style={style}>
                                    <img className="card-img-top" src={ingredientImgSrc} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{this.props.meal.Name}</h5>
                                        <p className="card-text">Ingredients</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {ingridentsList}
                                    </ul>
                                    <div className="card-body">
                                        <a href="#" className="card-link" onClick={this.flip}>Info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
        );
   }
}

export default MealCard;