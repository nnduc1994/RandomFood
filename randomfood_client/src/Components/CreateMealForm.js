import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealIngredientForm from './Widget/Form/CreateMealIngredient';
import shortId from 'shortid';
import {CreateMeal} from "../Helpers/API/RandomMealAPIHelper"

const INPUT_TYPE = {
    NAME: "input-meal-name",
    COOKING_DURATION: "input-meal-cooking-duration",
    DESCRIPTION: "input-meal-description",
    PICTUREURL: "input-picture-url"
}

class CreateMealForm extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                Meal: {
                    Name: " ",
                    CookingDuration: 0,
                    PictureUrl: " ",
                    Ingredients: [],
                    Description: " "
                }
            }
        this.addIngredient = this.addIngredient.bind(this);
        this.createRecipe = this.createRecipe.bind(this);
        this.handleDeleteIngredient = this.handleDeleteIngredient.bind(this);
        this.handleUpdateIngredient = this.handleUpdateIngredient.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        const inputValue = e.target.value;
        const inputId = e.target.id;
        this.setState((prevState) => {
            switch (inputId) {
                case INPUT_TYPE.NAME:
                    return this.state.Meal.Name = inputValue
                case INPUT_TYPE.COOKING_DURATION:
                    return this.state.Meal.CookingDuration = inputValue
                case INPUT_TYPE.PICTUREURL:
                    return this.state.Meal.PictureUrl = inputValue
                case INPUT_TYPE.DESCRIPTION:
                    return this.state.Meal.Description = inputValue
            }
        });
    }

    addIngredient(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                Meal: {
                    ...prevState.Meal,
                    Ingredients: [...prevState.Meal.Ingredients,
                    { clientId: shortId.generate(), Name: "", Amount: 0 }]
                }
            }
        });
    }

    createRecipe(e) {
        e.preventDefault();
        CreateMeal(this.state.Meal)
            .then((data) => { 
                this.props.dispatch({
                    type:'CREATE_NEW_MEAL',
                    data});
                this.setState({
                    Meal: {
                        Name: " ",
                        CookingDuration: 0,
                        PictureUrl: " ",
                        Ingredients: [],
                        Description: " "
                    }
                })
              })
            .catch();
        console.log(this.state.Meal);
    }


    handleDeleteIngredient(DelIngredientId) {
        this.setState((prevState) => {
            return {
                Meal: {
                    ...prevState.Meal, Ingredients: prevState.Meal.Ingredients
                        .filter(x => x.clientId != DelIngredientId)
                }
            }
        })
    }

    handleUpdateIngredient(Ingredient) {
        this.setState(prevState => {
            return {
                Meal: {
                    ...prevState.Meal, Ingredients: prevState.Meal.Ingredients.map((i) => {
                        if (i.clientId == Ingredient.clientId) {
                            i.Name = Ingredient.Name;
                            i.Amount = Ingredient.Amount;
                            return i;
                        }
                        return i;
                    })
                }
            };
        })
    }

    render() {
        let tipNoIngredient = <div class="alert alert-warning sixty_percent_width margin_center" role="alert">
            Click Add button to add more Ingredient(s)
                              </div>;

        let ingredientDOM = this.state.Meal.Ingredients.map(i => {
            return (
                <MealIngredientForm onIngredientUpdate={this.onIngredientUpgrade}
                    Ingredient={i} key={i.clientId}
                    DeleteIngredient={this.handleDeleteIngredient}
                    UpdateIngredient={this.handleUpdateIngredient}>
                </MealIngredientForm>
            );
        });

        return (
            <div className="create-meal-form">
                <form>
                    <h3>Create Recipe</h3>
                    <div class="form-group row">
                        <label for="example-text-input" class="col-3 col-form-label">Name</label>
                        <div class="col-9">
                            <input onChange={this.onInputChange} value={this.state.Meal.Name} class="form-control"
                                type="text" id={INPUT_TYPE.NAME} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="example-text-input" class="col-3 col-form-label">Description</label>
                        <div class="col-9">
                            <textarea  onChange={this.onInputChange} value={this.state.Meal.Description} class="form-control"
                                type="text" id={INPUT_TYPE.DESCRIPTION} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="example-text-input" class="col-3 col-form-label">Cooking Duration (hour)</label>
                        <div class="col-2">
                            <input onChange={this.onInputChange} class="form-control" value={this.state.Meal.CookingDuration}
                                id={INPUT_TYPE.COOKING_DURATION} type="text" type="text" />
                        </div>
                        <label for="example-text-input" class="col-2 col-form-label">Picture URL</label>
                        <div class="col-5">
                            <input id={INPUT_TYPE.PICTUREURL} onChange={this.onInputChange}
                                class="form-control" value={this.state.Meal.PictureURL} type="text" />
                        </div>
                    </div>
                    <hr />
                    <h4 className="inline">Ingredients</h4>
                    <button className="inline btn btn-success" onClick={this.addIngredient}>
                        <i class="fa fa-plus"></i> Add
                    </button>
                    <div className=" form-group ingredients-form">
                        {(ingredientDOM.length > 0) ? ingredientDOM : tipNoIngredient}
                    </div>
                    <button className="btn btn-default" onClick={this.createRecipe}>Create Recipe</button>
                </form>
            </div>
        );
    }

}

export default connect()(CreateMealForm);
