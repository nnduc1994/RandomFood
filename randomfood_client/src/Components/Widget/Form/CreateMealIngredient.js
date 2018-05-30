import React, {Component} from 'react';

class MealIngredientForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Ingredient : {},
            test: ""
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.Test = this.Test.bind(this);
    }

    componentDidMount()
    {
        this.setState({Ingredient: this.props.Ingredient});
    }

    onNameChange(e)
    {  const nameValue = e.target.value;
       this.setState((prevState) => {
           return { Ingredient: { ...prevState.Ingredient, Name: nameValue}  }
       })
    }

    onAmountChange(e)
    {

    }

    Test(e)
    {
        e.preventDefault();
        console.log(this.state.Ingredient);
    }

    render()
    {   
        return(
            <div class="form-group row">
                <label for="example-text-input" class="col-1 col-form-label">Name</label>
                <div class="col-3">
                    <input class="form-control" onChange={this.onNameChange} value={this.state.Ingredient.Name} type="text" id="example-text-input" />
                </div>
                <label for="example-text-input" class="col-1 col-form-label">Amount</label>
                <div class="col-2">
                    <input class="form-control" onChange={this.onDataChange} value={this.state.Ingredient.Amount} type="text" id="example-text-input" />
                </div>
                <button onClick={this.Test}>Test</button>
            </div>
        );
    }
}

export default MealIngredientForm;