import React, { Component } from 'react';

const INPUT_TYPE =
    {
        NAME: "input-ingredient-name",
        AMOUNT: "input-ingredient-amount"
    };

class MealIngredientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ingredient: this.props.Ingredient
        }
        this.onDataChange = this.onDataChange.bind(this);
        this.inputOnBlur = this.inputOnBlur.bind(this);
        this.delete = this.delete.bind(this);
    }

    inputOnBlur(e)
    {
        console.log(this.state.Ingredient)
        this.props.UpdateIngredient(this.state.Ingredient);
    }


    delete()
    {
        this.props.DeleteIngredient(this.state.Ingredient.clientId);
    }

    onDataChange(e) {
        const inputValue = e.target.value;
        const inputId = e.target.id;
        console.log(inputValue)
        this.setState((prevState) => {
            switch (inputId) {
                case INPUT_TYPE.NAME:
                    return { Ingredient: { ...prevState.Ingredient, Name: inputValue}  }
                case INPUT_TYPE.AMOUNT:
                    return { Ingredient: { ...prevState.Ingredient, Amount: inputValue}  }
            }
        });
    };

    render() {
        return (
            <div class="form-group row">
                <label for="example-text-input" class="col-1 col-form-label">Name</label>
                <div class="col-3">
                    <input class="form-control" onBlur={this.inputOnBlur} onChange={this.onDataChange} defaultValue={this.state.Ingredient.Name} type="text" id={INPUT_TYPE.NAME} />
                </div>
                <label for="example-text-input" class="col-1 col-form-label">Amount</label>
                <div class="col-2">
                    <input class="form-control" onBlur={this.inputOnBlur} onChange={this.onDataChange} defaultValue={this.state.Ingredient.Amount} type="text" id={INPUT_TYPE.AMOUNT} />
                </div>
                <div class="col-2" onClick={this.delete}>
                    <i className="fa fas fa-minus-circle fa-2x"></i>
                </div>
            </div>
        );
    }
}

export default MealIngredientForm;