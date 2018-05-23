import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreatMealForm from './CreateMealForm';
import RandomPickMeal from './Widget/RandomPickMeal'
class FunctionBox extends Component
{
    constructor(props)
    {
        super(props);
    }
 
    render()
    {   
        return(
            <div className="functionBox-container">
                <div className="functionBox-feature">
                    <div className="main-feature">
                        <RandomPickMeal></RandomPickMeal>
                    </div>
                    <div className="new-meal-box">
                        <CreatMealForm></CreatMealForm>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(FunctionBox);