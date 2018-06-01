import React, { Component } from 'react';
import MealCard from './Widget/MealCard';
import {connect} from 'react-redux';
import _ from 'lodash';

class MealList extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {        
        let rows = this.props.meals.map(x => { return (<MealCard meal={x}></MealCard>)});
        return(
            <div className="card-columns">
                {rows}
            </div>
        )
    }
}

const mapStateToProps = (state) => 
{
    return {meals: state};
}

export default connect(mapStateToProps)(MealList);