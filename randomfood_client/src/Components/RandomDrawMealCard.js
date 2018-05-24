import React, {Components} from 'react';
import MealCard from './MealCard'
import {connect} from 'react-redux';

class RandomDrawlMealCard extends Components 
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return()
        {
            <div className="container">
            </div>
        }
    }
}
const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(RandomDrawlMealCard);