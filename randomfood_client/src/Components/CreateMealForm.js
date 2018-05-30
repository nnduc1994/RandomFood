import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealIngredientForm from './Widget/Form/CreateMealIngredient';
import shortId from 'shortid';

class CreateMealForm extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                isCreating: false,
                IngredientList: [],
                newMeal: {}
            }
        this.addIngredient = this.addIngredient.bind(this);
        this.createRecipe = this.createRecipe.bind(this);
    }
    
    addIngredient(e)
    {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                IngredientList: [...prevState.IngredientList, { clientId: shortId.generate()}]
            }
        });
    }

    createRecipe(e)
    {
        e.preventDefault();
        console.log(this.state.IngredientList);
    }

    onIngredientUpgrade(ingredient)
    {
        this.setState((prevState) => {
            return {
                IngredientList: prevState.IngredientList.map(x => x.clientId == ingredient.client)
                                .then(ingredient => {console.log("pla pla")})
            }
        });
    }

    render() {
        let ingredientDOM = this.state.IngredientList.map(i => {return <div>
                                        <MealIngredientForm onIngredientUpdate = {this.onIngredientUpgrade} 
                                        Ingredient = {i} key={i.clientId}>
                                        </MealIngredientForm>
                                        <i className="far fa-trash-alt"></i> 
                                    </div> });

        return (
            <div className="create-meal-form">
                <form className="">
                        <h3>Create Recipe</h3>
                        <div class="form-group row">
                        <label for="example-text-input" class="col-3 col-form-label">Name</label>
                        <div class="col-9">
                            <input value= {this.state.newMeal.Name} class="form-control" 
                            type="text" id="example-text-input" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="example-text-input" class="col-3 col-form-label">Cooking Duration</label>
                        <div class="col-2">
                            <input class="form-control" value = {this.state.newMeal.CookingDuration} 
                            type="text" type="number" />
                        </div>
                        <label for="example-text-input" class="col-2 col-form-label">Picture URL</label>
                        <div class="col-5">
                            <input class="form-control" value={this.state.newMeal.PictureURL}  type="text"/>
                        </div>
                    </div>
                    <hr/>
                    <h4>Ingredients</h4>
                    <div className="ingredients-form">
                        <button onClick={this.addIngredient}>Add</button>
                        {ingredientDOM}
                    </div>
                    <button className="btn btn-default" onClick={this.createRecipe}>Create Recipe</button>
                </form>
            </div>
        );
    }

}

export default CreateMealForm;