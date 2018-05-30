import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealIngredientForm from './Widget/Form/CreateMealIngredient';

class CreateMealForm extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                isCreating: false,
                IngredientList: []
            }
        this.addIngredient = this.addIngredient.bind(this);
    }
    
    addIngredient()
    {
        this.setState((prevState) => {
            return {
                IngredientList: [...prevState.IngredientList, {name:"test" }]
            }
        });
    }

    render() {
        let ingredientDOM = this.state.IngredientList.map(x => {return <MealIngredientForm></MealIngredientForm>});
        console.log(ingredientDOM);
        return (
            <div className="create-meal-form">
                <form className="">
                        <h3>Create Recipe</h3>
                        <div class="form-group row">
                        <label for="example-text-input" class="col-3 col-form-label">Name</label>
                        <div class="col-9">
                            <input class="form-control" type="text"  id="example-text-input" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="example-text-input" class="col-3 col-form-label">Cooking Duration</label>
                        <div class="col-2">
                            <input class="form-control" type="text" type="number" id="example-text-input" />
                        </div>
                        <label for="example-text-input" class="col-2 col-form-label">Picture URL</label>
                        <div class="col-5">
                            <input class="form-control" type="text"  id="example-text-input" />
                        </div>
                    </div>
                    <hr/>
                    <h4>Ingredients</h4>
                    <div className="ingredients-form">
                        <button onClick={this.addIngredient}>Add</button>
                        {ingredientDOM}
                    </div>
                </form>
            </div>
        );
    }

}

export default CreateMealForm;