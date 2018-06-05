import React, {Component} from 'react'

const INPUT_TYPE = {
    NAME: "input-meal-name",
    COOKING_DURATION: "input-meal-cooking-duration",
    DESCRIPTION: "input-meal-description",
    PICTUREURL: "input-picture-url"
}

class EditMealForm extends Component
{
    constructor(props)
    {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(){}

    render()
    {
        return( 

            <form>
                  <div class="form-group row">
                        <label for="example-text-input" class="col-3 col-form-label">Name</label>
                        <div class="col-9">
                            <input onChange={this.onInputChange} defaultValue={this.props.Meal.Name} class="form-control"
                                type="text" id={INPUT_TYPE.NAME} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="example-text-input" class="col-3 col-form-label">Description</label>
                        <div class="col-9">
                            <textarea  onChange={this.onInputChange} value={this.props.Meal.Description} class="form-control"
                                type="text" id={INPUT_TYPE.DESCRIPTION} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="example-text-input" class="col-3 col-form-label">Cooking Duration (hour)</label>
                        <div class="col-2">
                            <input onChange={this.onInputChange} class="form-control" value={this.props.Meal.CookingDuration}
                                id={INPUT_TYPE.COOKING_DURATION} type="text" type="text" />
                        </div>
                        <label for="example-text-input" class="col-2 col-form-label">Picture URL</label>
                        <div class="col-5">
                            <input id={INPUT_TYPE.PICTUREURL} onChange={this.onInputChange}
                                class="form-control" value={this.props.Meal.PictureURL} type="text" />
                        </div>
                    </div>
            </form>
        );
    }
}

export default EditMealForm;

