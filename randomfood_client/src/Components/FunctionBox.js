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
            <div className="container">
                <CreatMealForm></CreatMealForm>
                <RandomPickMeal></RandomPickMeal>
            </div>
        )
    }
}
const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(FunctionBox);