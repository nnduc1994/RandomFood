import React, {Component} from 'react';
import MealCard from './MealCard'
import {connect} from 'react-redux';
import EmptyCard from './Widget/EmptyCard'

class RandomDrawlMealCard extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let defaultSrc = "https://grandchineserestaurant.com/img/placeholders/xcomfort_food_placeholder.png,qv=1.pagespeed.ic.x100Yi-Swz.png";
        return(
            <div className="container">
                <EmptyCard ImageSrc={defaultSrc} Title="WHAT TO EAT?" ></EmptyCard>
            </div>
        )
    }
}
const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(RandomDrawlMealCard);