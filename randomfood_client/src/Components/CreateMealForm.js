import React, {Component} from 'react'
import {connect} from 'react-redux';

class CreateMealForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {   
            isCreating: false,
            newMeal : null
        }
    }

    render(){
        return(
            <div className="container">
                <form className="form-control">
                    <i className="fa fa-3x fa fa-plus-square-o	pull-right"></i>
                    <h3>New Meal Recipe</h3>
                </form>
            </div>
         
        );
    }

}

export default CreateMealForm;