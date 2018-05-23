import React, {Component} from 'react';

class MealIngredientForm extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {   
        return(
            <div class="form-group row" style = {style}>
                <label for="example-text-input" class="col-1 col-form-label">Name</label>
                <div class="col-3">
                    <input class="form-control" type="text" id="example-text-input" />
                </div>
                <label for="example-text-input" class="col-1 col-form-label">Amount</label>
                <div class="col-2">
                    <input class="form-control" type="text" id="example-text-input" />
                </div>
            </div>
        );
    }
}

export default MealIngredientForm;