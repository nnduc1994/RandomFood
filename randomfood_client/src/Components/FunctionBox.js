import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreatMealForm from './CreateMealForm';
import RandomPickMeal from './Widget/RandomPickMeal'
class FunctionBox extends Component
{
    constructor(props)
    {
        super(props);
        this.randomPickCard = this.randomPickCard.bind(this);
        this.state = {
            currentRandomcard: null
        }
    }

    randomPickCard() 
    {
        this.setState(
            { currentRandomcard: this.props.meals[Math.floor(Math.random() * this.props.meals.length)] }
        )
    }
    
    render()
    {   
        return(
            <div className="row">
                <div className="col-md-3">
                <RandomPickMeal></RandomPickMeal>

                </div>
            </div>

            // <div className="functionBox-container">
            //     <div class="functionBox-feature">
            //         <div className="main-feature">
            //             <RandomPickMeal></RandomPickMeal>
            //         </div>
            //         <div className="new-meal-box">
            //             <i className="fa fa-3x fa fa-plus-square-o	pull-right"></i>
            //             <h3>New Meal Recipe</h3>
            //         </div>
            //         <div className="random-meal-box">
            //         </div>
            //     </div>
            // </div>
        )
    }
}
const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(FunctionBox);